import React from "react"
import LazyLoad from "react-lazyload"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import { SpeakerCard } from "../components/cards"
import Loader from "../components/loader"

const Speakers = () => (
  <Layout>
    <SEO title="Speakers" />
    <Banner title="Our list of amazing speakers for the 2-day React workshop." />
    <section className="md:px-56 px-12 py-2">
      <section className="mt-12 py-4">
        <header>
          <h2 className="text-xl mb-2">Speakers</h2>
        </header>
        <p>
          We'll be having these awesome speakers at the 2-day ReactJS workshop
        </p>
        <section className="flex flex-wrap justify-between">
          {new Array(15).fill("placeholder").map((each, key) => (
            <LazyLoad key={key} once placeholder={<Loader />}>
              <SpeakerCard key={key} />
            </LazyLoad>
          ))}
        </section>
      </section>
    </section>
  </Layout>
)

export default Speakers
