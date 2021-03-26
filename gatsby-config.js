module.exports = {
  siteMetadata: {
    title: `Adrenalized Development Starter`,
    description: `Bare Bones Starter for Projects`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-postcss',
    `gatsby-plugin-sass`,
  ],
}
