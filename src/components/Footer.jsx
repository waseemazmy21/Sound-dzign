import { githubIcon } from '../assets';
import { socials } from '../constants';

const Footer = () => {
  return (
    <footer className='bg-black'>
      <div className='container padding-t pb-4'>
        <div className='flex flex-col items-center text-center sm:flex-row sm:justify-between  justify-between gap-12'>
          {/* logo and socials */}
          <div className='flex flex-col gap-8'>
            <a href='#' className='font-bold'>
              Sound<span className='text-red'>DZign</span>
            </a>
            <ul className='flex gap-4'>
              {socials.map((social) => (
                <li key={social.id}>
                  <a
                    href={social.url}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <img
                      src={social.img}
                      alt={social.alt}
                      className='w-8 h-8'
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* quick links */}
          <div>
            <h4 className='font-alegreya text-[1.125rem] text-red font-bold mb-2'>
              Quick Links
            </h4>
            <ul>
              <li>
                <a href='#blog' className='font-alegreya'>
                  Blog
                </a>
              </li>
              <li>
                <a href='' className='font-alegreya'>
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          {/* contact */}
          <div>
            <h4 className='font-alegreya text-[1.125rem] text-red font-bold mb-2'>
              Contact Us
            </h4>
            <ul>
              <li>
                <a href='' className='font-alegreya'>
                  contact@email.com
                </a>
              </li>
              <li>
                <a href='' className='font-alegreya'>
                  +1 999 9999 999
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className='border-t-2 border-gray-500 mt-8 mb-4' />
        <p className='text-center'>
          <a
            href='https://github.com/waseemazmy21/Sound-dzign'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-500 hover:text-white flex flex-col xs:flex-row items-center justify-center'
          >
            <img src={githubIcon} alt='GitHub Icon' className='w-5 h-5 mr-2' />
            Check out the repository on GitHub
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
