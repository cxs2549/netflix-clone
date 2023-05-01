const Dropdown = ({ payload, children }) => {


  return (
    <div
      className="relative cursor-pointer lg:hidden"
      id="browse-drop"
    >
     {children}

      <div
        id="drop-down"
        className={`w-[240px] -mt-2 h-[6px] absolute top-full left-0`}
      >
       {payload}
      </div>
    </div>
  )
}

export default Dropdown
