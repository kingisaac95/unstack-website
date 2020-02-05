import React from "react"
import LazyLoad from "react-lazyload"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import { SpeakerCard } from "../components/cards"
import Loader from "../components/loader"
import Speakers from "../content/speakers"
import { OrganizerCard } from "../components/cards"
import Organizers from "../content/organizers"

const SpeakersPage = () => (
  <Layout>
    <SEO title="Organizers" />
    <Banner title="List of all of our awesome organizers at unStack" />
    <section className="md:px-56 px-12 py-2">
      <section className="mt-12 py-4">
        <section className="flex flex-wrap justify-between">
          {Speakers.length > 0 ? (
            Speakers.map((each, key) => (
              <LazyLoad
                key={key}
                height={100}
                offset={100}
                placeholder={<Loader />}
                once
              >
                <SpeakerCard key={key} />
              </LazyLoad>
            ))
          ) : (
            <section className="mt-12 py-4" id="organizers">
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
                return <OrganizerCard key={key} {...organizer} />
              })}
            </section>
          </section>
          )}
        </section>
      </section>
    </section>
  </Layout>
)

export default SpeakersPage
