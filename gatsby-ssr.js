const React = require("react")
exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="1"
      type="text/javascript"
      src="https://eventprime.co/js/widget.js"
    />,
  ])
}

/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */
