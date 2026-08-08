import React from 'react';
import photo from '../assets/mainphoto.png';
import ConnectRibbon from './ConnectRibbon';

const Landing = () => {
  return (
    <section
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        flex
        items-center
        bg-background
      "
    >

      {/* ================= BACKGROUND HELLO ================= */}
      <h1
        className="
          absolute
          top-[-7%]
          left-[9%]
          text-[20vw]
          md:text-[210px]
          lg:text-[240px]
          font-black
          tracking-[-0.08em]
          text-gray-700/30
          dark:text-gray-400/10
          select-none
          pointer-events-none
          z-0
        "
      >
        HELLO
      </h1>


      {/* ================= HERO CONTENT ================= */}
      <div
        className="
          relative
          z-10
          w-full
          max-w-6xl
          mx-auto
          px-6
          md:px-10
          pt-20
          md:pt-10
          pb-32

          flex
          flex-col
          md:flex-row

          items-center
          justify-center

          gap-10
          md:gap-16
          lg:gap-20
        "
      >

        {/* ================= LEFT — PROFILE IMAGE ================= */}
        <div
          className="
            w-full
            md:w-[48%]
            flex
            justify-center
            md:justify-end
            relative

            translate-y-12
            md:translate-y-16
          "
        >

          {/* Image glow */}
          <div
            className="
              absolute
              w-[280px]
              h-[280px]
              md:w-[380px]
              md:h-[380px]
              rounded-full
              bg-primary/10
              blur-[90px]
              top-1/2
              left-1/2
              -translate-x-1/2
              -translate-y-1/2
            "
          />

          {/* Profile Image */}
          <img
            src={photo}
            alt="Tanvi Madani"
            className="
              relative
              z-10
              w-[270px]
              sm:w-[320px]
              md:w-[380px]
              lg:w-[420px]
              object-contain
              drop-shadow-2xl
            "
            style={{
              WebkitMaskImage:
                'linear-gradient(to bottom, black 82%, transparent 100%)',
              maskImage:
                'linear-gradient(to bottom, black 82%, transparent 100%)'
            }}
          />

        </div>


        {/* ================= RIGHT — INTRODUCTION ================= */}
        <div
          className="
            w-full
            md:w-[52%]
            flex
            flex-col
            items-center
            md:items-start
            text-center
            md:text-left

            md:-translate-y-2
          "
        >

          {/* Name */}
          <h2
            className="
              text-4xl
              sm:text-5xl
              md:text-5xl
              lg:text-6xl
              font-black
              leading-[1.05]
              tracking-tight
              text-text
            "
          >
            I'm Tanvi
            <br />
            Madani
          </h2>


          {/* Role */}
          <p
            className="
              mt-5
              text-primary
              text-xl
              md:text-2xl
              lg:text-3xl
              font-bold
            "
          >
            Full Stack Web Developer
          </p>


          {/* Description */}
          <p
            className="
              mt-5
              max-w-xl
              text-sm
              md:text-base
              leading-relaxed
              text-gray-400
            "
          >
            Final year Student of B.Tech CSE at Nirma University,
            Ahmedabad.
          </p>


          {/* ================= RESUME BUTTON ================= */}
          <div className="mt-7">

            <a
              href="https://drive.google.com/uc?export=download&id=10O1mklegn0jvYy1JVd9uIIRwPJSyMagl"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-3
                px-7
                py-3.5
                rounded-full
                bg-secondary
                text-white
                font-medium
                shadow-lg
                shadow-secondary/20
              "
            >

              {/* Resume Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2-2z"
                />
              </svg>

              View Resume

            </a>

          </div>

        </div>

      </div>


      {/* ================= CONNECT RIBBON ================= */}
      <ConnectRibbon topOffset="76%" />

    </section>
  );
};

export default Landing;