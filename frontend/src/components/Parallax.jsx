import { useEffect, useRef } from "react"

import gsap from "gsap"

import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

function Parallax({

  children,

  speed = 0.2,

  className = "",
}) {

  const ref = useRef(null)

  useEffect(() => {

    const el = ref.current

    gsap.to(el, {

      y: `${speed * 120}px`,

      ease: "none",

      scrollTrigger: {

        trigger: el,

        start: "top bottom",

        end: "bottom top",

        scrub: true,
      }
    })

  }, [speed])

  return (

    <div
      ref={ref}

      className={className}
    >

      {children}

    </div>
  )
}

export default Parallax