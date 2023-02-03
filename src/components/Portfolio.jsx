import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import "./Portfolio.css";

const projects = [
  {
    link: "https://github.com/sebastianvarona/rick-n-morty-graphql",
    preview_link: "https://rick-n-morty-graphql.vercel.app/",
    img: "https://user-images.githubusercontent.com/77818407/184505965-4b7b92aa-4459-421f-a71c-c3ece9c2ab7e.jpeg",
    alt: "Rick and Morty GraphQL",
  },
  {
    link: "https://github.com/sebastianvarona/crevna-blog",
    preview_link:
      "https://crevna-next-blog-2qxpwyzl4-sebastianvarona.vercel.app/",
    img: "https://user-images.githubusercontent.com/77818407/178224138-59ada792-f06b-42af-8ad4-34e205cdcfbc.png",
    alt: "Personal Full Stack Tutorials & Articles Blog",
  },
  {
    link: "https://github.com/sebastianvarona/surval-landing",
    preview_link: "https://surval-landing.vercel.app/",
    img: "https://user-images.githubusercontent.com/77818407/216654435-4ec4dd43-82b0-453a-8f95-7b6ccb38954f.png",
    alt: "Surval (Next.js - TailwindCSS)",
  },
  {
    link: "https://github.com/sebastianvarona/piazza-italia",
    preview_link: "https://piazza-italia.vercel.app/",
    img: "https://user-images.githubusercontent.com/77818407/178594792-5f91ea7d-2246-413d-b873-16fe84cc93f8.png",
    alt: "Piazza Italia (Next.js - Redux)",
  },
  {
    link: "https://github.com/sebastianvarona/frontend-iqthink",
    preview_link: "https://frontend-iqthink.vercel.app/",
    img: "https://user-images.githubusercontent.com/77818407/183471931-71fb4b0f-a0ae-432c-96fa-fecac3d27120.png",
    alt: "Gandalf's Book (React.js - Redux)",
  },
];

export default function Portfolio() {
  return (
    <div className="flex flex-col justify-center h-screen gap-12 mx-auto max-w-7xl md:h-full">
      <h2 className="text-6xl font-semibold text-center text-yellow-400 md:text-7xl mt-36 md:m-0">
        Recent Projects
      </h2>
      <div id="portfolio_slide_md" className="hidden md:block mb-36 md:m-0">
        <Splide
          options={{
            type: "loop",
            gap: "30px",
            drag: "free",
            arrows: true,
            pagination: true,
            perPage: 2,
            focus: "center",
            autoScroll: {
              pauseOnHover: false,
              pauseOnFocus: false,
              rewind: false,
              speed: 2,
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
      <div
        id="portfolio_slide_mopbile"
        className="block md:hidden mb-36 md:m-0"
      >
        <Splide
          options={{
            type: "loop",
            drag: "free",
            arrows: true,
            pagination: true,
            perPage: 2,
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
    <div className="flex flex-col gap-4 p-8">
      <a
        className="relative border-2 border-white/70"
        href={preview_link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={img} alt={alt} />
        <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full font-bold underline transition-all opacity-0 bg-black/40 backdrop-blur-sm hover:opacity-100">
          <span className="px-4 py-1 text-black bg-white">Preview</span>
        </div>
      </a>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <h4 className="text-xl font-semibold text-center whitespace-normal hover:underline underline-offset-4">
          {alt}
        </h4>
      </a>
    </div>
  );
}
