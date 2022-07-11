import React from 'react';
import './About.css';
import profile from '../public/pp.jpeg';
// Tech Icons
import aws from '../public/technologies/aws.svg';
import javascript from '../public/technologies/javascript.svg';
import html from '../public/technologies/html.svg';
import css from '../public/technologies/css.svg';
import bootstrap from '../public/technologies/bootstrap.svg';
import git from '../public/technologies/git.svg';
import nextjs from '../public/technologies/nextjs.svg';
import nodejs from '../public/technologies/nodejs.svg';
import sass from '../public/technologies/sass.svg';
import tailwind from '../public/technologies/tailwind.svg';
import react from '../public/technologies/react.svg';

const icons = [
  {
    path: javascript,
    name: 'JavaScript',
  },
  {
    path: react,
    name: 'React',
  },
  {
    path: nextjs,
    name: 'Next.js',
  },
  {
    path: nodejs,
    name: 'Node.js',
  },
  {
    path: aws,
    name: 'AWS',
  },
  {
    path: git,
    name: 'Git',
  },
  {
    path: html,
    name: 'HTML',
  },
  {
    path: css,
    name: 'CSS',
  },
  {
    path: sass,
    name: 'Sass',
  },
  {
    path: tailwind,
    name: 'Tailwind',
  },
  {
    path: bootstrap,
    name: 'Bootstrap',
  },
];

import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/splide/dist/css/splide.min.css';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto h-full flex items-center">
      <div className="grid grid-cols-12 gap-7">
        <div className="col-span-4">
          <img
            src={profile}
            alt="Sebastian Varona Photo"
            className="rounded-2xl"
          />
        </div>
        <div className="col-span-8 px-8">
          <h2 className="text-6xl font-semibold text-blue-400">About Me.</h2>
          <br />
          <br />
          <p className="text-xl font-light">
            I'm currently pursuing a bachelor's degree in computer science due
            to the fact that I've always had a passion for technology. I'm
            always trying to learn new things and I also try my best to acquire
            new skills.
          </p>
          <br />
          <p className="text-xl font-light">
            Proactive Full Stack Developer with 2 years of experience as a
            freelancer. I'm also a fan of the JavaScript ecosystem and I'm
            always in the process of learning new things.
          </p>
          <br />
          <br />
          <h3 className="text-4xl font-semibold text-orange-400 mb-8">
            My Tech Stack.
          </h3>
          <br />
          <div id="tech_carousel" className="cursor-pointer">
            <Splide
              options={{
                type: 'loop',
                gap: '30px',
                drag: 'free',
                arrows: false,
                pagination: false,
                perPage: 6,
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
              {icons.map((icon) => (
                <SplideSlide>
                  <TechButton img={icon.path} alt={icon.name} />
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TechButton({ img, alt }) {
  return (
    <div className="aspect-w-1 aspect-h-1 rounded-3xl bg-white/5">
      <img src={img} alt={alt} className="p-6" />
    </div>
  );
}
