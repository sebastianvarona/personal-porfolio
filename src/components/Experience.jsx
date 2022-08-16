import React from 'react';

export default function Experience() {
  return (
    <section className="bg-black/50 h-full">
      <div className="max-w-7xl mx-auto px-4 md:px-8 2xl:px-0 h-full flex flex-col justify-center gap-12">
        <h2 className="text-6xl md:text-7xl text-center font-semibold text-purple-400 mt-36 md:m-0">
          My Experience
        </h2>
        <p className="text-xl font-light text-center">
          I am a very responsible and hard-working person, I feel comfortable{' '}
          <br />
          working in a team and I adapt quickly to new environments.
        </p>
        <div className="flex flex-col gap-2 p-8 rounded-3xl bg-white/20 mb-36 md:m-0">
          <h3 className="text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-yellow-500">
            Full Stack Developer
          </h3>
          <span className="opacity-70">Freelance</span>
          <span>Aug 2020 to Present · 2 years</span>
          <p className="font-light mt-4">
            I've built diverse web apps for multiple clients, from statically
            generated websites with Next.js to SPAs, also full stack web apps
            with React.js and Node.js with Express.js, also I've built
            serverless applications using AWS Lamba and DynamoDB. I've also used
            MySQL and MongoDB.
          </p>
        </div>
      </div>
    </section>
  );
}
