import React from "react";
// import avatar from '../public/avatar.svg';
import avatar from "../public/avatar.png";

export default function Banner() {
  const scrollToBottomMobile = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };
  return (
    <section className="h-full bg-black/90">
      <div className="grid h-screen grid-cols-12 px-4 mx-auto max-w-7xl md:px-8 xl:px-0 md:h-full">
        <div className="flex flex-col justify-center col-span-12 gap-8 px-4 mt-36 md:col-span-8 md:mt-0 md:px-8">
          <h2 className="text-6xl font-semibold text-yellow-400 sm:text-7xl">
            Hello,
          </h2>
          <h1 className="font-bold text-7xl sm:text-8xl">I'm Sebastian.</h1>
          <h3 className="text-2xl font-medium sm:text-3xl text-white/80">
            Full Stack & Mobile Developer.
          </h3>
          <div>
            <button
              onClick={scrollToBottomMobile}
              className="relative inline-block px-8 py-2 text-xl font-medium transition-colors bg-green-500 md:hidden hover:bg-green-600 rounded-3xl"
            >
              Hire me
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center col-span-12 md:col-span-4">
          <img src={avatar} className="hidden md:block" alt="" />
        </div>
      </div>
    </section>
  );
}
