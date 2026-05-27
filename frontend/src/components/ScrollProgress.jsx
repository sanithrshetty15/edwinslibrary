import { useEffect, useState } from "react"

function ScrollProgress() {

  const [scroll, setScroll] = useState(0)

  useEffect(() => {

    const handleScroll = () => {

      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight

      const progress =
        (window.scrollY / totalHeight) * 100

      setScroll(progress)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {

      window.removeEventListener("scroll", handleScroll)
    }

  }, [])

  return (

    <div
      className="
        fixed
        top-0
        left-0

        h-[3px]

        z-[99999]

        bg-primary

        shadow-[0_0_20px_rgba(155,233,49,0.7)]

        transition-all
        duration-150
      "
      style={{
        width: `${scroll}%`
      }}
    />

  )
}

export default ScrollProgress