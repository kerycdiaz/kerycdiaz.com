// const colors = require('../src/styles/colors');
const GitHubIcon = require('@material-ui/icons/GitHub').default
const LinkedInIcon = require('@material-ui/icons/LinkedIn').default
const InstagramIcon = require('@material-ui/icons/Instagram').default
const FacebookIcon = require('@material-ui/icons/Facebook').default

const config = {
  // siteTitle: "PersonalBlog - a blog starter for GatsbyJS", // <title>
  // shortSiteTitle: "PersonalBlog GatsbyJS Starter", // <title> ending for posts and pages
  // siteDescription: "PersonalBlog is a GatsbyJS starter.",
  // siteUrl: "https://gatsby-starter-personal-blog.greglobinski.com",
  // pathPrefix: "",
  // siteImage: "preview.jpg",
  // siteLanguage: "en",
  // // author
  // authorName: "greg lobinski",
  // authorTwitterAccount: "greglobinski",
  // info
  infoTitle: 'Keryc Díaz',
  infoTitleNote: 'personal blog',
  infoSocialLinks: [
    { icon: GitHubIcon, url: 'https://github.com/kerycdiaz' },
    { icon: LinkedInIcon, url: 'https://linkedin.com/in/kerycdiaz' },
    { icon: InstagramIcon, url: 'https://instagram.com/kerycdiaz' },
    { icon: FacebookIcon, url: 'https://facebook.com/kerycdiaz' },
  ],
  // // manifest.json
  // manifestName: "PersonalBlog - a blog starter for GatsbyJS",
  // manifestShortName: "PersonalBlog", // max 12 characters
  // manifestStartUrl: "/",
  // manifestBackgroundColor: colors.background,
  // manifestThemeColor: colors.background,
  // manifestDisplay: "standalone",
  // // contact
  // contactEmail: "john@doe.com",
}
module.exports = config
