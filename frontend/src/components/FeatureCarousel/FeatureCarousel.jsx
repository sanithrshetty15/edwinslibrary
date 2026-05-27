import { useEffect, useRef } from "react"

import gsap from "gsap"

import {
  BrainCircuit,
  QrCode,
  ShieldCheck,
  Bell,
  BarChart3,
  BookOpen,
} from "lucide-react"

function FeatureCarousel() {

  const trackRef = useRef(null)

  useEffect(() => {

    gsap.to(trackRef.current, {

      xPercent: -50,

      duration: 30,

      repeat: -1,

      ease: "none",
    })

  }, [])

  const cards = [

    {
      icon: <BrainCircuit size={30} />,
      title: "AI Recommendations",
      description:
        "Personalized intelligent book suggestions powered by AI.",
    },

    {
      icon: <QrCode size={30} />,
      title: "QR Borrowing",
      description:
        "Borrow books instantly with seamless QR verification.",
    },

    {
      icon: <ShieldCheck size={30} />,
      title: "Secure Authentication",
      description:
        "Advanced secure role-based student and admin access.",
    },

    {
      icon: <Bell size={30} />,
      title: "Real-Time Alerts",
      description:
        "Instant due-date reminders and smart notifications.",
    },

    {
      icon: <BarChart3 size={30} />,
      title: "Analytics Dashboard",
      description:
        "Track engagement and library activity visually.",
    },

    {
      icon: <BookOpen size={30} />,
      title: "Digital Library",
      description:
        "Access books and resources from any device instantly.",
    },
  ]

  return (

    <section
      className="
        relative

        py-32

        overflow-hidden
      "
    >

      {/* TOP GRADIENT */}

      <div
        className="
          absolute

          top-0
          left-1/2

          -translate-x-1/2

          w-[500px]
          h-[500px]

          rounded-full

          bg-primary/10

          blur-[120px]

          pointer-events-none
        "
      />

      {/* HEADING */}

      <div
        className="
          relative
          z-10

          max-w-4xl

          mx-auto

          text-center
        "
      >

        <h2
          className="
            font-orbitron
            font-semibold

            text-[42px]
            sm:text-[56px]

            leading-[1.1]

            tracking-[-3px]

            text-black
          "
        >

          Designed for the{" "}

          <span className="text-primary">
            Future
          </span>

          {" "}of Libraries

        </h2>

        <p
          className="
            mt-6

            text-[17px]

            leading-[1.9]

            text-gray-medium

            max-w-2xl

            mx-auto
          "
        >

          Intelligent automation, seamless borrowing,
          futuristic analytics, and AI-driven experiences —
          all built into one modern ecosystem.

        </p>

      </div>

      {/* CAROUSEL */}

      <div
        className="
          mt-20

          overflow-hidden
        "
      >

        <div
          ref={trackRef}

          className="
            flex
            gap-8

            w-max
          "
        >

          {[...cards, ...cards].map((card, index) => (

            <div
              key={index}

              className="
                w-[340px]
                h-[220px]

                p-8

                rounded-[32px]

                bg-white/70

                backdrop-blur-xl

                border
                border-black/5

                shadow-[0_10px_40px_rgba(0,0,0,0.04)]

                flex
                flex-col

                transition-all
                duration-500

                hover:-translate-y-2
                hover:border-primary/20
                hover:shadow-[0_18px_50px_rgba(0,0,0,0.06)]
              "
            >

              {/* ICON */}

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

                {card.icon}

              </div>

              {/* TITLE */}

              <h3
                className="
                  mt-7

                  text-[22px]

                  font-semibold

                  text-black
                "
              >

                {card.title}

              </h3>

              {/* DESCRIPTION */}

              <p
                className="
                  mt-4

                  text-[15px]

                  leading-[1.8]

                  text-gray-medium
                "
              >

                {card.description}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default FeatureCarousel