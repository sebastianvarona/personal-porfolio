import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/splide/dist/css/splide.min.css';
import './Portfolio.css';

const projects = [
  {
    link: 'https://github.com/sebastianvarona/crevna-blog',
    preview_link:
      'https://crevna-next-blog-2qxpwyzl4-sebastianvarona.vercel.app/',
    img: 'https://user-images.githubusercontent.com/77818407/178224138-59ada792-f06b-42af-8ad4-34e205cdcfbc.png',
    alt: 'Personal Full Stack Tutorials & Articles Blog',
  },
  {
    link: 'https://github.com/sebastianvarona/redux_counter',
    preview_link: 'https://sebastianvarona.github.io/redux_counter/',
    img: 'https://user-images.githubusercontent.com/77818407/178220892-e460c7df-db86-44f2-b5b4-44cdad911e1f.png',
    alt: 'Redux Counter Apllication',
  },
  {
    link: 'https://github.com/sebastianvarona/piazza-italia',
    preview_link: 'https://piazza-italia.vercel.app/',
    img: 'https://user-images.githubusercontent.com/77818407/178594792-5f91ea7d-2246-413d-b873-16fe84cc93f8.png',
    alt: 'Piazza Italia Next.js - Redux',
  },
];

export default function Portfolio() {
  return (
    <div className="max-w-7xl mx-auto h-full flex flex-col justify-center gap-12">
      <h2 className="text-7xl text-center font-semibold text-yellow-400">
        Recent Projects
      </h2>
      <div id="portfolio_slide">
        <Splide
          options={{
            type: 'loop',
            gap: '30px',
            drag: 'free',
            arrows: true,
            pagination: true,
            perPage: 2,
            focus: 'center',
            autoScroll: {
              pauseOnHover: false,
              pauseOnFocus: false,
              rewind: false,
              speed: 1,
            },
          }}
          extensions={{ AutoScroll }}
        >
          {projects.map((project) => (
            <SplideSlide>
              <PortfolioItem
                link={project.link}
                preview_link={project.preview_link}
                img={project.img}
                alt={project.alt}
              />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
}

export function PortfolioItem({ link, preview_link, img, alt }) {
  return (
    <div className="p-8 flex flex-col gap-4">
      <a
        className="relative border-2 border-white/70"
        href={preview_link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={img} alt={alt} />
        <div className="absolute top-0 left-0 w-full h-full opacity-0 bg-black/40 backdrop-blur-sm hover:opacity-100 flex justify-center items-center font-bold underline">
          <span className="bg-white py-1 px-4 text-black">Preview</span>
        </div>
      </a>
      <h4 className="text-center font-semibold text-xl whitespace-normal">
        {alt}
      </h4>
    </div>
  );
}
