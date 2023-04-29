"use client"
import Image from "next/image"
import { useState, useRef } from "react"
import { AiFillCaretDown } from "react-icons/ai"
const BrowseDrop = ({ nav }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false)
  const dropdownRef = useRef(null)
  const buttonRef = useRef(null)

  function handleMouseEnter() {
    setTimeout(() => {
      setIsDropdownVisible(true)
    }, 50)
  }

  function handleMouseLeave(event) {
    if (
      !dropdownRef.current.contains(event.relatedTarget) &&
      !buttonRef.current.contains(event.relatedTarget)
    ) {
      setIsDropdownVisible(false)
    }
  }

  function handleClick() {
    setIsDropdownVisible((prevState) => !prevState)
  }

  return (
    <div
      className="relative cursor-pointer lg:hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="ml-1.5 flex items-center gap-1"
        ref={buttonRef}
        onClick={handleClick}
      >
        <p className="text-sm font-medium text-white hidden xs:block">Browse</p>
        <AiFillCaretDown className="text-white" />
      </div>

      <div
        className={`w-[240px] h-[6px] absolute top-full left-0 ${
          isDropdownVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <ul
          className="-translate-x-1/2 bg-brandBlack/90 border border-neutral-700 w-[200px] text-white absolute py-3  top-0 translate-y-2 left-0 rounded-md shadow-md flex flex-col items-center justify-center gap-4"
          ref={dropdownRef}
        >
          {nav.map((item) => (
            <li key={item} className="hover:underline text-sm font-medium">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default BrowseDrop
