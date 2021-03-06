require('dotenv').config()
  
module.exports = {
  siteMetadata: {
    title: `AdrenalizeMe.com`,
    description: `Creative content for those who go beyond. Adrenalize your mind, body and soul - Adrenalize your life.`,
    keywords: 'Travel, Lifestyle, Adventure, Cuisine, Recipes, Blog, Shop',
    siteUrl: 'https://www.adrenalizeme.com',
  },
  plugins: [
    'gatsby-plugin-mdx',
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'AdrenalizeMe.com',
        short_name: `Adrenalize Me`,
        background_color: `#eee`,
        theme_color: `rgb(14,155,249)`,
        start_url: '/',
        display: `standalone`,
        cache_busting_mode: 'none',
        icon:'src/assets/images/adrenalize-logo.png',
        include_favicon: true,
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    {
      resolve: 'gatsby-source-graphcms',
      options: {
        endpoint: process.env.GATSBY_GRAPHCMS_ENDPOINT,
        token: process.env.GATSBY_GRAPHCMS_TOKEN,
        buildMarkdownNodes: true,
        downloadLocalImages: true,
      },
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_API_KEY,
        queries: [
          {
            query: require('./src/utils/algoliaQuery'),
            transformer: require('./src/utils/algoliaTransformer'),
          },
        ],
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-postcss',
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`
  ],
}
