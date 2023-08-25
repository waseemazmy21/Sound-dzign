import { useState, useEffect, useRef } from 'react';
import { menuIcon, closeIcon } from '../assets';
import MenuButton from './MenuButton';
import { navLinks } from '../constants';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = (e) => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
    e.stopPropagation();
  };

  useEffect(() => {
    function handleClickOutsideMenu(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener('click', handleClickOutsideMenu);

    return () => {
      document.removeEventListener('click', handleClickOutsideMenu);
    };
  }, []);

  return (
    <div className=' fixed container z-10 left-0 right-0 top-4'>
      <nav className='  rounded-b-xl bg-semiBlack backdrop:blur-[20px] p-6 md:p-8 flex justify-between items-center'>
        <a href='#' className='font-bold'>
          Sound<span className='text-red'>DZign</span>
        </a>

        {/* Mobile menu */}
        <div className='md:hidden'>
          <MenuButton
            isMenuOpen={isMenuOpen}
            toggleMenu={toggleMenu}
            icon={menuIcon}
          />

          <ul
            ref={menuRef}
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } fixed top-0 left-0 right-0 z-20 bg-menuBg py-12 px-8 flex flex-col slide-bottom`}
          >
            <li className='self-end'>
              <MenuButton
                isMenuOpen={isMenuOpen}
                toggleMenu={toggleMenu}
                icon={closeIcon}
              />
            </li>

            {navLinks.map((link, index) => (
              <li
                className={`font-extrabold  ${
                  navLinks.length - 1 !== index ? 'mb-[1.88rem]' : 'mb-0'
                }`}
                key={link.id}
              >
                <a onClick={() => setIsMenuOpen(false)} href={`#${link.id}`}>
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop menu */}
        <ul className={`hidden md:flex`}>
          {navLinks.map((link, index) => (
            <li
              className={`font-extrabold  ${
                navLinks.length - 1 !== index ? 'mr-[3.12rem]' : 'mr-0'
              }`}
              key={link.id}
            >
              <a onClick={() => setIsMenuOpen(false)} href={`#${link.id}`}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

{
  /*  */
}
export default Navbar;
