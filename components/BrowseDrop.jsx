import { AiFillCaretDown } from "react-icons/ai"
const BrowseDrop = ({ nav }) => {
 

  return (
    <div
      className="relative cursor-pointer lg:hidden"
      id="browse-drop"
    >
      <div
        className="ml-1 xs:ml-0 flex items-center gap-1"
      >
        <p className="text-sm font-medium text-white hidden xs:block">Browse</p>
        <AiFillCaretDown className="text-white text-[15px]" />
      </div>

      <div
        id="drop-down"
        className={`w-[240px] -mt-2 h-[6px] absolute top-full left-0`}
      >
        <ul
          className="-translate-x-1/2 bg-black/[89%] border border-neutral-800 border-t-2 border-t-neutral-300 w-[200px] text-white absolute  top-2 translate-y-2 left-0 rounded-md overflow-hidden shadow-md flex flex-col items-center justify-center"
        >
          {nav.map((item) => (
            <li key={item} className=" py-3 hover:bg-neutral-700/50 text-sm font-medium w-full text-center">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default BrowseDrop
