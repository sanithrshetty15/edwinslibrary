import { useState } from "react"

import {
  Menu,
  X,
} from "lucide-react"

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [

    {
      name: "Home",
      path: "#home",
    },

    {
      name: "Features",
      path: "#features",
    },

    {
      name: "About",
      path: "#about",
    },

    {
      name: "Contact",
      path: "#contact",
    },
  ]

  return (

    <>

      {/* NAVBAR */}

      <header
        className="
          fixed
          top-0
          left-0

          w-full

          z-[9999]
        "
      >

        <nav
          className="
            max-w-7xl
            w-[92%]

            mx-auto
            mt-5

            h-[72px]

            px-6

            rounded-full

            border
            border-primary/10

            bg-black/55
            supports-[backdrop-filter]:bg-black/40

            backdrop-blur-2xl
            backdrop-saturate-150

            shadow-[0_10px_40px_rgba(0,0,0,0.18)]

            flex
            items-center
            justify-between
          "
        >

          {/* LOGO */}

          <a
            href="#home"

            className="
              font-orbitron
              font-semibold

              text-[24px]

              tracking-[-1px]

              text-white
            "
          >

            Edwin’s{" "}

            <span className="text-primary">
              Library
            </span>

          </a>

          {/* DESKTOP LINKS */}

          <div
            className="
              hidden
              md:flex

              items-center
              gap-10
            "
          >

            {navLinks.map((item, index) => (

              <a

                key={index}

                href={item.path}

                className="
                  text-[17px]

                  font-medium

                  text-white/75

                  transition-all
                  duration-300

                  hover:text-primary
                "
              >

                {item.name}

              </a>

            ))}

          </div>

          {/* MOBILE BUTTON */}

          <button

            onClick={() => setMenuOpen(true)}

            className="
              md:hidden

              w-11
              h-11

              rounded-full

              border
              border-white/10

              text-white

              flex
              items-center
              justify-center
            "
          >

            <Menu size={22} />

          </button>

        </nav>

      </header>

      {/* MOBILE MENU */}

      <div
        className={`
          fixed
          inset-0

          z-[99999]

          bg-[#050505]

          transition-all
          duration-500

          ${
            menuOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0 pointer-events-none"
          }
        `}
      >

        {/* GRID EFFECT */}

        <div
          className="
            absolute
            inset-0

            opacity-[0.03]

            bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]

            bg-[size:60px_60px]
          "
        />

        {/* GREEN GLOW */}

        <div
          className="
            absolute

            top-[-120px]
            left-1/2

            -translate-x-1/2

            w-[320px]
            h-[320px]

            rounded-full

            bg-primary/20

            blur-[100px]
          "
        />

        {/* TOP */}

        <div
          className="
            relative

            flex
            items-center
            justify-between

            px-6
            pt-8
          "
        >

          <h1
            className="
              font-orbitron
              font-semibold

              text-[24px]

              text-white
            "
          >

            Edwin’s{" "}

            <span className="text-primary">
              Library
            </span>

          </h1>

          <button

            onClick={() => setMenuOpen(false)}

            className="
              w-11
              h-11

              rounded-full

              border
              border-white/10

              text-primary

              flex
              items-center
              justify-center
            "
          >

            <X size={22} />

          </button>

        </div>

        {/* MOBILE LINKS */}

        <div
          className="
            relative

            mt-24

            px-6

            flex
            flex-col
            gap-8
          "
        >

          {navLinks.map((item, index) => (

            <a

              key={index}

              href={item.path}

              onClick={() => setMenuOpen(false)}

              className="
                text-[32px]

                font-semibold

                text-white/90

                transition-all
                duration-300

                hover:text-primary
              "
            >

              {item.name}

            </a>

          ))}

        </div>

      </div>

    </>
  )
}

export default Navbar