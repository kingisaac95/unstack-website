import { Link } from "gatsby"
import React from "react"

import unstackLogo from "../images/logo.png"

const Header = () => (
  <header className="flex items-end justify-between bg-primary md:px-12 px-6 py-5">
    <figure>
      <img
        className="h-auto w-24 mx-auto"
        src={unstackLogo}
        alt="unstack logo"
      />
    </figure>
    <section className="flex">
      <h4 className="m-0">
        <Link to="/speakers" className="text-white no-underline">
          Speakers
        </Link>
      </h4>
      <h4 className="m-0 ml-4">
        <Link to="/#organizers" className="text-white no-underline">
          Organizers
        </Link>
      </h4>
    </section>
  </header>
)

export default Header
