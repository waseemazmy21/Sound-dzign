import PropTypes from 'prop-types';

const MenuButton = ({ icon, toggleMenu, isMenuOpen }) => {
  return (
    <button
      aria-expanded={isMenuOpen}
      aria-label='close Menu'
      onClick={toggleMenu}
    >
      <img aria-hidden={true} src={icon} className='w-8 h-8' alt='' />
    </button>
  );
};

MenuButton.propTypes = {
  icon: PropTypes.string.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
};

export default MenuButton;
