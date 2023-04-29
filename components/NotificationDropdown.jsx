"use client"
import Image from "next/image"
import { useState, useRef } from "react"
import { FaRegBell } from "react-icons/fa"

const NotificationDropdown = () => {
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
      className="relative cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="" ref={buttonRef} onClick={handleClick}>
        <FaRegBell className="text-white text-[18px] sm:text-[20px]" />
      </div>
      {/* dropdown */}
      <div
        className={`w-[318px] sm:w-[370px] h-[10vh]  absolute top-full right-0 translate-x-12 ${
          isDropdownVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="bg-brandBlack/90 border border-neutral-700 w-full text-white absolute py-3 overflow-y-scroll  top-0 translate-y-2 divide-y divide-neutral-700 right-0 rounded-md shadow-md flex flex-col gap-4"
          ref={dropdownRef}
        >
          <div className="px-4 flex  gap-1.5">
            <Image
              src="/notifications/notification1.jpeg"
              width={150}
              height={100}
              alt="notification"
              className="rounded max-w-[120px] w-full sm:w-[150px]"
            />
            <div className="self-end">
              <p className="text-xs text-neutral-400">Today</p>
              <h2 className="text-sm text-white">New Arrival</h2>
              <h2 className=" text-white text-sm">John Mulaney: Baby J</h2>
            </div>
          </div>
          <div className="px-4 pt-3 flex  gap-1.5 md:items-center">
            <Image
              src="/notifications/notification1.jpeg"
              width={150}
              height={100}
              alt="notification"
              className="rounded max-w-[120px] w-full sm:w-[150px]"
            />
            <div className="self-end">
              <p className="text-xs text-neutral-400">Today</p>
              <h2 className="text-sm text-white">New Arrival</h2>
              <h2 className=" text-white text-sm">John Mulaney: Baby J</h2>
            </div>
          </div>
          <div className="px-4 flex pt-3  gap-1.5 md:items-center">
            <Image
              src="/notifications/notification1.jpeg"
              width={150}
              height={100}
              alt="notification"
              className="rounded max-w-[120px] w-full sm:w-[150px]"
            />
            <div className="self-end">
              <p className="text-xs text-neutral-400">Today</p>
              <h2 className="text-sm text-white">New Arrival</h2>
              <h2 className=" text-white text-sm">John Mulaney: Baby J</h2>
            </div>
          </div>
        
          
        </div>
      </div>
    </div>
  )
}

export default NotificationDropdown
