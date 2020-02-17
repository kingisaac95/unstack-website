import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import Loader from "../components/loader"

const Schedule = () => {
  const [isLoading, setIsLoading] = useState(false)

  // TODO: fix iframe so a loader shows before content loads
  const checkIframeStatus = () => {
    // document.querySelector("iframe").onload = function() {
    //   console.log("done!")
    // }
    const iframe = document.getElementById("schedule-iframe")
    const iframeDocument =
      iframe.contentDocument || iframe.contentWindow.document

    if (iframeDocument.readyState === "complete") {
      setIsLoading(false)
      return
    }

    setTimeout(checkIframeStatus, 100)
  }

  // useEffect(checkIframeStatus(), [])

  return (
    <Layout>
      <SEO title="Schedule" />
      <Banner title="Schedule of events, 2-day React workshop." />
      <section className="md:px-56 px-12 py-2">
        <section className="mt-12 py-4">
          <header>
            <h2 className="text-xl mb-2">Schedule</h2>
          </header>
          <p>Here's a schedule of events for the 2-day ReactJS workshop</p>
          <section className="mt-4">
            {isLoading ? (
              <Loader />
            ) : (
              <iframe
                title="schedule"
                id="schedule-iframe"
                src="https://conference-schedule.netlify.com"
                frameBorder="0"
                width="1000"
                height="500"
              ></iframe>
            )}
          </section>
        </section>
      </section>
    </Layout>
  )
}

export default Schedule
