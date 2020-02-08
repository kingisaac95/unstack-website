import React from "react"
import PropTypes from "prop-types"

//images
import darkBg from "../images/dark-blue-wave-tile.png"
import unstackLogo from "../images/logo.png"
import { WorkshopCard } from "./cards"

const Banner = ({ title }) => (
  <>
    <section className="w-full relative bg-primary px-6 py-4">
      <article className="md:w-6/12 md:px-24 text-center">
        <h2 className="text-white mt-24">{title}</h2>
      </article>

      <WorkshopCard />
    </section>
    <section className="w-full">
      <figure>
        <img
          className="w-full -mt-1"
          src={darkBg}
          alt="Dark background for styling only"
        />
      </figure>
    </section>
  </>
)

Banner.prototype = {
  title: PropTypes.string,
}

Banner.defaultProps = {
  title:
    "An open-source conference for every engineer focused on hands-on workshops and world-class talks.",
}

export default Banner
