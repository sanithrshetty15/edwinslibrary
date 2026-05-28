import {
  BrainCircuit,
  QrCode,
  ShieldCheck,
  Activity,
  BellRing,
  Sparkles,
} from "lucide-react"

import { motion } from "framer-motion"

function CyberFeatures() {

  const cards = [

    {
      title: "AI Recommendation Engine",

      description:
        "Advanced AI algorithms analyze borrowing behavior and learning patterns to provide highly personalized smart book recommendations.",

      icon: BrainCircuit,

      size: "large",

      glow: "from-primary/20 to-green-400/5",
    },

    {
      title: "QR Smart Access",

      description:
        "Instant book borrowing and return system powered by secure QR authentication.",

      icon: QrCode,

      size: "small",

      glow: "from-cyan-400/20 to-blue-500/5",
    },

    {
      title: "Analytics Dashboard",

      description:
        "Real-time insights into library activity, student engagement, and intelligent system analytics.",

      icon: Activity,

      size: "medium",

      glow: "from-orange-400/20 to-red-500/5",
    },

    {
      title: "Secure Authentication",

      description:
        "Role-based authentication with secure access control and future-ready protection.",

      icon: ShieldCheck,

      size: "small",

      glow: "from-violet-400/20 to-fuchsia-500/5",
    },

    {
      title: "Real-Time Smart System",

      description:
        "Connected ecosystem with instant notifications, AI automation, smart tracking, and immersive digital experiences for modern institutions.",

      icon: BellRing,

      size: "full",

      glow: "from-primary/20 to-emerald-500/5",
    },
  ]

  return (

    <section
      id="features"

      className="
        relative

        bg-[#fafafa]

        overflow-hidden

        py-32
      "
    >

      {/* BACKGROUND */}

      <div
        className="
          absolute
          inset-0

          overflow-hidden

          pointer-events-none
        "
      >

        {/* GLOW */}

        <div
          className="
            absolute

            top-[15%]
            left-[10%]

            w-[400px]
            h-[400px]

            rounded-full

            bg-primary/10

            blur-[140px]
          "
        />

        <div
          className="
            absolute

            bottom-[10%]
            right-[5%]

            w-[500px]
            h-[500px]

            rounded-full

            bg-cyan-400/10

            blur-[160px]
          "
        />

        {/* GRID */}

        <div
          className="
            absolute
            inset-0

            opacity-[0.03]

            bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)]

            bg-[size:70px_70px]
          "
        />

      </div>

      <div
        className="
          relative
          z-10

          max-w-7xl
          w-[92%]

          mx-auto
        "
      >

        {/* HEADING */}

        <motion.div

          initial={{
            opacity: 0,
            y: 40,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.9,
          }}

          viewport={{
            once: true,
          }}

          className="
            text-center
          "
        >

          {/* TAG */}

          <div
            className="
              inline-flex
              items-center
              gap-2

              px-5
              py-2.5

              rounded-full

              border
              border-primary/20

              bg-primary/10

              backdrop-blur-xl
            "
          >

            <Sparkles
              className="
                w-4
                h-4

                text-black
              "
            />

            <span
              className="
                text-black

                text-xs

                uppercase

                tracking-[0.2em]

                font-semibold
              "
            >

              Cyber Features

            </span>

          </div>

          {/* TITLE */}

          <h2
            className="
              mt-8

              font-orbitron
              font-black

              text-[42px]
              sm:text-[60px]
              lg:text-[78px]

              leading-[0.95]

              tracking-[-4px]

              text-[#111111]
            "
          >

            Smart Systems{" "}

            <span
              className="
                text-transparent

                bg-clip-text

                bg-gradient-to-r
                from-black
                to-green-400
              "
            >

              Built For

            </span>

            <br />

            Modern Libraries

          </h2>

          {/* DESCRIPTION */}

          <p
            className="
              mt-8

              max-w-3xl

              mx-auto

              text-[16px]
              sm:text-[18px]

              leading-[2]

              text-[#555]
            "
          >

            Transforming traditional libraries into futuristic,
            AI-powered ecosystems with intelligent automation,
            immersive experiences, and cyber-inspired smart infrastructure.

          </p>

        </motion.div>

        {/* GRID */}

        <div
          className="
            mt-24

            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3

            auto-rows-[260px]

            gap-6
          "
        >

          {cards.map((card, index) => {

            const Icon = card.icon

            return (

              <motion.div

                key={index}

                initial={{
                  opacity: 0,
                  y: 50,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                }}

                viewport={{
                  once: true,
                }}

                className={`
                  group

                  relative

                  overflow-hidden

                  rounded-[34px]

                  border
                  border-black/[0.08]

                  bg-white/80

                  backdrop-blur-xl

                  p-8

                  transition-all
                  duration-500

                  hover:border-primary/20
                  hover:-translate-y-2

                  hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)]

                  ${
                    card.size === "large"
                      ? "lg:col-span-2"
                      : ""
                  }

                  ${
                    card.size === "full"
                      ? "md:col-span-2 lg:col-span-3"
                      : ""
                  }

                  ${
                    card.size === "medium"
                      ? "md:row-span-1"
                      : ""
                  }
                `}
              >

                {/* CYBER GLOW */}

                <div
                  className={`
                    absolute
                    inset-0

                    opacity-0

                    transition-opacity
                    duration-500

                    group-hover:opacity-100

                    bg-gradient-to-br

                    ${card.glow}
                  `}
                />

                {/* LIGHT EFFECT */}

                <div
                  className="
                    absolute

                    -top-20
                    -right-20

                    w-40
                    h-40

                    rounded-full

                    bg-black/5

                    blur-[80px]

                    opacity-0

                    group-hover:opacity-100

                    transition-all
                    duration-700
                  "
                />

                {/* CONTENT */}

                <div
                  className="
                    relative
                    z-10

                    h-full

                    flex
                    flex-col
                    justify-between
                  "
                >

                  {/* TOP */}

                  <div>

                    {/* ICON */}

                    <div
                      className="
                        w-16
                        h-16

                        rounded-2xl

                        bg-primary/10

                        border
                        border-primary/20

                        backdrop-blur-md

                        flex
                        items-center
                        justify-center

                        transition-all
                        duration-500

                        group-hover:scale-110
                        group-hover:border-primary/30
                      "
                    >

                      <Icon
                        className="
                          w-8
                          h-8

                          text-black
                        "
                      />

                    </div>

                    {/* TITLE */}

                    <h3
                      className="
                        mt-8

                        text-[28px]

                        font-semibold

                        text-[#111111]
                      "
                    >

                      {card.title}

                    </h3>

                  </div>

                  {/* DESCRIPTION */}

                  <p
                    className="
                      mt-6

                      max-w-xl

                      text-[15px]

                      leading-[2]

                      text-[#555]

                      transition-colors
                      duration-300
                    "
                  >

                    {card.description}

                  </p>

                  {/* BOTTOM LINE */}

                  <div
                    className="
                      mt-8

                      w-full
                      h-[1px]

                      bg-gradient-to-r
                      from-primary/50
                      to-transparent

                      opacity-50

                      group-hover:opacity-100

                      transition-opacity
                      duration-500
                    "
                  />

                </div>

              </motion.div>

            )
          })}

        </div>

      </div>

    </section>
  )
}

export default CyberFeatures