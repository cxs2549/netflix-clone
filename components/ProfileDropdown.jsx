import Image from "next/image"
const ProfileDropdown = () => {
  return (
    <div className="relative cursor-pointer" id="browse-drop">
      <div className="ml-1.5">
        <Image
          src="/avatar.jpg"
          width={32}
          height={32}
          alt="avatar"
          className="rounded"
        />
      </div>

      <div
        id="drop-down"
        className={`w-[240px] h-[6px] absolute top-full left-full`}
      >
        <div className="bg-black/80 border border-neutral-700 w-[240px] border-t-2 border-t-neutral-300 text-white absolute  top-0 right-full rounded-md shadow-md grid">
          <ul className="grid border-b border-neutral-700 text-sm">
            <li className="px-3 py-2 hover:bg-neutral-700/50 flex group items-center gap-2.5">
              <Image
                src="/accounts/rick.jpg"
                width={32}
                height={32}
                alt="avatar"
                className="rounded object-cover"
              />
              <p className="">Rick</p>
            </li>
            <li className="px-3 py-2 hover:bg-neutral-700/50  flex group items-center gap-2.5">
              <Image
                src="/accounts/marlon.jpg"
                width={32}
                height={32}
                alt="avatar"
                className="rounded object-cover"
              />
              <p className="">Marlon</p>
            </li>
            <li className="px-3 py-2 hover:bg-neutral-700/50   flex group items-center gap-2.5">
              <Image
                src="/accounts/kirt.jpg"
                width={32}
                height={32}
                alt="avatar"
                className="rounded object-cover"
              />
              <p className="">Kirt</p>
            </li>
          </ul>
          <ul className="grid border-b border-neutral-700">
            <li className="px-3 py-2 hover:bg-neutral-700/50">DVD</li>
            <li className="px-3 py-2 hover:bg-neutral-700/50">
              Manage Profiles
            </li>
            <li className="px-3 py-2 hover:bg-neutral-700/50">
              Transfer Profile
            </li>
            <li className="px-3 py-2 hover:bg-neutral-700/50">Account</li>
            <li className="px-3 py-2 hover:bg-neutral-700/50">Help Center</li>
          </ul>
          <button className="py-2 rounded-b hover:bg-red-500/50">
            Sign out of Netflix
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProfileDropdown
