import React from 'react';
import avatar from '../public/avatar.svg';

export default function Banner() {
  return (
    <section className="bg-black/90 h-full">
      <div className="max-w-7xl mx-auto h-full grid grid-cols-12">
        <div className="col-span-8 flex flex-col justify-center gap-8">
          <h2 className="text-7xl font-semibold text-yellow-400">Hello,</h2>
          <h1 className="text-8xl font-bold">I'm Sebastian.</h1>
          <h3 className="text-3xl font-medium text-white/80">
            Full Stack Developer.
          </h3>
          <div>
            <button className="py-2 px-8 font-medium text-xl bg-green-500 hover:bg-green-600 transition-colors rounded-3xl inline-block">
              Hire me
            </button>
          </div>
        </div>
        <div className="col-span-4 flex justify-center items-center">
          <img src={avatar} alt="" />
        </div>
      </div>
    </section>
  );
}
