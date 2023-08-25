import { heroImage } from '../assets';

const Header = () => {
  return (
    <header
      className='w-full h-screen min-h-[500px] bg-cover bg-bottom'
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className='container h-full flex justify-end items-end'>
        <div className=' w-[19rem] sm:w-[22.3rem] xl:w-[28.3rem] border-4 border-white border-b-0 bg-semiBlack backdrop-blur-[25px] p-[2.8rem_1.5rem] sm:p-[3.3rem_2.5rem_3.8rem] rounded-t-[1.25rem]'>
          <div className='mb-4'>
            <h1 className='font-extrabold'>Sound Design Masterclass</h1>
            <span className='block w-[3.75rem] h-1 bg-red'></span>
          </div>

          <p className='font-alegreya text-[2rem] sm:text-[2.5rem] font-bold mb-4'>
            Learn the Art of Sound Design
          </p>

          <a
            href='#'
            className='py-3 px-8 bg-red hover:bg-brightRed rounded-xl font-bold'
          >
            Demo Lesson
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
