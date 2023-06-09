"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import Search from "./Search"
import ProfileDropdown from "./ProfileDropdown"
import NotificationDropdown from "./NotificationDropdown"
import BrowseDrop from "./BrowseDrop"
import Link from "next/link"
import Dropdown from "./Dropdown"

const netflixNavigationItems = [
  "Home",
  "TV Shows",
  "Movies",
  "New & Popular",
  "My List",
  "Browse by Languages",
]

const Header = () => {
  const [navbarBg, setNavbarBg] = useState("bg-transparent")

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setNavbarBg("bg-brandBlack")
    } else {
      setNavbarBg("bg-transparent")
    }
  }

  return (
    <header className={`fixed top-0 left-0 w-full z-50 h-[56px] ${navbarBg}`}>
      <div className="mx-auto absolute left-1/2 -translate-x-1/2 top-0 w-full bg-gradient-to-b from-brandBlack to-transparent navbar-transition h-[58px] -z-10"></div>
      <nav className="flex items-center gap-10 px-5 md:px-[48px] py-3">
        <Link href="/" className="flex items-center xs:gap-3">
          <Image
            src="/logo.png"
            width={220}
            height={50}
            alt="logo"
            className="max-w-[90px] sm:max-w-[110px]"
          />
          <BrowseDrop nav={netflixNavigationItems} />
          {/* <Dropdown payload={} /> */}
        </Link>
        <ul className="hidden lg:flex items-center space-x-[24px] text-[15px]">
          {netflixNavigationItems.map((item, index) => (
            <li key={index} className="text-white text-[12px] cursor-pointer sm:text-[14px]" style={{ fontWeight: item === 'Home' ? 'bold' : 'normal' }} >
              {" "}
              {item}{" "}
            </li>
          ))}
        </ul>
        <div className="ml-auto">
          <ul className=" flex items-center gap-5 text-[15px]">
            <li className="">
              <Search />
            </li>
            <li className="text-white text-sm"><Link href={`/`}>DVD</Link></li>
            <li>
              <NotificationDropdown />
            </li>
            <li>
              <ProfileDropdown />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
