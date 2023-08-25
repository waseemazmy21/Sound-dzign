import Heading from './Heading';
import { posts } from '../constants';

const Blog = () => {
  return (
    <section id='blog' className='bg-brightRed'>
      <div className='container paddingY flex flex-col'>
        <Heading text='Latest Posts' lineColor='bg-yellow' />

        <div className='flex r flex-row flex-wrap justify-center gap-8 mb-8'>
          {posts.map((blog) => (
            <a
              href='#blog'
              key={blog.id}
              className=' w-[19rem] bg-white rounded-xl flex-grow relative'
            >
              <img
                className='w-full h-[10rem] object-cover rounded-xl'
                src={blog.img}
                alt=''
              />
              <h3 className='font-alegreya text-[1.125rem] text-black font-bold px-4 py-6'>
                {blog.title}
              </h3>

              <span className='absolute top-4 right-4 bg-white rounded-full text-black font-alegreya text-sm font-bold px-4 py-1'>
                {blog.badge}
              </span>
            </a>
          ))}
        </div>

        <a
          href='#blog'
          className='font-alegreya font-bold px-8 py-1 rounded-xl bg-white text-black self-end'
        >
          All Posts
        </a>
      </div>
    </section>
  );
};

export default Blog;
