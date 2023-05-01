"use client"
import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import {
  BsCheckLg,
  BsHandThumbsUp,
  BsChevronDown,
  BsPlayFill,
} from "react-icons/bs"
import classNames from "classnames"

export default function ExpandingImage({ imageUrl }) {
  const [isNearLeftEdge, setIsNearLeftEdge] = useState(false)
  const [isNearRightEdge, setIsNearRightEdge] = useState(false)
  const imageContainerRef = useRef(null)
  const exImageRef = useRef(null)

  useEffect(() => {
    const handleMouseEnter = (e) => {
      const imageContainerRect =
        imageContainerRef.current.getBoundingClientRect()

      const distanceFromLeftEdge = imageContainerRect.left
      const distanceFromRightEdge = window.innerWidth - imageContainerRect.right

      if (distanceFromLeftEdge < imageContainerRect.width / 2) {
        setIsNearLeftEdge(true);
      } else {
        setIsNearLeftEdge(false);
      }

      if (distanceFromRightEdge <= imageContainerRect.width / 2) {
        setIsNearRightEdge(true)
      } else {
        setIsNearRightEdge(false)
      }
    }

    const handleMouseLeave = (e) => {
      setIsNearLeftEdge(false)
      setIsNearRightEdge(false)
    }

    const container = imageContainerRef.current
    container.addEventListener("mouseenter", handleMouseEnter)
    container.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter)
      container.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  const imageContainerClasses = classNames({
    "min-w-[200px]": true,
    "min-h-[111px]": true,
    "flex-1": true,
    "flex-shrink-0": true,
    "rounded": true,
    "relative": true,
  })

  return (
    <div
      ref={imageContainerRef}
      id="imageContainer"
      className={imageContainerClasses}
    >
      {/* expanding  image   */}
      <div
        ref={exImageRef}
        id="exImage"
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-md overflow-hidden border border-neutral-800 ${
          isNearLeftEdge && "left-[85%]"
        } ${isNearRightEdge && "left-[30px]"} hover:rounded-xl`}
      >
        <Image
          className=" w-full"
          src={imageUrl}
          width={341}
          height={360}
          alt=""
        />
        <div id="infoBox" className="bg-brandBlack h-full ">
          <div className="text-white p-4 flex items-center gap-2 lg:scale-110 lg:px-8">
            <BsPlayFill
              className="bg-neutral-100 text-brandBlack p-2 rounded-full hover:bg-neutral-800 hover:text-white  cursor-pointer"
              size={33}
            />
            <BsCheckLg
              className="bg-neutral-600 border-2 border-neutral-400 p-2 rounded-full hover:bg-neutral-300 hover:text-brandBlack cursor-pointer"
              size={33}
            />
            <BsHandThumbsUp
              className="bg-neutral-600 border-2 border-neutral-400 p-2 rounded-full hover:bg-neutral-300 hover:text-brandBlack cursor-pointer"
              size={33}
            />
            <BsChevronDown
              className="bg-neutral-600 border-2 border-neutral-400 ml-auto p-2 rounded-full hover:text-brandBlack hover:bg-neutral-300 cursor-pointer"
              size={33}
            />
          </div>
          <div className="flex px-4">
            <p className="text-left text-green-500 font-semibold">88% Match</p>
          </div>
          <div className="flex px-4 items-center gap-2">
            <div className="border text-white px-3 max-w-[105px]">TV-MA</div>
            <p className="text-white">10 Episodes</p>
            <div className="border text-white px-2 self-start text-xs py-px rounded max-w-[105px]">
              HD
            </div>
          </div>
          <ul className="flex mt-4 px-4 gap-1 text-white">
            <p>Gritty &bull;</p>
            <p>Offbeat &bull;</p>
            <p>Drama</p>
          </ul>
        </div>
      </div>
    </div>
  )
}
