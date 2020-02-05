import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import unstackLogo from "../images/logo.png"

const Header = ({ siteTitle }) => (
  <header className="flex justify-between bg-primary md:px-12 px-12 py-5">
    <h4 className="m-0 text-xl">
    <Link to="">
    <figure >
          <img
            className="h-auto w-40 mx-auto"
            src={unstackLogo}
            alt="unstack logo"
          />
        </figure>
        </Link>
    </h4>
    <section className="flex">
      <h4 className="m-0">
        <Link to="/speakers" className="text-white no-underline">
          Speakers
        </Link>
      </h4>
      <h4 className="m-0 ml-4">
        <Link to="/organizers" className="text-white no-underline">
          Organizers
        </Link>
      </h4>
    </section>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
