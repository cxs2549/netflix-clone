// "use client"
import { useMemo } from "react"
import Hero from "@/components/Hero"
import { readdirSync } from "fs"
import Slideshow from "@/components/SlideShow"

const Home = async () => {
  const files =  readdirSync(`${process.cwd()}/public/movies`)

  const movies = files
    .filter((file) => !file.endsWith(".DS_Store") && !file.includes("vertical"))
    .map((file) => `/movies/${file}`)

  const headings = [
    "Trending Now",
    "Continue Watching for Cliff",
    "Popular on Netflix",
    "New Releases",
    "Watch It Again",
    "Critically Acclaimed Films",
    "Action & Adventure",
    "Comedies",
    "Dramas",
    "Thrillers",
    "Documentaries",
    "TV Shows",
    "Reality TV",
    "Kids' TV",
    "Anime",
    "Mystery TV Shows",
    "Sci-Fi & Fantasy TV",
    "Sports Movies",
    "Music & Musicals",
    "Classic Movies",
    "Independent Movies",
    "International Movies",
    "British Movies",
    "European Movies",
    "Australian Movies",
    "Middle Eastern Movies",
    "Latin American Movies",
  ]

  const sections = headings.map((heading, i) => {
    const shuffled = movies.sort(() => 0.5 - Math.random())
    return {
      heading,
      images: shuffled.slice(0, 25),
    }
  })
  return (
    <>
      <Hero />
      <div className="mt-[120px]">
        {sections.map((section, index) => (
          <Slideshow
            key={section.heading}
            heading={section.heading}
            images={section.images}
            index={index}
          />
        ))}
      </div>
    </>
  )
}

export default Home
