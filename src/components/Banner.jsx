import React from 'react';
import avatar from '../public/avatar.svg';

export default function Banner() {
  const scrollToBottomMobile = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };
  return (
    <section className="bg-black/90 h-full">
      <div className="max-w-7xl px-4 md:px-8 xl:px-0 mx-auto h-screen md:h-full grid grid-cols-12">
        <div className="col-span-12 mt-36 md:col-span-8 md:mt-0 flex flex-col justify-center gap-8 px-4 md:px-8">
          <h2 className="text-6xl sm:text-7xl font-semibold text-yellow-400">
            Hello,
          </h2>
          <h1 className="text-7xl sm:text-8xl font-bold">I'm Sebastian.</h1>
          <h3 className="text-2xl sm:text-3xl font-medium text-white/80">
            Full Stack Developer.
          </h3>
          <div>
            <button
              onClick={scrollToBottomMobile}
              className="relative inline-block md:hidden py-2 px-8 font-medium text-xl bg-green-500 hover:bg-green-600 transition-colors rounded-3xl"
            >
              Hire me
            </button>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 flex justify-center items-center">
          <img src={avatar} className="hidden md:block" alt="" />
        </div>
      </div>
    </section>
  );
}
