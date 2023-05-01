import Image from "next/image"
import { FaRegBell } from "react-icons/fa"

const NotificationDropdown = () => {
  return (
    <div id="browse-drop" className="relative cursor-pointer">
      <div>
        <FaRegBell className="text-white text-[18px] sm:text-[20px]" />
      </div>
      {/* dropdown */}

      <div
        id="drop-down"
        className={`w-[320px] xs:w-[340px]   h-[6px] absolute top-full right-0`}
      >
        <div className="bg-black/80 border border-neutral-700 w-full border-t-2 border-t-neutral-300 text-white absolute overflow-y-scroll  top-0 translate-y-4 divide-y divide-neutral-700 -right-9 xs:right-0 rounded-md shadow-md flex flex-col -mt-2">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="px-4 flex py-4  gap-1.5 hover:bg-neutral-700/50">
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
          ))}
        </div>
      </div>
    </div>
  )
}

export default NotificationDropdown
