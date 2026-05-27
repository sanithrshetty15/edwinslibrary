import { motion } from "framer-motion"

import {
  QrCode,
  Smartphone,
  CheckCircle2,
  ArrowRight,
} from "lucide-react"

function QRSection() {

  const steps = [

    {
      title: "Scan QR",
      description:
        "Students instantly scan secure QR codes to access books."
    },

    {
      title: "Verify Access",
      description:
        "Authentication system validates borrowing permissions securely."
    },

    {
      title: "Borrow Instantly",
      description:
        "Books are issued immediately without manual intervention."
    }
  ]

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

          top-[120px]
          right-[-140px]

          w-[550px]
          h-[550px]

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

          bg-[size:90px_90px]
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

            <QrCode size={16} />

            Smart QR Borrowing System

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

              text-[48px]
              sm:text-[64px]

              leading-[1.05]

              tracking-[-4px]
            "
          >

            Borrow Books{" "}

            <span className="text-primary">
              Instantly
            </span>

            <br />

            With QR Access

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

              max-w-xl

              text-[18px]

              leading-[1.9]

              text-white/60
            "
          >

            Eliminate queues and outdated issue systems with
            secure QR-powered borrowing that enables students
            to access resources within seconds.

          </motion.p>

          {/* STEPS */}

          <div
            className="
              mt-14

              space-y-6
            "
          >

            {steps.map((item, index) => (

              <motion.div

                key={index}

                initial={{
                  opacity: 0,
                  x: -40
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
                  flex
                  items-start

                  gap-5
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

                    flex-shrink-0
                  "
                >

                  <CheckCircle2 size={22} />

                </div>

                <div>

                  <h3
                    className="
                      text-[22px]

                      font-semibold

                      text-white
                    "
                  >

                    {item.title}

                  </h3>

                  <p
                    className="
                      mt-2

                      text-[15px]

                      leading-[1.8]

                      text-white/60
                    "
                  >

                    {item.description}

                  </p>

                </div>

              </motion.div>

            ))}

          </div>

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

              bg-primary

              text-black
              font-semibold

              flex
              items-center
              gap-3

              transition-all
              duration-300

              hover:bg-white
              hover:-translate-y-[2px]
            "
          >

            Explore Borrowing System

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

            flex
            justify-center
          "
        >

          {/* PHONE */}

          <div
            className="
              relative

              w-[340px]
              h-[680px]

              rounded-[48px]

              border
              border-white/10

              bg-white/[0.04]

              backdrop-blur-2xl

              shadow-[0_20px_80px_rgba(0,0,0,0.45)]

              overflow-hidden
            "
          >

            {/* TOP BAR */}

            <div
              className="
                h-16

                border-b
                border-white/10

                flex
                items-center
                justify-center
              "
            >

              <div
                className="
                  w-28
                  h-2

                  rounded-full

                  bg-white/20
                "
              />

            </div>

            {/* CONTENT */}

            <div className="p-8">

              {/* QR BOX */}

              <div
                className="
                  h-[280px]

                  rounded-[32px]

                  bg-white/5

                  border
                  border-white/10

                  flex
                  items-center
                  justify-center
                "
              >

                <div
                  className="
                    w-[180px]
                    h-[180px]

                    rounded-[28px]

                    bg-primary

                    flex
                    items-center
                    justify-center

                    text-black
                  "
                >

                  <QrCode size={90} />

                </div>

              </div>

              {/* INFO */}

              <div className="mt-8">

                <h3
                  className="
                    text-[28px]

                    font-semibold

                    text-white
                  "
                >

                  Smart Borrowing

                </h3>

                <p
                  className="
                    mt-3

                    text-[15px]

                    leading-[1.8]

                    text-white/60
                  "
                >

                  Seamless QR-based authentication
                  and instant digital book issuing.

                </p>

              </div>

              {/* FLOATING CARD */}

              <motion.div

                animate={{
                  y: [0, -10, 0]
                }}

                transition={{
                  duration: 4,
                  repeat: Infinity
                }}

                className="
                  mt-10

                  p-5

                  rounded-[24px]

                  bg-primary/10

                  border
                  border-primary/20

                  flex
                  items-center

                  gap-4
                "
              >

                <div
                  className="
                    w-14
                    h-14

                    rounded-2xl

                    bg-primary

                    flex
                    items-center
                    justify-center

                    text-black
                  "
                >

                  <Smartphone size={28} />

                </div>

                <div>

                  <p
                    className="
                      text-sm

                      text-white/60
                    "
                  >

                    Borrow Successful

                  </p>

                  <h4
                    className="
                      mt-1

                      text-white

                      font-semibold
                    "
                  >

                    AI Systems Design
                  </h4>

                </div>

              </motion.div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  )
}

export default QRSection