import React from "react";

export default function Experience() {
  return (
    <section className="h-full bg-black/50">
      <div className="flex flex-col justify-center h-full gap-6 px-4 mx-auto max-w-7xl md:px-8 2xl:px-0">
        <h2 className="text-6xl font-semibold text-center text-purple-400 md:text-7xl mt-36 md:m-0">
          My Experience
        </h2>
        <p className="text-xl font-light text-center">
          I am a very responsible and hard-working person, I feel comfortable{" "}
          <br />
          working in a team and I adapt quickly to new environments.
        </p>
        <div className="flex flex-col p-5 rounded-3xl bg-white/20 mb-36 md:m-0">
          <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-yellow-500">
            Full Stack Developer
          </h3>
          <span className="opacity-70">Freelance</span>
          <span>Jan 2020 to July 2022 · 2 years</span>
          <p className="font-light">
            I've built diverse web apps for multiple clients, from statically
            generated websites with Next.js to SPAs, also full stack web apps
            with React.js and Node.js with Express.js, also I've built
            serverless applications using AWS Lamba and DynamoDB. I've also used
            MySQL and MongoDB.
          </p>
        </div>
        <div className="flex flex-col p-5 rounded-3xl bg-white/20 mb-36 md:m-0">
          <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-cyan-500">
            Full Stack JavaScript & Mobile Developer
          </h3>
          <span className="opacity-70">IQTHINK LLC.</span>
          <span>Aug 2022 to Present · 7 months</span>
          <p className="font-light">
            I am a skilled full-stack JavaScript developer with experience in
            developing web applications using React, Vue, Node.js, and Express.
            I am also experienced in mobile app development using Flutter, with
            proficiency in Dart and a focus on delivering high-quality and
            performant mobile apps for both Android and iOS.
          </p>
        </div>
      </div>
    </section>
  );
}
