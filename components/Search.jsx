import { useState, useEffect, useRef } from "react"
import { RiSearchLine } from "react-icons/ri"
import { IoMdClose } from "react-icons/io"

const Search = () => {
  const [showSearch, setShowSearch] = useState(false)
  const searchRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearch(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [searchRef])

  const handleToggleSearch = () => {
    setTimeout(() => {
      setShowSearch(!showSearch)
    }, 50)
    setTimeout(() => {
      inputRef.current.focus()
    }, 300)
  }

  const handleToggle = () => {
    setTimeout(() => {
      setShowSearch(false)
    }, 100)
  }

  return (
    <div ref={searchRef} className=" cursor-pointer">
      <RiSearchLine
        className="text-[22px] md:z-20 relative text-white"
        onClick={handleToggleSearch}
      />

      <div
        className={`absolute top-1/2  -translate-y-1/2 left-5 right-14  z-50 lg:right-20   bg-black/80 rounded ${
          showSearch
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <input
          ref={inputRef}
          type="text"
          placeholder="Search"
          className="w-full border border-neutral-700 outline-none text-white h-10 rounded bg-brandBlack/80  px-2.5"
        />
        <IoMdClose
          id="close-search"
          size={26}
          color="#ffffff"
          className="absolute top-1/2 -translate-y-1/2 right-2.5 z-50 text-white stroke-white"
          onClick={handleToggle}
        />
      </div>
    </div>
  )
}

export default Search
