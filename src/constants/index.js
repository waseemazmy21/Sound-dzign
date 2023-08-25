import {
  frequencies,
  daw,
  vocalsProcessing,
  mixing,
  mixingConsole,
  mastering,
  blog1,
  blog2,
  blog3,
} from '../assets';

export const navLinks = [
  { id: 'about', title: 'About' },
  { id: 'course details', title: 'Course Details' },
  { id: 'blog', title: 'Blog' },
  { id: 'testimonials', title: 'Testimonials' },
];

export const topics = [
  { id: 'topic-1', title: 'What are frequencies?', img: frequencies },
  { id: 'topic-2', title: 'Using DAW', img: daw },
  { id: 'topic-3', title: 'Vocals Processing', img: vocalsProcessing },
  { id: 'topic-4', title: 'Mixing', img: mixing },
  { id: 'topic-5', title: 'Mixing Console', img: mixingConsole },
  { id: 'topic-6', title: 'Mastering', img: mastering },
];

export const posts = [
  {
    id: 'blog-1',
    title: 'How To Use Drum Machine in Logic Pro X',
    padge: 'DAW',
    img: blog1,
  },
  {
    id: 'blog-2',
    title: 'How To Mix Guitars Effectively',
    padge: 'Mixing',
    img: blog2,
  },
  {
    id: 'blog-3',
    title: 'The Real Power of Harmonies in Music Production',
    padge: 'Vox',
    img: blog3,
  },
];
