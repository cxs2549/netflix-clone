"use client"
import Image from "next/image"
import { useState } from "react"
import { useSpring, animated } from "react-spring"

const HoverBox = ({ children, zIndex }) => {
  const [hovered, setHovered] = useState(false)
  const h = 350
  const boxProps = useSpring({
    from: { height: 0, width: 0, opacity: 0, translateY: 10 },
    to: {
      height: hovered ? h : 0,
      width: hovered ? 260 : 0,
      opacity: hovered ? 1 : 0,
      translateY: hovered ? -20 : 50,
    },
    delay: hovered ? 300 : 0,
    config: {
      mass: 1.25,
      tension: 200,
      friction: 20,
    },
  })

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="bg-red-400 flex-shrink-0 pt-16"
      style={{
        position: "relative",
        display: "inline-block", 
        verticalAlign: "top", 
        width: "200px",
        zIndex: zIndex, 
        height: h + 90, 
      }}
    >
      {children}
      <div>
        <Image
          src="/movies/movie-79.jpeg"
          alt="Picture of the author"
          width={200}
          height={100}
          className="cursor-pointer"
        />
      </div>
      <animated.div
        className=""
        style={{
          position: "absolute",
          top: "50%",
          overflow: "hidden",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "white",
          borderRadius: "10px",
          zIndex: hovered ? 2000 : 1,
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
          ...boxProps,
        }}
      >
        <Image
          src="/movies/movie-79.jpeg"
          alt="Picture of the author"
          width={300}
          height={100}
        />
      </animated.div>
    </div>
  )
}

export default HoverBox
