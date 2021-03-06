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
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `9j1cwo89254f`,
        accessToken: `pG_Ce7tR-FJmUr4XdoeDD6GlUEBuK2f1ZjSkGzthzM4`,
      },
    },
    `@contentful/gatsby-transformer-contentful-richtext`,
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
