import { motion } from "framer-motion"

import MagneticButton from "../MagneticButton"

import {
  ArrowRight,
  Sparkles,
  Play,
} from "lucide-react"

function Hero() {

  return (

    <section
      className="
        relative

        min-h-screen

        overflow-hidden

        flex
        items-center
        justify-center
      "
    >

      {/* BACKGROUND GLOW 1 */}

      <div
        className="
          absolute

          top-[-180px]
          left-1/2

          -translate-x-1/2

          w-[700px]
          h-[700px]

          rounded-full

          bg-primary/20

          blur-[140px]

          pointer-events-none
        "
      />

      {/* BACKGROUND GLOW 2 */}

      <div
        className="
          absolute

          bottom-[-250px]
          right-[-120px]

          w-[500px]
          h-[500px]

          rounded-full

          bg-primary/10

          blur-[140px]

          pointer-events-none
        "
      />

      {/* GRID EFFECT */}

      <div
        className="
          absolute
          inset-0

          opacity-[0.03]

          bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]

          bg-[size:80px_80px]
        "
      />

      {/* MAIN CONTENT */}

      <div
        className="
          relative

          z-10

          max-w-7xl
          w-[92%]

          mx-auto

          pt-40
          pb-24

          flex
          flex-col
          items-center
          text-center
        "
      >

        {/* SMALL LABEL */}

        <motion.div

          initial={{
            opacity: 0,
            y: 20
          }}

          animate={{
            opacity: 1,
            y: 0
          }}

          transition={{
            duration: 0.8
          }}

          className="
            mb-8

            px-5
            py-2.5

            rounded-full

            border
            border-primary/20

            bg-primary/10

            backdrop-blur-lg

            flex
            items-center
            gap-2

            text-sm
            text-primary
            font-medium
          "
        >

          <Sparkles size={16} />

          AI-Powered Smart Library Platform

        </motion.div>

        {/* HERO HEADING */}

        <motion.h1

          initial={{
            opacity: 0,
            y: 60
          }}

          animate={{
            opacity: 1,
            y: 0
          }}

          transition={{
            duration: 1.2,
            ease: "easeOut"
          }}

          className="
            max-w-6xl

            font-orbitron
            font-semibold

            text-[52px]
            sm:text-[72px]
            lg:text-[96px]

            leading-[1.02]

            tracking-[-4px]

            text-black
          "
        >

          The Future of{" "}

          <span className="text-primary">

            Smart Library

          </span>

          <br />

          Management Systems

        </motion.h1>

        {/* PARAGRAPH */}

        <motion.p

          initial={{
            opacity: 0,
            y: 30
          }}

          animate={{
            opacity: 1,
            y: 0
          }}

          transition={{
            duration: 1,
            delay: 0.2
          }}

          className="
            mt-8

            max-w-2xl

            text-[17px]
            sm:text-[19px]

            leading-[1.9]

            text-gray-medium

            font-poppins
          "
        >

          Transform traditional libraries into intelligent,
          AI-powered ecosystems with seamless borrowing,
          analytics, QR access, and futuristic digital experiences.

        </motion.p>

        {/* BUTTONS */}

        <motion.div

          initial={{
            opacity: 0,
            y: 30
          }}

          animate={{
            opacity: 1,
            y: 0
          }}

          transition={{
            duration: 1,
            delay: 0.4
          }}

          className="
            mt-12

            flex
            flex-col
            sm:flex-row

            gap-5
          "
        >

          {/* PRIMARY BUTTON */}

          <MagneticButton

            className="
              group

              h-[58px]
              px-8

              rounded-full

              bg-primary

              text-black
              font-semibold

              flex
              items-center
              justify-center
              gap-3

              transition-all
              duration-300

              hover:bg-black
              hover:text-white

              hover:-translate-y-[2px]

              shadow-[0_10px_30px_rgba(155,233,49,0.18)]
            "
          >

            Get Started

            <ArrowRight
              size={18}

              className="
                transition-transform
                duration-300

                group-hover:translate-x-1
              "
            />

          </MagneticButton>

          {/* SECONDARY BUTTON */}

          <MagneticButton

            className="
              group

              h-[58px]
              px-8

              rounded-full

              border
              border-black/10

              bg-white/70

              backdrop-blur-lg

              text-black
              font-semibold

              flex
              items-center
              justify-center
              gap-3

              transition-all
              duration-300

              hover:border-primary/30
              hover:bg-primary/20

              hover:-translate-y-[2px]
            "
          >

            <Play size={16} />

            Watch Demo

          </MagneticButton>

        </motion.div>

        {/* STATS */}

        <motion.div

          initial={{
            opacity: 0,
            y: 40
          }}

          animate={{
            opacity: 1,
            y: 0
          }}

          transition={{
            duration: 1,
            delay: 0.6
          }}

          className="
            mt-24

            grid
            grid-cols-1
            sm:grid-cols-3

            gap-8
          "
        >

          {[
            {
              number: "10K+",
              label: "Books Managed"
            },

            {
              number: "99%",
              label: "System Accuracy"
            },

            {
              number: "24/7",
              label: "Smart Access"
            }
          ].map((item, index) => (

            <div
              key={index}

              className="
                relative

                px-10
                py-8

                rounded-[28px]

                bg-white/60

                backdrop-blur-xl

                border
                border-black/5

                shadow-[0_10px_30px_rgba(0,0,0,0.04)]

                flex
                flex-col
                items-center

                transition-all
                duration-300

                hover:-translate-y-2
                hover:border-primary/20
              "
            >

              <h2
                className="
                  text-[42px]

                  font-orbitron
                  font-semibold

                  text-black
                "
              >

                {item.number}

              </h2>

              <p
                className="
                  mt-2

                  text-gray-medium

                  text-sm
                "
              >

                {item.label}

              </p>

            </div>

          ))}

        </motion.div>

      </div>

    </section>
  )
}

export default Hero