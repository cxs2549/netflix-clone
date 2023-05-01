import { useState, useEffect, useRef } from "react"
import { RiSearchLine } from "react-icons/ri"
import { IoMdClose } from "react-icons/io"

const Search = () => {
  const [showSearch, setShowSearch] = useState(false)
  const searchRef = useRef(null)
  const inputRef = useRef(null)
  const search = useRef(null)

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
    setShowSearch(!showSearch)
    search.current.classList.add(showSearch ? "show" : "hide")
    setTimeout(() => {
      inputRef.current.focus()
    }, 500)
  }
  const handleToggle = () => {
    setTimeout(() => {
      setShowSearch(false)
    }, 100)
  }

  return (
    <div ref={searchRef} className=" cursor-pointer sm:relative sm:mr-3 lg:mr-0 xl:mr-3">
      <RiSearchLine
        className="text-[22px] md:z-20 sm:relative z-20 text-white"
        onClick={handleToggleSearch}
      />
      <div
        ref={search}
        id="search"
        className={`absolute w-[250px] hidden sm:block lg:hidden xl:block duration-300 top-1/2 -translate-y-1/2 translate-x-3 right-0  z-10  bg-black/80 rounded`}
      >
        <input
          ref={inputRef}
          type="text"
          placeholder="Search"
          className="w-full border border-neutral-800 outline-none text-white h-10 rounded border-l-2 border-l-neutral-300 bg-brandBlack/80  px-2.5"
        />
      
      </div>

      <div
        ref={search}
        id="search"
        className={`absolute left-1/2 -translate-x-1/2 w-[280px] sm:hidden lg:block xl:hidden duration-300   z-30  bg-black/80 rounded ${
          showSearch
            ? "opacity-100 pointer-events-auto top-14 lg:top-8"
            : "opacity-0 pointer-events-none top-1/2"
        }`}
      >
        <input
          ref={inputRef}
          type="text"
          placeholder="Search"
          className="w-full border border-neutral-800 outline-none text-white h-10 rounded border-l-2 border-l-neutral-300 bg-brandBlack/80  px-2.5"
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
