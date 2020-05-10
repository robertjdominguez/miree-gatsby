module.exports = {
  siteMetadata: {
    title: `Miree Center | The Altamont School`,
    description: `Leadership profiles of the C. Kyser Miree Ethical Leadership Center of the Altamont School in Birmingham, Alabama.`,
    author: `@_RobDominguez`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://miree-api.herokuapp.com`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`student-portfolios`],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Montserrat\:300,400,400i,700`],
        display: "swap",
      },
    },
    `gatsby-plugin-styled-components`,
  ],
}
