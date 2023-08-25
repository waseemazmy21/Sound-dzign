import { bgElement2, studentIcon, videoIcon } from '../assets';

const Info = () => {
  return (
    <section className='bg-dark'>
      <div className='container paddingY '>
        <div
          className='bg-no-repeat bg-[top_left] p-8'
          style={{ backgroundImage: `url(${bgElement2})` }}
        >
          <div className='flex flex-col items-center space-y-20 sm:space-y-0 sm:flex-row sm:justify-around '>
            <div className='flex flex-col items-center'>
              <img
                src={studentIcon}
                alt='student image'
                className='w-[100px] h-[100px]'
              />
              <p className='font-black text-[2rem]'>23,000+</p>
              <p className='font-alegreya text-2xl font-bold'>Students</p>
            </div>

            <div className='flex flex-col items-center'>
              <img
                src={videoIcon}
                alt='student image'
                className='w-[100px] h-[100px]'
              />
              <p className='font-black text-[2rem]'>26 Hrs</p>
              <p className='font-alegreya text-2xl font-bold'>Video Content</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
