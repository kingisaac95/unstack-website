import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

//images
import darkBg from "../images/dark-blue-wave-tile.png"
import unstackLogo from "../images/logo.png"
import reactWorkshopImage from "../images/reactjs-workshop.jpg"
import speakerPlaceholder from "../images/speaker-placeholder.png"
import twitterLogo from "../images/twitter-logo.png"

const WorkshopCard = () => (
  <section className="event-highlight md:absolute max-w-sm bg-white shadow-lg">
    <img
      className="w-full animate-image"
      src={reactWorkshopImage}
      alt="react workshop"
    />
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
          workshops and world-className talks.
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

const Speaker = () => (
  <section className="max-w-md shadow-lg md:flex bg-white rounded-lg p-6 mt-6 mr-4">
    <img
      className="h-20 w-20 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"
      src={speakerPlaceholder}
      alt="speaker placeholder"
    />
    <article className="text-center md:text-left">
      <header>
        <h2 className="text-lg">Erin Lindford</h2>
      </header>
      <p className="text-blue-700 text-sm">Software Engineer, Facebook</p>
      <p className="text-gray-700 italic text-sm">
        "Building for the next billion users from Africa"
      </p>
      <section className="text-gray-600 text-sm inline-flex mt-4">
        <img className="h-5 w-5 mx-auto" src={twitterLogo} alt="twitter logo" />
        <a
          className="ml-2"
          rel="noopener noreferrer"
          target="_blank"
          href="https://twitter.com/"
        >
          @username
        </a>
      </section>
    </article>
  </section>
)

const Organizer = () => (
  <section className="relative max-w-sm shadow-lg bg-white mt-20 rounded-full py-2 px-4">
    <section className="absolute oranizer-image h-24 w-24 rounded-full bg-white">
      <img
        className="h-24 w-24 rounded-full animate-image"
        src={speakerPlaceholder}
        alt="organizer placeholder"
      />
    </section>
    <section className="px-6 py-4">
      <article className="text-center mt-12">
        <header>
          <h2 className="text-lg">Erin Lindford</h2>
        </header>
        <p className="text-blue-700 text-sm">Software Engineer, Facebook</p>
        <p className="text-gray-700 italic text-sm">Co-lead unStack</p>
        <section className="text-gray-600 text-sm inline-flex mt-4">
          <img
            className="h-5 w-5 mx-auto"
            src={twitterLogo}
            alt="twitter logo"
          />
          <a
            className="ml-2"
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/"
          >
            @username
          </a>
        </section>
      </article>
    </section>
  </section>
)

const Sponsors = () => (
  <section className="mt-12 py-4">
    <header>
      <h2 className="text-xl mb-2">Sponsors</h2>
    </header>
    <p>unStack events are possible thanks to our wonderful sponsors.</p>
  </section>
)

const RSVP = () => (
  <section className="mt-12 py-4 text-center" id="rsvp">
    <header>
      <h2 className="text-xl mb-2">Register to attend</h2>
    </header>
    <p>Please register to attend the next unStack event.</p>
    <section className="mt-10 py-4">
      <a
        className="ep_embed_btn bg-blue-500 hover:bg-blue-700 focus:outline-none focus:shadow-outline text-white font-bold py-3 px-16 rounded-full"
        href="https://eventprime.co/e/unstack-2day-reactjs-workshop"
        data-wid="ep_widget_1229"
        rel="noopener noreferrer"
        target="_blank"
      >
        Get Tickets
      </a>
    </section>
  </section>
)

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner />
    <section className="md:px-56 px-12 py-2">
      <section className="mt-24 py-4">
        <header>
          <h2 className="text-xl mb-2">Upcoming Event</h2>
        </header>
        <p>
          unstack will be holding a 2-day React workshop for beginners &
          intermediates. Get ready to go from Zero to having knowledge to build
          React apps{" "}
          <span role="img" aria-label="fire emoji">
            🔥🔥
          </span>
        </p>
      </section>

      <section className="mt-12 py-4">
        <header>
          <h2 className="text-xl mb-2">Speakers</h2>
        </header>
        <p>
          We'll be having these awesome speakers at the 2-day ReactJS workshop
        </p>
        <section className="flex flex-wrap justify-between">
          {new Array(10).fill("placeholder").map((each, key) => (
            <Speaker key={key} />
          ))}
        </section>
      </section>

      <Sponsors />

      <section className="mt-12 py-4">
        <header>
          <h2 className="text-xl mb-2">Organizers</h2>
        </header>
        <p>
          unStack is organized by these awesome{" "}
          <span role="img" aria-label="fire emoji">
            😎
          </span>{" "}
          individuals.
        </p>
        <section className="flex flex-wrap justify-around">
          {new Array(5).fill("placeholder").map((each, key) => (
            <Organizer key={key} />
          ))}
        </section>
      </section>
      <RSVP />
    </section>
  </Layout>
)

export default IndexPage
