const data = require('./data/SiteConfig.js')

module.exports = {
  siteMetadata: data.siteMetadata,
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/posts`,
        name: `posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/pages`,
        name: `pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/parts`,
        name: `parts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              backgroundColor: 'transparent',
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: 'UA-179150462-1', // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-google-analytics', // default
          anonymize: true, // default
        },
        // defines the environments where the tracking should be available  - default is ["production"]
        environments: ['production', 'development'],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Keryc Diaz`,
        short_name: `Keryc D'`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/logo.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: 'Open Sans',
            variants: ['300', '400', '600'],
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint:
          'https://kerycdiaz.us2.list-manage.com/subscribe/post?u=bdc6dbfffdc1c782a9ec48d85&amp;id=9d55b5a1fb',
        timeout: 3500,
      },
    },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-preload-fonts`,
  ],
}
