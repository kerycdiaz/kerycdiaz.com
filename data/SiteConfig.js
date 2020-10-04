// const colors = require('../src/styles/colors');
const GitHubIcon = require('@material-ui/icons/GitHub').default
const LinkedInIcon = require('@material-ui/icons/LinkedIn').default
const InstagramIcon = require('@material-ui/icons/Instagram').default
const FacebookIcon = require('@material-ui/icons/Facebook').default

const config = {
  siteMetadata: {
    title: `Keryc Díaz - Experiencias, vivencias y un poco de programación.`,
    author: {
      name: `Keryc Díaz`,
    },
    description: `Espero ayudarte a crecer y aprender. Estoy para contarte historias personales, enseñarte de lo que me apasiona, convivir contigo y también aprender de ti.`,
    siteUrl: `https://kerycdiaz.com`,
    siteImage: 'logo.png',
    social: {
      twitter: `kerycdiaz`,
    },
  },
  //SEOOOO:
  // pathPrefix: "",
  // siteLanguage: "en",
  // authorTwitterAccount: "greglobinski",

  // info (ver si esto va pa afuera)
  infoTitle: 'Keryc Díaz',
  infoTitleNote: 'personal blog',
  infoSocialLinks: [
    { icon: GitHubIcon, url: 'https://github.com/kerycdiaz' },
    { icon: LinkedInIcon, url: 'https://linkedin.com/in/kerycdiaz' },
    { icon: InstagramIcon, url: 'https://instagram.com/kerycdiaz' },
    { icon: FacebookIcon, url: 'https://facebook.com/kerycdiaz' },
  ],
  manifest: {
    name: `Keryc Diaz`,
    short_name: `Keryc D'`,
    start_url: `/`,
    background_color: `#ffffff`,
    theme_color: `#663399`,
    display: `minimal-ui`,
    icon: `content/assets/logo.png`,
  },
  // // contact
  // contactEmail: "john@doe.com",
}
module.exports = config
