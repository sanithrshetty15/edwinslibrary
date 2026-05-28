import { motion } from "framer-motion"

import {
  Activity,
  BookOpen,
  Users,
  TrendingUp,
} from "lucide-react"

function DashboardSection() {

  const stats = [

    {
      icon: <BookOpen size={22} />,
      value: "12,540",
      label: "Books Managed"
    },

    {
      icon: <Users size={22} />,
      value: "4,280",
      label: "Active Students"
    },

    {
      icon: <Activity size={22} />,
      value: "98%",
      label: "System Efficiency"
    },

    {
      icon: <TrendingUp size={22} />,
      value: "+42%",
      label: "Borrowing Growth"
    }
  ]

  return (

    <section
      className="
        relative

        py-40

        overflow-hidden

        bg-white
      "
    >

      {/* BACKGROUND GLOW */}

      <div
        className="
          absolute

          top-[120px]
          right-[-120px]

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

          gap-20

          items-center
        "
      >

        {/* LEFT CONTENT */}

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
            "
          >

            Smart Analytics Dashboard

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
              sm:text-[62px]

              leading-[1.05]

              tracking-[-3px]

              text-black
            "
          >

            Manage Everything{" "}

            <span className="text-primary">
              Intelligently
            </span>

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
              mt-8

              text-[18px]

              leading-[1.9]

              text-gray-medium

              max-w-xl
            "
          >

            Gain real-time visibility into borrowing patterns,
            student engagement, inventory management,
            and operational efficiency through intelligent analytics.

          </motion.p>

          {/* STATS */}

          <div
            className="
              mt-14

              grid
              grid-cols-2

              gap-6
            "
          >

            {stats.map((item, index) => (

              <motion.div

                key={index}

                initial={{
                  opacity: 0,
                  y: 30
                }}

                whileInView={{
                  opacity: 1,
                  y: 0
                }}

                transition={{
                  duration: 0.8,
                  delay: index * 0.1
                }}

                viewport={{
                  once: true
                }}

                className="
                  p-6

                  rounded-[28px]

                  bg-white

                  border
                  border-black/5

                  shadow-[0_10px_35px_rgba(0,0,0,0.04)]
                "
              >

                <div
                  className="
                    w-12
                    h-12

                    rounded-xl

                    bg-primary/10

                    flex
                    items-center
                    justify-center

                    text-primary
                  "
                >

                  {item.icon}

                </div>

                <h3
                  className="
                    mt-5

                    text-[30px]

                    font-orbitron
                    font-semibold

                    text-black
                  "
                >

                  {item.value}

                </h3>

                <p
                  className="
                    mt-2

                    text-sm

                    text-gray-medium
                  "
                >

                  {item.label}

                </p>

              </motion.div>

            ))}

          </div>

        </div>

        {/* RIGHT DASHBOARD */}

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

          {/* MAIN DASHBOARD */}

          <div
            className="
              relative

              rounded-[40px]

              border
              border-black/5

              bg-white/80

              backdrop-blur-2xl

              shadow-[0_20px_80px_rgba(0,0,0,0.08)]

              overflow-hidden
            "
          >

            {/* TOP BAR */}

            <div
              className="
                h-16

                border-b
                border-black/5

                flex
                items-center

                px-6
              "
            >

              <div className="flex gap-2">

                <div className="w-3 h-3 rounded-full bg-red-400" />

                <div className="w-3 h-3 rounded-full bg-yellow-400" />

                <div className="w-3 h-3 rounded-full bg-green-400" />

              </div>

            </div>

            {/* CONTENT */}

            <div className="p-8">

              {/* GRAPH */}

              <div
                className="
                  h-[240px]

                  rounded-[28px]

                  bg-gradient-to-br
                  from-primary/20
                  to-primary/5

                  flex
                  items-end

                  gap-4

                  p-6
                "
              >

                {[40, 70, 55, 90, 75, 100].map((height, index) => (

                  <motion.div

                    key={index}

                    initial={{
                      height: 0
                    }}

                    whileInView={{
                      height: `${height}%`
                    }}

                    transition={{
                      duration: 1,
                      delay: index * 0.1
                    }}

                    viewport={{
                      once: true
                    }}

                    className="
                      flex-1
                      rounded-full

                      bg-primary
                    "
                  />

                ))}

              </div>

              {/* SMALL CARDS */}

              <div
                className="
                  mt-6

                  grid
                  grid-cols-2

                  gap-5
                "
              >

                {[1,2].map((item) => (

                  <div
                    key={item}

                    className="
                      p-5

                      rounded-[24px]

                      border
                      border-black/5

                      bg-gray-soft
                    "
                  >

                    <div
                      className="
                        w-full
                        h-3

                        rounded-full

                        bg-primary/20
                      "
                    />

                    <div
                      className="
                        mt-4

                        w-2/3
                        h-3

                        rounded-full

                        bg-black/10
                      "
                    />

                    <div
                      className="
                        mt-3

                        w-1/2
                        h-3

                        rounded-full

                        bg-black/5
                      "
                    />

                  </div>

                ))}

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  )
}

export default DashboardSection