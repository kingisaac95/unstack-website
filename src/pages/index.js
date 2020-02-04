import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import { SpeakerCard, OrganizerCard } from "../components/cards"
import Organizers from "../content/organizers"

// Sections
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
          {new Array(5).fill("placeholder").map((each, key) => (
            <SpeakerCard key={key} />
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
          {Organizers.map((organizer, key) => {
            const { name, work, title, twitterHandle, imageSrc } = organizer
            return (
              <OrganizerCard
                key={key}
                name={name}
                work={work}
                title={title}
                twitterHandle={twitterHandle}
                imageSrc={imageSrc}
              />
            )
          })}
        </section>
      </section>

      <RSVP />
    </section>
  </Layout>
)

export default IndexPage
