module.exports = {
  siteMetadata: {
    title: `Manny Ikomi`,
    description: `Design Thinker, Lifetime Learner, Digital Craftsman`,
    author: `@MannyIkomi`,
    socialMention: '@MannyIkomi',
    url: 'https://mannyikomi.com',
    openGraphType: 'website'
  },
  plugins: [
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `UA-143395225-1`,
        // Puts tracking script in the head instead of the body
        head: true,
        // enable ip anonymization
        anonymize: true,
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    // `gatsby-source-filesystem`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `static`,
        path: `${__dirname}/static`,
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
        icon: `static/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'manni-portfolio',

        schemas: {
          project: require('./custom_types/project.json'),
          socials: require('./custom_types/socials.json'),
          about: require('./custom_types/about.json'),
        }
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
