import Heading from './Heading';
import { testimonials } from '../constants';

const Testimonials = () => {
  return (
    <section id='testimonials' className='bg-dark'>
      <div className='container paddingY flex flex-col'>
        <Heading text='What our students say?' />

        <div className='flex flex-col items-center md:items-start lg:flex-row lg:items-stretch lg:justify-between gap-16 pt-8'>
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className='flex flex-col items-center md:flex-row lg:flex-col lg:items-start gap-4'
            >
              <img
                src={testimonial.img}
                alt=''
                className='w-[100px] h-[100px] rounded-xl'
              />
              <div className='text-center md:text-left'>
                <p className='font-alegreya font-bold text-xl'>
                  {testimonial.name}
                </p>
                <p className='font-alegreya max-w-[33ch]'>{testimonial.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
