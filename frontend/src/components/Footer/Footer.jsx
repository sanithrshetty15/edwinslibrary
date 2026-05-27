import {
  Github,
  Linkedin,
  Instagram,
  ArrowUpRight,
} from "lucide-react"

import { GiPenguin } from "react-icons/gi"

function Footer() {

  const links = [
    "Features",
    "Dashboard",
    "AI System",
    "Analytics",
    "Contact",
  ]

  return (

    <footer
      className="
        relative
        overflow-hidden
        bg-[#050505]
        border-t
        border-white/5
      "
    >

      {/* BACKGROUND GLOW */}

      <div
        className="
          absolute
          bottom-[-250px]
          left-1/2
          -translate-x-1/2
          w-[700px]
          h-[700px]
          rounded-full
          bg-primary/10
          blur-[180px]
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
          pt-28
          pb-14
        "
      >

        {/* TOP */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-20
          "
        >

          {/* LEFT */}

          <div>

            <div
  className="
    group

    flex
    items-center
    gap-4

    cursor-pointer
  "
>

  {/* PENGUIN ICON */}

  <div
  className="
    animate-[float_4s_ease-in-out_infinite]

    w-14
    h-14

    rounded-2xl

    bg-primary

    flex
    items-center
    justify-center

    text-black

    transition-all
    duration-500

    group-hover:rotate-[12deg]
    group-hover:scale-110
  "
>

    <GiPenguin size={30} />

  </div>

  {/* TEXT */}

  <h2
    className="
      font-orbitron
      font-semibold

      text-[40px]

      tracking-[-2px]

      text-white

      transition-all
      duration-300

      group-hover:text-primary
    "
  >

    Edwin’s{" "}

    <span className="text-primary">
      Library
    </span>

  </h2>

</div>

            <p
              className="
                mt-8
                max-w-lg
                text-[16px]
                leading-[2]
                text-white/60
              "
            >

              Reimagining traditional libraries through
              intelligent automation, AI-powered systems,
              seamless QR borrowing, and futuristic student experiences.

            </p>

            {/* SOCIALS */}

            <div
              className="
                mt-10
                flex
                items-center
                gap-5
              "
            >

              {[

                <Github size={20} />,

                <Linkedin size={20} />,

                <Instagram size={20} />,
              ].map((icon, index) => (

                <div

                  key={index}

                  className="
                    w-12
                    h-12
                    rounded-full
                    bg-white/[0.04]
                    border
                    border-white/10
                    flex
                    items-center
                    justify-center
                    text-white/70
                    transition-all
                    duration-300
                    hover:bg-primary
                    hover:text-black
                    hover:-translate-y-[2px]
                    cursor-pointer
                  "
                >

                  {icon}

                </div>

              ))}

            </div>

          </div>

          {/* RIGHT */}

          <div
            className="
              grid
              grid-cols-2
              sm:grid-cols-3
              gap-10
            "
          >

            {/* NAVIGATION */}

            <div>

              <h3
                className="
                  text-white
                  font-semibold
                "
              >

                Navigation

              </h3>

              <div
                className="
                  mt-6
                  space-y-4
                "
              >

                {links.map((link, index) => (

                  <a

                    key={index}

                    href="#"

                    className="
                      flex
                      items-center
                      gap-2
                      text-white/60
                      transition-all
                      duration-300
                      hover:text-primary
                    "
                  >

                    {link}

                    <ArrowUpRight size={14} />

                  </a>

                ))}

              </div>

            </div>

            {/* PLATFORM */}

            <div>

              <h3
                className="
                  text-white
                  font-semibold
                "
              >

                Platform

              </h3>

              <div
                className="
                  mt-6
                  space-y-4
                  text-white/60
                "
              >

                <p>AI Recommendations</p>

                <p>Analytics Dashboard</p>

                <p>QR Borrowing</p>

                <p>Smart Access</p>

              </div>

            </div>

            {/* CONTACT */}

            <div>

              <h3
                className="
                  text-white
                  font-semibold
                "
              >

                Contact

              </h3>

              <div
                className="
                  mt-6
                  space-y-4
                  text-white/60
                "
              >

                <p>Moodbidri, Karnataka</p>

                <p>libraryedwins@gmail.com</p>

                <p>+91 63621 77190</p>

              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM */}

        <div
          className="
            mt-24
            pt-8
            border-t
            border-white/5
            flex
            flex-col
            sm:flex-row
            items-center
            justify-between
            gap-6
          "
        >

          <p
            className="
              text-sm
              text-white/40
            "
          >

            © 2026 Edwin’s Library. All rights reserved.

          </p>

          <p
            className="
              text-sm
              text-white/40
            "
          >

            Designed for the future of smart learning.

          </p>

        </div>

      </div>

    </footer>
  )
}

export default Footer