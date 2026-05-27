import { motion } from "framer-motion"

import {
  Quote,
  Star,
  ShieldCheck,
  Building2,
} from "lucide-react"

function Testimonials() {

  const testimonials = [

    {
      name: "Shreekanth Suvarna",
      role: "Edwin's Lab Administrator",
      review:
        "Edwin’s Library transformed how students interact with our digital resources. The automation and AI recommendations drastically improved engagement."
    },

    {
      name: "Diganth H M",
      role: "Computer Science Student",
      review:
        "The QR borrowing system feels futuristic and extremely fast. Everything from searching to issuing books became seamless."
    },

    {
      name: "DR. Peter Fernandes",
      role: "Principal",
      review:
        "The analytics dashboard gave us insights we never had before. It modernized our library operations completely."
    }
  ]

  const trustItems = [

    {
      icon: <ShieldCheck size={22} />,
      title: "Secure Authentication"
    },

    {
      icon: <Building2 size={22} />,
      title: "Institution Ready"
    },

    {
      icon: <Star size={22} />,
      title: "Premium Experience"
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

          top-[100px]
          left-1/2

          -translate-x-1/2

          w-[600px]
          h-[600px]

          rounded-full

          bg-primary/10

          blur-[160px]

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
        "
      >

        {/* TOP SECTION */}

        <div
          className="
            text-center
          "
        >

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
            "
          >

            Trusted By Modern Institutions

          </motion.div>

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

            Built For{" "}

            <span className="text-primary">
              Future-Ready
            </span>

            <br />

            Learning Ecosystems

          </motion.h2>

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

              mx-auto

              text-[18px]

              leading-[1.9]

              text-gray-medium
            "
          >

            Designed for institutions that want to modernize
            student experiences with intelligent automation,
            seamless access, and futuristic digital systems.

          </motion.p>

        </div>

        {/* TRUST BADGES */}

        <div
          className="
            mt-16

            flex
            flex-wrap
            justify-center

            gap-5
          "
        >

          {trustItems.map((item, index) => (

            <motion.div

              key={index}

              initial={{
                opacity: 0,
                y: 20
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
                px-6
                py-4

                rounded-full

                bg-white/80

                backdrop-blur-xl

                border
                border-black/5

                shadow-[0_10px_30px_rgba(0,0,0,0.04)]

                flex
                items-center

                gap-3
              "
            >

              <div className="text-primary">
                {item.icon}
              </div>

              <p
                className="
                  text-sm

                  font-medium

                  text-black
                "
              >

                {item.title}

              </p>

            </motion.div>

          ))}

        </div>

        {/* TESTIMONIAL GRID */}

        <div
          className="
            mt-24

            grid
            grid-cols-1
            lg:grid-cols-3

            gap-8
          "
        >

          {testimonials.map((item, index) => (

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
                duration: 0.9,
                delay: index * 0.12
              }}

              viewport={{
                once: true
              }}

              className="
                relative

                p-8

                rounded-[36px]

                bg-white/80

                backdrop-blur-2xl

                border
                border-black/5

                shadow-[0_15px_45px_rgba(0,0,0,0.05)]

                overflow-hidden

                transition-all
                duration-500

                hover:-translate-y-2
                hover:border-primary/20
              "
            >

              {/* QUOTE ICON */}

              <div
                className="
                  w-14
                  h-14

                  rounded-2xl

                  bg-primary/10

                  flex
                  items-center
                  justify-center

                  text-primary
                "
              >

                <Quote size={26} />

              </div>

              {/* REVIEW */}

              <p
                className="
                  mt-8

                  text-[16px]

                  leading-[2]

                  text-gray-medium
                "
              >

                “{item.review}”

              </p>

              {/* USER */}

              <div className="mt-10">

                <h3
                  className="
                    text-[20px]

                    font-semibold

                    text-black
                  "
                >

                  {item.name}

                </h3>

                <p
                  className="
                    mt-2

                    text-sm

                    text-gray-medium
                  "
                >

                  {item.role}

                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Testimonials