// "use client"
// import { useState } from "react"
import Hero from "@/components/Hero"
import SlideShow from "@/components/SlideShow"
import fs from "fs"
import ImageWithModal from "@/components/ImageWithModal"

const files = fs.readdirSync(`${process.cwd()}/public/movies`)

const movies = files
  .filter((file) => !file.endsWith(".DS_Store") && !file.includes("vertical"))
  .map((file) => `/movies/${file}`)

const headings = [
  "Trending Now",
  // "Popular on Netflix",
  // "New Releases",
  // "Watch It Again",
  // "Critically Acclaimed Films",
  // "Action & Adventure",
  // "Comedies",
  // "Dramas",
  // "Thrillers",
  // "Documentaries",
  // "TV Shows",
  // "Reality TV",
  // "Kids' TV",
  // "Anime",
  // "Mystery TV Shows",
  // "Sci-Fi & Fantasy TV",
  // "Sports Movies",
  // "Music & Musicals",
  // "Classic Movies",
  // "Independent Movies",
  // "International Movies",
  // "British Movies",
  // "European Movies",
  // "Australian Movies",
  // "Middle Eastern Movies",
  // "Latin American Movies",
]

const sections = headings.map((heading, i) => {
  const shuffled = movies.sort(() => 0.5 - Math.random())
  return {
    heading,
    images: shuffled.slice(0, 20),
  }
})

const Home = () => {
  return (
    <>
      <Hero />
      {/* <div className="grid w-full gap-6 md:-translate-y-14 lg:-translate-y-[20px]">
        {sections.map((section, i) => (
          <SlideShow {...section} key={section} />
        ))}
      </div> */}
      <div className="flex items-center overflow-x-scroll px-5 gap-0.5">
        {Array.from({ length: 3 }).map((_, i) => (
          <ImageWithModal key={i} zIndex={i + 1} />
        ))}
      </div>
    </>
  )
}

export default Home
