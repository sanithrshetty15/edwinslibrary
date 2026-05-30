import {
  Linkedin,
  Instagram,
  Twitter,
  Mail,
  ArrowUpRight,
} from "lucide-react"

import PenguinLogo from "../../assets/logo.png"

function Footer() {

  const links = [
    {
      name: "Features",
      path: "#features",
    },
    {
      name: "Dashboard",
      path: "#dashboard",
    },
    {
      name: "AI System",
      path: "#ai",
    },
    {
      name: "Analytics",
      path: "#analytics",
    },
    {
      name: "Contact",
      path: "#contact",
    },
  ]

  const socialLinks = [
    {
      icon: <Linkedin size={20} />,
      url: "https://www.linkedin.com/company/edwinslab/",
      label: "LinkedIn",
    },
    {
      icon: <Instagram size={20} />,
      url: "https://www.instagram.com/edwinslab.ig?igsh=MWlnaGZxZ2l0OWo0cg==",
      label: "Instagram",
    },
    {
      icon: <Twitter size={20} />,
      url: "https://x.com/edwinslabs",
      label: "Twitter",
    },
    {
      icon: <Mail size={20} />,
      url: "mailto:libraryedwins@gmail.com",
      label: "Email",
    },
  ]

  return (
    <footer
      id="contact"
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

      {/* GRID EFFECT */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          bg-[size:70px_70px]
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

        {/* TOP SECTION */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-20
          "
        >

          {/* LEFT SIDE */}

          <div>

            {/* BRAND */}

            <div
              className="
                group
                flex
                items-center
                gap-5
              "
            >

              {/* LOGO */}

              <div
                className="
                  w-16
                  h-16
                  rounded-2xl
                  bg-white
                  flex
                  items-center
                  justify-center
                  overflow-hidden
                  shadow-[0_10px_30px_rgba(155,233,49,0.25)]
                  transition-all
                  duration-500
                  group-hover:scale-110
                  group-hover:rotate-3
                  group-hover:bg-primary
                "
              >

                <img
                  src={PenguinLogo}
                  alt="Penguin Logo"
                  className="
                    w-full
                    h-full
                    object-contain
                    mix-blend-multiply
                  "
                />

              </div>

              {/* TEXT */}

              <h2
                className="
                  font-orbitron
                  font-semibold
                  text-[40px]
                  tracking-[-2px]
                  text-white
                "
              >

                Edwin’s{" "}

                <span className="text-primary">
                  Library
                </span>

              </h2>

            </div>

            {/* DESCRIPTION */}

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
              seamless QR borrowing, and futuristic
              student experiences.

            </p>

            {/* SOCIAL ICONS */}

            <div
              className="
                mt-10
                flex
                items-center
                gap-5
              "
            >

              {socialLinks.map((social, index) => (

                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
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

                  {social.icon}

                </a>

              ))}

            </div>

          </div>

          {/* RIGHT SIDE */}

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
                    href={link.path}
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

                    {link.name}

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
                <p>Edwin's Lab</p>
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