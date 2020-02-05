import React from "react"
import PropTypes from "prop-types"

import reactWorkshopImage from "../images/reactjs-workshop.jpg"
import imagePlaceholder from "../images/image-placeholder.png"
import twitterLogo from "../images/twitter-logo.png"

const WorkshopCard = () => (
  <section className="event-highlight md:absolute max-w-sm bg-white shadow-lg">
    <figure>
      <img
        className="w-full animate-image"
        src={reactWorkshopImage}
        alt="react workshop"
      />
    </figure>
    <section className="px-6 py-4 animate-content">
      <article>
        <header>
          <h2 className="text-xl mb-2">2-day ReactJS Workshop</h2>
        </header>
        <section className="text-base text-gray-700">
          <p className="mb-2">Date: 6th - 7th March 2020</p>
          <p className="mb-2">Time: 10:00am till 4:30pm (Each Day)</p>
          <p className="">Venue: The Zone, Gbagada, Lagos, Nigeria.</p>
        </section>
      </article>
      <section className="px-6 py-4 text-center">
        <p className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #unstack
        </p>
        <p className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #react
        </p>
      </section>
      <footer className="flex justify-center px-6 py-4">
        <a
          href="#rsvp"
          className="bg-blue-500 hover:bg-blue-700 focus:outline-none focus:shadow-outline text-white font-bold py-3 px-16 rounded-full"
        >
          RSVP
        </a>
      </footer>
    </section>
  </section>
)

const SpeakerCard = ({ name, work, title, twitterHandle, imageSrc }) => (
  <section className="md:w-3/5 md:max-w-md w-full shadow-lg md:flex items-center bg-white rounded-lg p-6 mt-6 mr-4">
    <figure className="md:w-1/4">
      <img
        className="h-40 w-40 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"
        src={imageSrc != null ? imageSrc : imagePlaceholder}
        alt="speaker placeholder"
      />
    </figure>
    <article className="md:w-3/4 text-center md:text-left md:mt-0 mt-6 md:ml-6">
      <header>
        <h2 className="text-lg">{name}</h2>
      </header>
      <p className="text-blue-700 text-sm">{work}</p>
      <p className="text-gray-700 italic text-sm">{title}</p>
      <section className="text-gray-600 text-sm inline-flex mt-4">
        <figure>
          <img
            className="h-5 w-5 mx-auto"
            src={twitterLogo}
            alt="twitter logo"
          />
        </figure>
        <a
          className="ml-2"
          rel="noopener noreferrer"
          target="_blank"
          href="https://twitter.com/"
        >
          @{twitterHandle}
        </a>
      </section>
    </article>
  </section>
)

SpeakerCard.prototype = {
  name: PropTypes.string,
  work: PropTypes.string,
  title: PropTypes.string,
  twitterHandle: PropTypes.string,
  imageSrc: PropTypes.string,
}

SpeakerCard.defaultProps = {
  name: "",
  work: "",
  title: "",
  twitterHandle: "",
  imageSrc: "",
}

const OrganizerCard = ({ name, work, title, twitterHandle, imageSrc }) => (
  <section className="relative max-w-sm shadow-lg bg-white mt-20 mr-2 rounded-full py-2 px-4">
    <section className="absolute oranizer-image h-24 w-24 rounded-full bg-white">
      <figure>
        <img
          className="h-24 w-24 rounded-full animate-image border-2 border-blue-500"
          src={imageSrc != null ? imageSrc : imagePlaceholder}
          alt={name}
        />
      </figure>
    </section>
    <section className="px-5 py-4 w-56">
      <article className="text-center mt-12">
        <header>
          <h2 className="text-lg">{name}</h2>
        </header>
        <p className="text-blue-700 text-sm">{work}</p>
        <p className="text-gray-700 italic text-sm">{title}</p>
        <section className="text-gray-600 text-sm inline-flex mt-4">
          <figure>
            <img
              className="h-5 w-5 mx-auto"
              src={twitterLogo}
              alt="twitter logo"
            />
          </figure>
          <a
            className="ml-2"
            rel="noopener noreferrer"
            target="_blank"
            href={`https://twitter.com/${twitterHandle}`}
          >
            @{twitterHandle}
          </a>
        </section>
      </article>
    </section>
  </section>
)

OrganizerCard.prototype = {
  name: PropTypes.string,
  work: PropTypes.string,
  title: PropTypes.string,
  twitterHandle: PropTypes.string,
  imageSrc: PropTypes.string,
}

OrganizerCard.defaultProps = {
  name: "",
  work: "",
  title: "",
  twitterHandle: "",
  imageSrc: "",
}

const SponsorCard = ({ name, imageSrc }) => (
  <section className="flex items-center max-w-sm shadow-lg bg-white mt-20 mr-2">
    <section className="px-5 py-4 w-32">
      <figure>
        <img
          className="w-full h-auto w-32 animate-image"
          src={imageSrc || imagePlaceholder}
          alt={name}
        />
      </figure>
    </section>
  </section>
)

SponsorCard.prototype = {
  name: PropTypes.string,
  imageSrc: PropTypes.string,
}

SponsorCard.defaultProps = {
  name: "",
  imageSrc: "",
}

export { WorkshopCard, SpeakerCard, OrganizerCard, SponsorCard }
