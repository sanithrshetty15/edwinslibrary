import { motion } from "framer-motion"

import {
  ArrowRight,
  Sparkles,
} from "lucide-react"

function CTASection() {

  return (

    <section
      className="
        relative

        py-40

        overflow-hidden

        bg-[#0a0a0a]
      "
    >

      {/* BACKGROUND GLOW */}

      <div
        className="
          absolute

          top-1/2
          left-1/2

          -translate-x-1/2
          -translate-y-1/2

          w-[700px]
          h-[700px]

          rounded-full

          bg-primary/15

          blur-[180px]

          pointer-events-none
        "
      />

      {/* GRID */}

      <div
        className="
          absolute
          inset-0

          opacity-[0.04]

          bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]

          bg-[size:90px_90px]
        "
      />

      <div
        className="
          relative
          z-10

          max-w-6xl
          w-[92%]

          mx-auto

          text-center
        "
      >

        {/* LABEL */}

        <motion.div

          initial={{
            opacity: 0,
            y: 20
          }}

          whileInView={{
            opacity: 1,
            y: 0
          }}

          transition={{
            duration: 0.8
          }}

          viewport={{
            once: true
          }}

          className="
            mb-8

            w-fit

            mx-auto

            px-5
            py-2.5

            rounded-full

            border
            border-primary/20

            bg-primary/10

            text-primary
            text-sm
            font-medium

            flex
            items-center
            gap-2
          "
        >

          <Sparkles size={16} />

          The Future Starts Here

        </motion.div>

        {/* HEADING */}

        <motion.h2

          initial={{
            opacity: 0,
            y: 40
          }}

          whileInView={{
            opacity: 1,
            y: 0
          }}

          transition={{
            duration: 1
          }}

          viewport={{
            once: true
          }}

          className="
            font-orbitron
            font-semibold

            text-white

            text-[52px]
            sm:text-[72px]
            lg:text-[92px]

            leading-[1.02]

            tracking-[-5px]
          "
        >

          Reimagine The{" "}

          <span className="text-primary">
            Future
          </span>

          <br />

          Of Smart Libraries

        </motion.h2>

        {/* TEXT */}

        <motion.p

          initial={{
            opacity: 0,
            y: 30
          }}

          whileInView={{
            opacity: 1,
            y: 0
          }}

          transition={{
            duration: 1,
            delay: 0.2
          }}

          viewport={{
            once: true
          }}

          className="
            mt-10

            max-w-3xl

            mx-auto

            text-[18px]

            leading-[2]

            text-white/60
          "
        >

          Transform traditional library systems into intelligent,
          immersive, AI-powered ecosystems with seamless access,
          futuristic analytics, and next-generation student experiences.

        </motion.p>

        {/* BUTTONS */}

        <motion.div

          initial={{
            opacity: 0,
            y: 30
          }}

          whileInView={{
            opacity: 1,
            y: 0
          }}

          transition={{
            duration: 1,
            delay: 0.4
          }}

          viewport={{
            once: true
          }}

          className="
            mt-14

            flex
            flex-col
            sm:flex-row

            justify-center

            gap-5
          "
        >

          {/* PRIMARY BUTTON */}

          <button
            className="
              group

              h-[60px]
              px-9

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

              hover:bg-white
              hover:-translate-y-[2px]

              shadow-[0_15px_40px_rgba(155,233,49,0.18)]
            "
          >

            Get Started Now

            <ArrowRight
              size={18}

              className="
                transition-transform
                duration-300

                group-hover:translate-x-1
              "
            />

          </button>

          {/* SECONDARY BUTTON */}

          <button
            className="
              h-[60px]
              px-9

              rounded-full

              border
              border-white/10

              bg-white/[0.04]

              backdrop-blur-xl

              text-white
              font-semibold

              transition-all
              duration-300

              hover:border-primary/20
              hover:bg-primary/10
            "
          >

            Schedule Demo

          </button>

        </motion.div>

      </div>

    </section>
  )
}

export default CTASection