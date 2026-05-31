import { useEffect, useState } from "react"

import { motion, AnimatePresence } from "framer-motion"

import Logo from "../assets/penguin-logo.png"

function Loader() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {

    const timer = setTimeout(() => {

      setLoading(false)

    }, 3600)

    return () => clearTimeout(timer)

  }, [])

  return (

    <AnimatePresence>

      {loading && (

        <motion.div

          initial={{
            opacity: 1
          }}

          exit={{
            opacity: 0
          }}

          transition={{
            duration: 0.8,
            delay: 0.5
          }}

          className="
            fixed
            inset-0

            z-[999999]

            overflow-hidden
          "
        >

          {/* TOP PANEL */}

          <motion.div

            initial={{
              y: 0
            }}

            exit={{
              y: "-100%"
            }}

            transition={{
              duration: 1.2,
              ease: [0.76, 0, 0.24, 1]
            }}

            className="
              absolute
              top-0
              left-0

              w-full
              h-1/2

              bg-[#f8fafc]
            "
          />

          {/* BOTTOM PANEL */}

          <motion.div

            initial={{
              y: 0
            }}

            exit={{
              y: "100%"
            }}

            transition={{
              duration: 1.2,
              ease: [0.76, 0, 0.24, 1]
            }}

            className="
              absolute
              bottom-0
              left-0

              w-full
              h-1/2

              bg-[#f8fafc]
            "
          />

          {/* CENTER CONTENT */}

          <div
            className="
              absolute
              inset-0

              z-20

              flex
              flex-col
              items-center
              justify-center
            "
          >

            {/* LOGO */}

            <motion.img

              initial={{
                opacity: 0,
                scale: 0.8
              }}

              animate={{
                opacity: 1,
                scale: 1
              }}

              transition={{
                duration: 1.2,
                ease: "easeOut"
              }}

              src={Logo}

              alt="Edwins Library Logo"

              className="
                w-[180px]
                sm:w-[220px]

                object-contain
              "
            />

            {/* BRAND */}

            <motion.h1

              initial={{
                opacity: 0,
                y: 30
              }}

              animate={{
                opacity: 1,
                y: 0
              }}

              transition={{
                delay: 0.3,
                duration: 1
              }}

              className="
                mt-10

                font-orbitron
                font-extrabold

                text-[36px]
                sm:text-[54px]

                tracking-[-2px]

                text-black
              "
            >

              EDWIN'S{" "}

              <span className="text-primary">
                LIBRARY
              </span>

            </motion.h1>

            {/* TAGLINE */}

            <motion.p

              initial={{
                opacity: 0,
                y: 20
              }}

              animate={{
                opacity: 1,
                y: 0
              }}

              transition={{
                delay: 0.6,
                duration: 1
              }}

              className="
                mt-5

                text-[12px]
                sm:text-[15px]

                tracking-[6px]

                uppercase

                text-black/60
              "
            >

              Smart Learning • Intelligent Access • Future Ready

            </motion.p>

          </div>

        </motion.div>

      )}

    </AnimatePresence>
  )
}

export default Loader