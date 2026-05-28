import { useEffect, useRef } from "react"

import gsap from "gsap"

import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

function Reveal({ children, className = "" }) {

  const revealRef = useRef(null)

  useEffect(() => {

    const el = revealRef.current

    gsap.fromTo(

      el,

      {
        opacity: 0,
        y: 80,
      },

      {
        opacity: 1,
        y: 0,

        duration: 1.2,

        ease: "power4.out",

        scrollTrigger: {

          trigger: el,

          start: "top 85%",

          toggleActions: "play none none reverse",
        }
      }
    )

  }, [])

  return (

    <div
      ref={revealRef}

      className={className}
    >

      {children}

    </div>
  )
}

export default Reveal