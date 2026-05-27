import { useEffect, useState } from "react"

function CursorGlow() {

  const [position, setPosition] = useState({

    x: 0,
    y: 0,
  })

  useEffect(() => {

    const moveCursor = (e) => {

      setPosition({

        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", moveCursor)

    return () => {

      window.removeEventListener("mousemove", moveCursor)
    }

  }, [])

  return (

    <div
      className="
        pointer-events-none

        fixed
        z-[9999]

        w-[320px]
        h-[320px]

        rounded-full

        bg-primary/10

        blur-[100px]

        transition-transform
        duration-200

        hidden
        lg:block
      "
      style={{

        left: position.x - 160,

        top: position.y - 160,
      }}
    />

  )
}

export default CursorGlow