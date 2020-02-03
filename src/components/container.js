import React from "react"

const Container = ({ children }) => (
  <div
    style={{
      margin: `0 auto`,
      maxWidth: `70vw`,
      padding: `0 1.0875rem 1.45rem`,
    }}
  >
    {children}
  </div>
)

export default Container
