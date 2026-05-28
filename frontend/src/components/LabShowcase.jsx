import { useEffect, useState } from "react"

import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

import MainPhoto from "../assets/lab/main.jpg"
import Photo1 from "../assets/lab/photo1.jpg"
import Photo2 from "../assets/lab/photo2.jpg"
import Photo3 from "../assets/lab/photo3.jpg"
import Photo4 from "../assets/lab/photo4.jpg"

function LabShowcase() {

  const slides = [

    {
      image: MainPhoto,
      title: "Edwins Lab",
      description:
        "Innovative smart learning and automation workspace.",
    },

    {
      image: Photo1,
      title: "Research Environment",
      description:
        "Building intelligent systems for modern institutions.",
    },

    {
      image: Photo2,
      title: "Student Innovation",
      description:
        "Collaborative learning through technology and AI.",
    },

    {
      image: Photo3,
      title: "Development Space",
      description:
        "Focused on futuristic software experiences.",
    },

    {
      image: Photo4,
      title: "Creative Engineering",
      description:
        "Transforming ideas into impactful solutions.",
    },
  ]

  const [current, setCurrent] = useState(0)

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrent((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      )

    }, 4000)

    return () => clearInterval(interval)

  }, [slides.length])

  const nextSlide = () => {

    setCurrent(
      current === slides.length - 1 ? 0 : current + 1
    )
  }

  const prevSlide = () => {

    setCurrent(
      current === 0 ? slides.length - 1 : current - 1
    )
  }

  return (

    <div
      className="
        relative

        w-full
        h-[620px]

        rounded-[42px]

        overflow-hidden

        bg-[#111111]

        border
        border-white/5

        shadow-[0_20px_60px_rgba(0,0,0,0.35)]

        backdrop-blur-xl
      "
    >

      {/* IMAGE */}

      <img
        src={slides[current].image}

        alt={slides[current].title}

        className="
          absolute
          inset-0

          w-full
          h-full

          object-contain

          bg-white

          transition-all
          duration-700
        "
      />

      {/* DARK OVERLAY */}

      <div
        className="
          absolute
          inset-0

          bg-gradient-to-t
          from-black/80
          via-black/20
          to-transparent
        "
      />

      {/* CONTENT */}

      <div
        className="
          absolute
          bottom-0
          left-0

          z-10

          p-10
        "
      >

        <h2
          className="
            text-[34px]

            font-orbitron
            font-semibold

            text-white
          "
        >

          {slides[current].title}

        </h2>

        <p
          className="
            mt-4

            max-w-md

            text-white/75

            leading-[1.8]
          "
        >

          {slides[current].description}

        </p>

      </div>

      {/* NAVIGATION BUTTONS */}

      <div
        className="
          absolute
          inset-y-0

          left-0
          right-0

          z-20

          flex
          items-center
          justify-between

          px-5
        "
      >

        {/* LEFT BUTTON */}

        <button

          onClick={prevSlide}

          className="
            w-12
            h-12

            rounded-full

            bg-black/35

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
            hover:scale-110
          "
        >

          <ChevronLeft size={22} />

        </button>

        {/* RIGHT BUTTON */}

        <button

          onClick={nextSlide}

          className="
            w-12
            h-12

            rounded-full

            bg-black/35

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
            hover:scale-110
          "
        >

          <ChevronRight size={22} />

        </button>

      </div>

      {/* DOT INDICATORS */}

      <div
        className="
          absolute
          bottom-6
          left-1/2

          -translate-x-1/2

          z-20

          flex
          items-center
          gap-3
        "
      >

        {slides.map((_, index) => (

          <button

            key={index}

            onClick={() => setCurrent(index)}

            className={`
              h-2.5

              rounded-full

              transition-all
              duration-300

              ${
                current === index
                  ? "w-10 bg-primary"
                  : "w-2.5 bg-white/50"
              }
            `}
          />

        ))}

      </div>

    </div>

  )
}

export default LabShowcase