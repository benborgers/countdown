module.exports = {
  siteMetadata: {
    name: `Countdown`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Countdown`,
        short_name: `Countdown`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#c71f27`,
        display: `standalone`,
        icon: `src/images/icon.png`
      }
    }
  ]
}
