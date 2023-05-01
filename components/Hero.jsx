import Image from "next/image"
import React from "react"
import { AiOutlinePlus } from "react-icons/ai"
import { BsFillPlayFill } from "react-icons/bs"
import { BiInfoCircle } from "react-icons/bi"

const Hero = () => {
  return (
    <div className="full-screen-image overflow-hidden sm:max-h-[550px] lg:min-h-[90vh] 2xl:max-h-[90vh]">
      <Image
        src="/hero/hero.jpeg"
        width={1000}
        height={1000}
        alt=""
        className="hidden sm:block w-full h-full object-cover"
      />
      <Image
        src="/hero/hero-mobile.jpeg"
        width={800}
        height={1000}
        alt=""
        className=" sm:hidden w-full h-full object-cover"
      />
      <div className="absolute md:top-8 lg:top-0  left-0 right-4 bottom-5 sm:bottom-4 flex flex-col justify-center  w-full xs:px-[22px] md:px-[50px] py-5  sm:gap-8 z-10">
        <div className="inline-block max-w-[420px]">
          <Image
            src="/hero/hero-text.png"
            className="hidden sm:block max-w-[210px] sm:max-w-[370px] md:max-w-[420px]"
            width={1200}
            height={1000}
            alt=""
          />
        </div>
        <div className="absolute right-0 text-white bottom-20 xs:bottom-24 font-bold border-l-2 text-[15px] px-4 py-1 bg-brandBlack/70 leading-0 opacity-75 w-[60px] text-center">
          R
        </div>
        <div className="px-4  xs:px-0 md:scale-105 relative ml-[6px] xs:translate-y-5 sm:-translate-y-2.5 md:ml-[12px] h-[46px] lg:gap-3 gap-2 flex md:max-w-[360px] w-full">
          <button className="btn-nod rounded bg-gray-100 font-semibold px-6 items-center h-full flex justify-center gap-0.5 hover:opacity-75">
            <BsFillPlayFill className="text-2xl" />
            Play
          </button>
          <button className="btn-nod rounded bg-gray-400/20 backdrop-blur-sm  hover:bg-gray-500/50 font-semibold px-6 items-center h-full flex justify-center gap-2.5 text-white">
            <BiInfoCircle className="text-2xl" />
            More info
          </button>

          <button className="hover:bg-gray-100/75 ml-auto rounded btn-nod bg-gray-100/50 text-neutral-800 font-semibold px-3 py-2">
            {/* plus icon */}
            <AiOutlinePlus className="text-2xl" />
          </button>
        </div>
      </div>
      <div className="fade-out"></div>
    </div>
  )
}

export default Hero
