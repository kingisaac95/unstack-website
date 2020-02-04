import React from "react"

//images
import darkBg from "../images/dark-blue-wave-tile.png"
import unstackLogo from "../images/logo.png"
import { WorkshopCard } from "./cards"

const Banner = () => (
  <>
    <section className="w-full relative bg-primary px-6 py-4">
      <article className="md:max-w-2xl md:pl-32 text-center">
        <img
          className="h-auto w-64 mx-auto"
          src={unstackLogo}
          alt="unstack logo"
        />
        <h2 className="text-white mt-16">
          An open-source conference for every engineer focused on hands-on
          workshops and world-class talks.
        </h2>
      </article>

      <WorkshopCard />
    </section>
    <section className="w-full">
      <img
        className="w-full -mt-1"
        src={darkBg}
        alt="Dark background for styling only"
      />
    </section>
  </>
)

export default Banner
