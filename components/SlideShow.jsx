import NewImage from "@/components/NewImage"

const Slideshow = ({ heading, images, index }) => {
  return (
    <div
      className={` w-full ${
        (index + 1) % 2 === 0 ? " -mt-[240px]" : " -mt-[240px]"
      }`}
    >
      <h2
        className="text-[4wv] translate-y-[128px] relative font-semibold text-white px-5 md:px-[50px]"
      >
        {heading}
      </h2>
      <div
        id="container"
        style={{ display: "flex", overflowX: "auto" }}
        className={`overflow-x-scroll px-5 items-center gap-0.5 h-[380px] md:px-[50px]`}
      >
        {images.map((image, index) => (
          <NewImage key={index} imageUrl={image} />
        ))}
      </div>
    </div>
  )
}

export default Slideshow
