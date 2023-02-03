import React from "react";
import "./About.css";
import profile from "../public/pp.jpeg";
// Tech Icons
import aws from "../public/technologies/aws.svg";
import javascript from "../public/technologies/javascript.svg";
import html from "../public/technologies/html.svg";
import css from "../public/technologies/css.svg";
import bootstrap from "../public/technologies/bootstrap.svg";
import git from "../public/technologies/git.svg";
import nextjs from "../public/technologies/nextjs.svg";
import nodejs from "../public/technologies/nodejs.svg";
import sass from "../public/technologies/sass.svg";
import tailwind from "../public/technologies/tailwind.svg";
import react from "../public/technologies/react.svg";
import typescript from "../public/technologies/typescript.svg";
import dart from "../public/technologies/dart.svg";
import flutter from "../public/technologies/flutter.svg";

const icons = [
  {
    path: aws,
    name: "AWS",
  },
  {
    path: git,
    name: "Git",
  },
  {
    path: tailwind,
    name: "Tailwind",
  },
  {
    path: bootstrap,
    name: "Bootstrap",
  },
  {
    path: dart,
    name: "Dart",
  },
  {
    path: flutter,
    name: "Flutter",
  },
  {
    path: typescript,
    name: "TypeScript",
  },
  {
    path: javascript,
    name: "JavaScript",
  },
  {
    path: react,
    name: "React",
  },
  {
    path: nextjs,
    name: "Next.js",
  },
  {
    path: nodejs,
    name: "Node.js",
  },
];

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";

export default function About() {
  return (
    <div className="flex items-center px-4 mx-auto max-w-7xl md:px-8 xl:px-0 md:h-full">
      <div className="grid grid-cols-12 gap-7">
        <div className="flex items-center justify-center col-span-12 px-10 mb-10 md:col-span-4 2xl:px-0 mt-36 md:m-0">
          <img
            src={profile}
            alt="Sebastian Varona Photo"
            className="rounded-2xl outline outline-4 outline-white/25 outline-offset-8"
          />
        </div>
        <div className="col-span-12 md:col-span-8 md:px-8">
          <h2 className="text-5xl font-semibold text-center text-blue-400 md:text-6xl md:text-left">
            About Me.
          </h2>
          <br />
          <p className="text-lg font-light text-center md:text-xl md:text-left">
            Full Stack Developer, with practical experience in various
            Full-Stack and Mobile technologies.
          </p>
          <br />
          <p className="text-lg font-light text-center md:text-xl md:text-left">
            Dedicated international professional with a passion for programming
            solutions for corporates and civil society organizations.
          </p>
          <br />
          <p className="text-lg font-light text-center md:text-xl md:text-left">
            Able to adapt quickly and seamlessly to complex work environments
            and client requests. Avid networker with the business development
            and marketing skills to procure and secure new work.
          </p>

          {/* <p className="text-xl font-light">
            I'm currently pursuing a bachelor's degree in computer science due
            to the fact that I've always had a passion for technology. I'm
            always trying to learn new things and I also try my best to acquire
            new skills.
          </p> */}

          <br />
          <br />
          <h3 className="mb-8 text-4xl font-semibold text-center text-orange-400">
            My Tech Stack.
          </h3>
          <br />
          <div
            id="tech_carousel_md"
            className="hidden cursor-pointer mb-36 md:m-0 md:block"
          >
            <Splide
              options={{
                type: "loop",
                gap: "30px",
                drag: "free",
                arrows: false,
                pagination: false,
                perPage: 6,
                focus: "center",
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
          <div
            id="tech_carousel_mobile"
            className="block cursor-pointer mb-36 md:m-0 md:hidden"
          >
            <Splide
              options={{
                type: "loop",
                gap: "16px",
                drag: "free",
                arrows: false,
                pagination: false,
                perPage: 3,
                focus: "center",
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
