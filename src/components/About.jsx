import React from 'react';

export const About = () => {
  const specializations = [
    {
      title: "Web Development",
      subtitle: "Full-stack Applications",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 9l-3 3 3 3m8-6l3 3-3 3M14 5l-4 14"
          />
        </svg>
      ),
      iconBg:
        "bg-[#1683FF]/10 text-[#1683FF] border-[#1683FF]/20",
    },

    {
      title: "UI/UX Design",
      subtitle: "Intuitive Interfaces",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 15l6 6m-11-3a8 8 0 100-16 8 8 0 000 16z"
          />
        </svg>
      ),
      iconBg:
        "bg-[#3B82F6]/10 text-[#3B82F6] border-[#3B82F6]/20",
    },

    {
      title: "Problem Solving",
      subtitle: "DSA & Algorithms",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v12m6-6H6"
          />
          <circle
            cx="12"
            cy="12"
            r="9"
            strokeWidth={2}
          />
        </svg>
      ),
      iconBg:
        "bg-[#2563EB]/10 text-[#60A5FA] border-[#2563EB]/20",
    },

    {
      title: "AI & Machine Learning",
      subtitle: "Intelligent Systems",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v3m0 12v3M3 12h3m12 0h3M5.64 5.64l2.12 2.12m8.48 8.48l2.12 2.12m0-12.72l-2.12 2.12m-8.48 8.48l-2.12 2.12"
          />
          <circle
            cx="12"
            cy="12"
            r="4"
            strokeWidth={2}
          />
        </svg>
      ),
      iconBg:
        "bg-[#60A5FA]/10 text-[#60A5FA] border-[#60A5FA]/20",
    },
  ];

  const education = [
    {
      period: "2023 - 2027",
      degree: "Bachelor in Computer Science & Eng.",
      institution: "Nirma University, Ahmedabad",
      isCurrent: true,
    },
    {
      period: "2021 - 2023",
      degree: "Higher School Certificate (HSC)",
      institution: "Advait Vidyaniketan, Bharuch",
      isCurrent: false,
    },
    {
      period: "2011 - 2021",
      degree: "Secondary School Certificate (SSC)",
      institution: "Shree Gattu Vidyalaya, Ankleshwar",
      isCurrent: false,
    },
  ];

  return (
    <section
      id="about"
      className="
        relative
        w-full
        min-h-screen
        bg-background
        text-text
        px-6
        md:px-10
        py-20
      "
    >

      <div className="max-w-6xl mx-auto">

        {/* ================= SECTION HEADER ================= */}
        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-white/10
            pb-4
            mb-8
          "
        >
          <div>

            {/* Small Label */}
            <span
              className="
                text-[#1683FF]
                font-semibold
                tracking-wider
                text-xs
                uppercase
                px-3
                py-1
                bg-[#1683FF]/10
                border
                border-[#1683FF]/20
                rounded-full
              "
            >
              About Me
            </span>

            {/* Main Heading */}
            <h2
              className="
                text-3xl
                md:text-4xl
                font-extrabold
                text-white
                mt-3
              "
            >
              Get To Know{" "}
              <span className="text-[#1683FF]">
                Me
              </span>
            </h2>

          </div>

          {/* Website Text */}
          <span
            className="
              hidden
              sm:inline-block
              text-xs
              text-gray-500
              font-mono
            "
          >
            tanvi-madani.dev
          </span>

        </div>


        {/* ================= MAIN GRID ================= */}
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-12
            gap-8
            items-start
          "
        >

          {/* =====================================================
              LEFT COLUMN
          ====================================================== */}
          <div
            className="
              lg:col-span-7
              space-y-6
            "
          >

            {/* ================= BIO CARD ================= */}
            <div
              className="
                bg-[#111111]
                border
                border-white/10
                rounded-2xl
                p-6
                relative
                overflow-hidden
              "
            >

              {/* Subtle Blue Glow */}
              <div
                className="
                  absolute
                  -right-10
                  -bottom-10
                  w-40
                  h-40
                  bg-[#1683FF]/10
                  rounded-full
                  blur-2xl
                  pointer-events-none
                "
              />

              <h3
                className="
                  text-xl
                  font-bold
                  text-white
                  mb-3
                "
              >
                👋 Hi, I'm Tanvi
              </h3>

              <p
                className="
                  text-sm
                  text-gray-300
                  leading-relaxed
                "
              >
                I am a Final year Computer Science Engineering
                student at{" "}
                <strong className="text-white">
                  Nirma University, Ahmedabad
                </strong>
                . My passion lies in engineering robust digital
                experiences and solving complex algorithmic
                challenges.
              </p>

              <p
                className="
                  text-sm
                  text-gray-300
                  leading-relaxed
                  mt-3
                "
              >
                With a strong foundation in modern frameworks and
                computer science fundamentals, I enjoy taking ideas
                from raw concepts to polished, functional products.
              </p>

            </div>


            {/* ================= SPECIALIZATIONS ================= */}
            <div>

              <h4
                className="
                  text-xs
                  font-semibold
                  text-gray-500
                  uppercase
                  tracking-wider
                  mb-3
                "
              >
                Area of Specialization
              </h4>


              <div
                className="
                  grid
                  grid-cols-1
                  sm:grid-cols-2
                  gap-3
                "
              >

                {specializations.map((item, index) => (
                  <div
                    key={index}
                    className="
                      p-3.5
                      bg-[#111111]
                      border
                      border-white/10
                      rounded-xl
                      flex
                      items-center
                      space-x-3
                    "
                  >

                    {/* Icon */}
                    <div
                      className={`
                        w-9
                        h-9
                        rounded-lg
                        border
                        flex
                        items-center
                        justify-center
                        shrink-0
                        ${item.iconBg}
                      `}
                    >
                      {item.icon}
                    </div>


                    {/* Text */}
                    <div>

                      <div
                        className="
                          text-xs
                          font-bold
                          text-white
                        "
                      >
                        {item.title}
                      </div>

                      <div
                        className="
                          text-[10px]
                          text-gray-500
                          mt-0.5
                        "
                      >
                        {item.subtitle}
                      </div>

                    </div>

                  </div>
                ))}

              </div>

            </div>

          </div>


          {/* =====================================================
              RIGHT COLUMN — EDUCATION
          ====================================================== */}
          <div
            className="
              lg:col-span-5
              bg-[#111111]
              border
              border-white/10
              rounded-2xl
              p-6
            "
          >

            {/* Education Header */}
            <h3
              className="
                text-sm
                font-bold
                text-white
                uppercase
                tracking-wider
                mb-6
                flex
                items-center
                justify-between
              "
            >

              <span
                className="
                  flex
                  items-center
                  gap-2
                "
              >

                {/* Education Icon */}
                <svg
                  className="w-4 h-4 text-[#1683FF]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                </svg>

                Education

              </span>


              <span
                className="
                  text-[10px]
                  text-[#1683FF]
                  font-normal
                  normal-case
                "
              >
                {education.length} Qualifications
              </span>

            </h3>


            {/* ================= STEPPER ================= */}
            <div
              className="
                relative
                border-l-2
                border-white/10
                ml-3
                space-y-7
              "
            >

              {education.map((edu, index) => (
                <div
                  key={index}
                  className="
                    relative
                    pl-6
                  "
                >

                  {/* Stepper Dot */}
                  <div
                    className={`
                      absolute
                      -left-[9px]
                      top-0
                      w-4
                      h-4
                      rounded-full
                      ring-4
                      ring-[#111111]
                      ${edu.isCurrent
                        ? "bg-[#1683FF]"
                        : "bg-gray-700"
                      }
                    `}
                  />


                  {/* Period */}
                  <span
                    className={`
                      text-[10px]
                      font-semibold
                      px-2
                      py-0.5
                      rounded
                      border
                      ${edu.isCurrent
                        ? "text-[#1683FF] bg-[#1683FF]/10 border-[#1683FF]/20"
                        : "text-gray-400 bg-black/30 border-white/10"
                      }
                    `}
                  >
                    {edu.period}
                  </span>


                  {/* Degree */}
                  <h4
                    className="
                      text-sm
                      font-bold
                      text-white
                      mt-2
                    "
                  >
                    {edu.degree}
                  </h4>


                  {/* Institution */}
                  <p
                    className="
                      text-xs
                      text-gray-500
                      mt-1
                    "
                  >
                    {edu.institution}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;