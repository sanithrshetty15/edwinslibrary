import { useRef } from "react"

function MagneticButton({ children, className = "" }) {

  const buttonRef = useRef(null)

  const handleMouseMove = (e) => {

    const button = buttonRef.current

    const rect = button.getBoundingClientRect()

    const x =
      e.clientX - rect.left - rect.width / 2

    const y =
      e.clientY - rect.top - rect.height / 2

    button.style.transform =
      `translate(${x * 0.18}px, ${y * 0.18}px)`
  }

  const handleMouseLeave = () => {

    const button = buttonRef.current

    button.style.transform = `translate(0px, 0px)`
  }

  return (

    <button
      ref={buttonRef}

      onMouseMove={handleMouseMove}

      onMouseLeave={handleMouseLeave}

      className={`
        transition-transform
        duration-300

        ${className}
      `}
    >

      {children}

    </button>
  )
}

export default MagneticButton