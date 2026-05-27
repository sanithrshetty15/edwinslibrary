import { motion } from "framer-motion"

function Navbar() {

  const navLinks = [
    "Features",
    "Dashboard",
    "AI System",
    "Contact"
  ]

  return (

    <motion.header

      initial={{
        y: -80,
        opacity: 0
      }}

      animate={{
        y: 0,
        opacity: 1
      }}

      transition={{
        duration: 1,
        ease: "easeOut"
      }}

      className="fixed top-5 left-0 w-full z-50"
    >

      <nav
        className="
          max-w-7xl
          mx-auto
          w-[92%]

          h-[74px]

          px-8

          flex
          items-center
          justify-between

          rounded-full

          bg-black/70

          backdrop-blur-xl

          border
          border-white/10

          shadow-[0_10px_40px_rgba(0,0,0,0.12)]
        "
      >

        {/* LOGO */}

        <div
          className="
            text-white
            text-[28px]
            font-orbitron
            font-semibold
            tracking-[-1px]
            cursor-pointer
          "
        >

          Edwin’s{" "}

          <span className="text-primary">
            Library
          </span>

        </div>

        {/* NAV LINKS */}

        <div
          className="
            hidden
            md:flex
            items-center
            gap-10
          "
        >

          {navLinks.map((link, index) => (

            <a
              key={index}

              href="#"

              className="
                relative

                text-white/80

                text-[15px]
                font-medium

                transition-all
                duration-300

                hover:text-primary
              "
            >

              {link}

              <span
                className="
                  absolute

                  left-0
                  -bottom-2

                  h-[2px]
                  w-0

                  rounded-full

                  bg-primary

                  transition-all
                  duration-300

                  hover:w-full
                "
              />

            </a>

          ))}

        </div>

        {/* CTA BUTTON */}

        <button
          className="
            hidden
            md:flex

            items-center
            justify-center

            h-[44px]
            px-6

            rounded-full

            bg-primary

            text-black
            text-sm
            font-semibold

            transition-all
            duration-300

            hover:bg-white
            hover:-translate-y-[2px]
          "
        >

          Get Started

        </button>

      </nav>

    </motion.header>
  )
}

export default Navbar