import { motion } from "framer-motion"

import {
  BrainCircuit,
  Sparkles,
  ArrowRight,
} from "lucide-react"

function AISection() {

  const recommendations = [

    {
      title: "Atomic Habits",
      tag: "Productivity",
    },

    {
      title: "The Psychology of Money",
      tag: "Finance",
    },

    {
      title: "Deep Work",
      tag: "Focus",
    },

    {
      title: "Clean Code",
      tag: "Programming",
    },
  ]

  return (

    <section
      className="
        relative

        py-40

        overflow-hidden

        bg-[#f8fafc]
      "
    >

      {/* ATMOSPHERIC GLOW */}

      <div
        className="
          absolute

          top-[50px]
          left-[-120px]

          w-[500px]
          h-[500px]

          rounded-full

          bg-primary/10

          blur-[140px]

          pointer-events-none
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

            AI Recommendation System

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

              text-[46px]
              sm:text-[64px]

              leading-[1.05]

              tracking-[-4px]

              text-black
            "
          >

            Personalized{" "}

            <span className="text-primary">
              AI-Powered
            </span>

            <br />

            Book Discovery

          </motion.h2>

          {/* PARAGRAPH */}

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

              max-w-xl

              text-[18px]

              leading-[1.9]

              text-gray-medium
            "
          >

            Edwin’s Library intelligently analyzes borrowing
            behavior, interests, and reading patterns to
            generate personalized recommendations for every student.

          </motion.p>

          {/* BUTTON */}

          <motion.button

            initial={{
              opacity: 0,
              y: 20
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
              group

              mt-12

              h-[58px]
              px-8

              rounded-full

              bg-black

              text-white
              font-semibold

              flex
              items-center
              gap-3

              transition-all
              duration-300

              hover:bg-primary
              hover:text-black
              hover:-translate-y-[2px]
            "
          >

            Explore AI System

            <ArrowRight
              size={18}

              className="
                transition-transform
                duration-300

                group-hover:translate-x-1
              "
            />

          </motion.button>

        </div>

        {/* RIGHT SIDE */}

        <motion.div

          initial={{
            opacity: 0,
            scale: 0.9,
            y: 40
          }}

          whileInView={{
            opacity: 1,
            scale: 1,
            y: 0
          }}

          transition={{
            duration: 1
          }}

          viewport={{
            once: true
          }}

          className="
            relative
          "
        >

          {/* MAIN AI PANEL */}

          <div
            className="
              relative

              rounded-[40px]

              bg-white/80

              backdrop-blur-2xl

              border
              border-black/5

              shadow-[0_20px_80px_rgba(0,0,0,0.08)]

              overflow-hidden

              p-8
            "
          >

            {/* TOP */}

            <div
              className="
                flex
                items-center
                justify-between
              "
            >

              <div>

                <p
                  className="
                    text-sm
                    text-gray-medium
                  "
                >

                  AI Recommendation Engine

                </p>

                <h3
                  className="
                    mt-2

                    text-[28px]

                    font-semibold

                    text-black
                  "
                >

                  Smart Suggestions

                </h3>

              </div>

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

                <BrainCircuit size={30} />

              </div>

            </div>

            {/* RECOMMENDATION CARDS */}

            <div
              className="
                mt-10

                space-y-5
              "
            >

              {recommendations.map((item, index) => (

                <motion.div

                  key={index}

                  initial={{
                    opacity: 0,
                    x: 40
                  }}

                  whileInView={{
                    opacity: 1,
                    x: 0
                  }}

                  transition={{
                    duration: 0.8,
                    delay: index * 0.12
                  }}

                  viewport={{
                    once: true
                  }}

                  className="
                    p-5

                    rounded-[24px]

                    bg-[#f8fafc]

                    border
                    border-black/5

                    flex
                    items-center
                    justify-between

                    transition-all
                    duration-300

                    hover:border-primary/20
                    hover:-translate-y-1
                  "
                >

                  <div>

                    <h4
                      className="
                        text-[18px]

                        font-semibold

                        text-black
                      "
                    >

                      {item.title}

                    </h4>

                    <p
                      className="
                        mt-1

                        text-sm

                        text-gray-medium
                      "
                    >

                      {item.tag}

                    </p>

                  </div>

                  <div
                    className="
                      px-4
                      py-2

                      rounded-full

                      bg-primary/10

                      text-primary

                      text-sm
                      font-medium
                    "
                  >

                    Recommended

                  </div>

                </motion.div>

              ))}

            </div>

          </div>

          {/* FLOATING GLOW */}

          <div
            className="
              absolute

              -bottom-10
              -right-10

              w-[180px]
              h-[180px]

              rounded-full

              bg-primary/20

              blur-[100px]

              pointer-events-none
            "
          />

        </motion.div>

      </div>

    </section>
  )
}

export default AISection