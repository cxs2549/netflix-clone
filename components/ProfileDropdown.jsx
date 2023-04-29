'use client'
import Image from "next/image"
import { useState, useRef } from "react"
const ProfileDropdown = () => {
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
        <div className="ml-1.5" ref={buttonRef} onClick={handleClick}>
          <Image
            src="/avatar.png"
            width={32}
            height={32}
            alt="avatar"
            className="rounded"
          />
        </div>
  
        <div
          className={`w-[240px] h-[6px] absolute top-full right-0 ${
            isDropdownVisible ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div
            className="bg-brandBlack/90 border border-neutral-700 w-[240px] text-white absolute py-3  top-0 translate-y-2 right-0 rounded-md shadow-md grid gap-4"
            ref={dropdownRef}
          >
            <ul className="grid gap-3 pb-3 border-b border-neutral-700 text-sm">
              <li className="px-3 flex group items-center gap-2.5">
                <Image
                  src="/accounts/rick.png"
                  width={32}
                  height={32}
                  alt="avatar"
                  className="rounded object-cover"
                />
                <p className="group-hover:underline">Rick</p>
              </li>
              <li className="px-3 flex group items-center gap-2.5">
                <Image
                  src="/accounts/marlon.png"
                  width={32}
                  height={32}
                  alt="avatar"
                  className="rounded object-cover"
                />
                <p className="group-hover:underline">Marlon</p>
              </li>
              <li className="px-3 flex group items-center gap-2.5">
                <Image
                  src="/accounts/kirt.png"
                  width={32}
                  height={52}
                  alt="avatar"
                  className="rounded object-cover"
                />
                <p className="group-hover:underline">Kirt</p>
              </li>
            </ul>
            <h4 className="px-3 -mt-2 hover:underline">DVD</h4>
            <ul className="-translate-y-1 grid gap-2 border-b border-neutral-700 pb-3">
              <li className="px-3 hover:underline">Manage Profiles</li>
              <li className="px-3 hover:underline">Transfer Profile</li>
              <li className="px-3 hover:underline">Account</li>
              <li className="px-3 hover:underline">Help Center</li>
            </ul>
            <button className="-mt-2 hover:underline -translate-y-0.5">Sign out of Netflix</button>
          </div>
        </div>
      </div>
    )
  }

  export default ProfileDropdown;