import { useState } from 'react';
import Heading from './Heading';
import { topics } from '../constants';
import { bgElement1 } from '../assets';

const Topics = () => {
  const [activeTopicIndex, setActiveTopicIndex] = useState(0);
  return (
    <section className='bg-black'>
      <div className='container paddingY '>
        <div
          className='bg-no-repeat bg-[bottom_right]'
          style={{ backgroundImage: `url(${bgElement1})` }}
        >
          <Heading text='What will you learn?' className='mb-20' />

          <div className='flex  justify-between'>
            <ul className='space-y-8'>
              {topics.map((topic, index) => (
                <li
                  onMouseEnter={() => setActiveTopicIndex(index)}
                  className='font-alegreya text-xl marker md:cursor-pointer'
                  key={topic.id}
                >
                  {topic.title}
                </li>
              ))}
            </ul>
            <div className='hidden md:block w-[385px] lg:w-[550px]   self-end pr-4 pb-4'>
              <img
                src={topics[activeTopicIndex].img}
                alt=''
                className='w-full'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Topics;
