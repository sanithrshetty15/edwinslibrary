import { useState } from "react"

import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

import MainPhoto from "../assets/lab/main.jpg"
import Photo1 from "../assets/lab/photo1.jpg"
import Photo2 from "../assets/lab/photo2.jpg"
import Photo3 from "../assets/lab/photo3.jpg"
import Photo4 from "../assets/lab/photo4.jpg"

function LabSection() {

  const slides = [
    MainPhoto,
    Photo1,
    Photo2,
    Photo3,
    Photo4,
  ]

  const [current, setCurrent] = useState(0)

  const nextSlide = () => {

    setCurrent((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    )
  }

  const prevSlide = () => {

    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    )
  }

  return (

    <section
      id="about"

      className="
        relative

        bg-[#0a0a0a]

        overflow-hidden

        py-32
      "
    >

      {/* GREEN GLOW */}

      <div
        className="
          absolute

          top-1/2
          left-1/2

          -translate-x-1/2
          -translate-y-1/2

          w-[600px]
          h-[600px]

          rounded-full

          bg-primary/10

          blur-[150px]

          pointer-events-none
        "
      />

      {/* GRID */}

      <div
        className="
          absolute
          inset-0

          opacity-[0.03]

          bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]

          bg-[size:80px_80px]
        "
      />

      <div
        className="
          relative
          z-10

          max-w-7xl
          w-[92%]

          mx-auto

          grid
          grid-cols-1
          lg:grid-cols-2

          gap-24

          items-center
        "
      >

        {/* LEFT SIDE */}

        <div>

          {/* TAG */}

          <div
            className="
              inline-flex

              px-5
              py-2.5

              rounded-full

              border
              border-primary/20

              bg-primary/10

              text-primary
              text-sm
              font-medium
            "
          >

            About Edwin’s Lab

          </div>

          {/* HEADING */}

          <h2
            className="
              mt-8

              font-orbitron
              font-semibold

              text-[54px]
              sm:text-[72px]

              leading-[0.95]

              tracking-[-4px]

              text-white
            "
          >

            Innovation{" "}

            <br />

            Through{" "}

            <span className="text-primary">
              Intelligent
            </span>

            <br />

            Learning

          </h2>

          {/* DESCRIPTION */}

          <p
            className="
              mt-10

              max-w-xl

              text-[18px]

              leading-[2]

              text-white/60
            "
          >

            Edwin’s Lab is a futuristic innovation workspace
            focused on intelligent automation, AI systems,
            immersive learning experiences, and modern
            digital transformation for students and institutions.

          </p>

          {/* POINTS */}

          <div
            className="
              mt-12

              space-y-6
            "
          >

            {[
              "AI-powered learning systems",
              "Modern software innovation",
              "Smart automation experiences",
              "Future-ready educational technology",
            ].map((item, index) => (

              <div
                key={index}

                className="
                  flex
                  items-center
                  gap-4
                "
              >

                <div
                  className="
                    w-3
                    h-3

                    rounded-full

                    bg-primary
                  "
                />

                <p
                  className="
                    text-white/70

                    text-[17px]
                  "
                >

                  {item}

                </p>

              </div>

            ))}

          </div>

          {/* BUTTON */}

          <a

            href="https://wwwedwinslab.wixsite.com/home"

            target="_blank"

            rel="noopener noreferrer"

            className="
              group

              mt-14

              inline-flex
              items-center
              gap-3

              h-[60px]
              px-8

              rounded-full

              bg-primary

              text-black
              font-semibold

              transition-all
              duration-300

              hover:bg-white

              hover:-translate-y-[2px]
            "
          >

            Visit Edwin’s Lab

            <ArrowUpRight
              size={18}

              className="
                transition-transform
                duration-300

                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
            />

          </a>

        </div>

        {/* RIGHT SIDE */}

        <div
          className="
            relative

            h-[650px]

            flex
            items-center
            justify-center
          "
        >

          {/* STACKED CARDS */}

          {slides.map((image, index) => {

            const offset = index - current

            return (

              <div

                key={index}

                className="
                  absolute

                  transition-all
                  duration-700
                  ease-out
                "

                style={{

                  transform: `
                    translateX(${offset * 40}px)
                    translateY(${Math.abs(offset) * 20}px)
                    scale(${1 - Math.abs(offset) * 0.06})
                    rotate(${offset * 2}deg)
                  `,

                  opacity:
                    Math.abs(offset) > 2 ? 0 : 1,

                  zIndex: 10 - Math.abs(offset),
                }}
              >

                <div
                  className="
                    w-[320px]
                    sm:w-[420px]
                    lg:w-[500px]

                    h-[480px]
                    sm:h-[560px]
                    lg:h-[620px]

                    rounded-[36px]

                    overflow-hidden

                    border
                    border-white/10

                    bg-white

                    shadow-[0_25px_80px_rgba(0,0,0,0.45)]
                  "
                >

                  <img
                    src={image}

                    alt="Edwins Lab"

                    className="
                      w-full
                      h-full

                      object-contain

                      bg-white
                    "
                  />

                </div>

              </div>

            )
          })}

          {/* BUTTONS */}

          <div
            className="
              absolute

              bottom-[-30px]
              left-1/2

              -translate-x-1/2

              flex
              items-center
              gap-5
            "
          >

            <button

              onClick={prevSlide}

              className="
                w-14
                h-14

                rounded-full

                bg-white/10

                backdrop-blur-md

                border
                border-white/10

                text-white

                flex
                items-center
                justify-center

                transition-all
                duration-300

                hover:bg-primary
                hover:text-black
              "
            >

              <ChevronLeft size={24} />

            </button>

            <button

              onClick={nextSlide}

              className="
                w-14
                h-14

                rounded-full

                bg-primary

                text-black

                flex
                items-center
                justify-center

                transition-all
                duration-300

                hover:scale-110
              "
            >

              <ChevronRight size={24} />

            </button>

          </div>

        </div>

      </div>

    </section>
  )
}

export default LabSection