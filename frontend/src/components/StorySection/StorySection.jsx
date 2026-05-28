import { motion } from "framer-motion"

import {
  BookX,
  Clock3,
  ScanSearch,
  Sparkles,
} from "lucide-react"

function StorySection() {

  const problems = [

    {
      icon: <BookX size={28} />,
      title: "Outdated Manual Systems",
      description:
        "Traditional libraries still rely on slow manual workflows and fragmented systems."
    },

    {
      icon: <Clock3 size={28} />,
      title: "Inefficient Borrowing",
      description:
        "Long queues, delayed issue tracking, and poor accessibility reduce user experience."
    },

    {
      icon: <ScanSearch size={28} />,
      title: "Lack of Smart Insights",
      description:
        "Most systems fail to provide analytics, automation, or intelligent recommendations."
    }
  ]

  return (

    <section id="about"
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

          top-[-200px]
          left-1/2

          -translate-x-1/2

          w-[700px]
          h-[700px]

          rounded-full

          bg-primary/10

          blur-[160px]

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
        "
      >

        {/* TOP LABEL */}

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

          Traditional Systems Are Broken

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
            max-w-5xl

            font-orbitron
            font-semibold

            text-white

            text-[46px]
            sm:text-[64px]
            lg:text-[80px]

            leading-[1.05]

            tracking-[-4px]
          "
        >

          Libraries Should Feel{" "}

          <span className="text-primary">
            Intelligent
          </span>

          {" "}— Not Outdated.

        </motion.h2>

        {/* SUBTEXT */}

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
            mt-8

            max-w-3xl

            text-[18px]

            leading-[1.9]

            text-white/60
          "
        >

          Traditional library systems struggle with
          accessibility, efficiency, and intelligence.
          Edwin’s Library transforms the experience into
          a seamless AI-powered digital ecosystem.

        </motion.p>

        {/* PROBLEM GRID */}

        <div
          className="
            mt-24

            grid
            grid-cols-1
            md:grid-cols-3

            gap-8
          "
        >

          {problems.map((item, index) => (

            <motion.div

              key={index}

              initial={{
                opacity: 0,
                y: 40
              }}

              whileInView={{
                opacity: 1,
                y: 0
              }}

              transition={{
                duration: 0.8,
                delay: index * 0.15
              }}

              viewport={{
                once: true
              }}

              className="
                relative

                p-8

                rounded-[32px]

                bg-white/[0.03]

                backdrop-blur-xl

                border
                border-white/10

                overflow-hidden

                transition-all
                duration-500

                hover:border-primary/20
                hover:-translate-y-2
              "
            >

              {/* ICON */}

              <div
                className="
                  w-16
                  h-16

                  rounded-2xl

                  bg-primary/10

                  flex
                  items-center
                  justify-center

                  text-primary
                "
              >

                {item.icon}

              </div>

              {/* TITLE */}

              <h3
                className="
                  mt-8

                  text-[24px]

                  font-semibold

                  text-white
                "
              >

                {item.title}

              </h3>

              {/* DESCRIPTION */}

              <p
                className="
                  mt-5

                  text-[15px]

                  leading-[1.9]

                  text-white/60
                "
              >

                {item.description}

              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default StorySection