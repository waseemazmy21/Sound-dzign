import PropTypes from 'prop-types';

const Heading = ({ text, lineColor = 'red' }) => {
  return (
    <div className='mb-[2.5rem]'>
      <h2 className='font-extrabold text-[1.5rem] md:text-[2.5rem]'>{text}</h2>
      <span
        aria-hidden={true}
        className={`block w-[3.75rem] h-1 bg-${lineColor}`}
      ></span>
    </div>
  );
};

Heading.propTypes = {
  text: PropTypes.string.isRequired,
  lineColor: PropTypes.string,
};

export default Heading;
