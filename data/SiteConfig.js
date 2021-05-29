// const colors = require('../src/styles/colors');
const GitHubIcon = require('@material-ui/icons/GitHub').default
const LinkedInIcon = require('@material-ui/icons/LinkedIn').default
const InstagramIcon = require('@material-ui/icons/Instagram').default
const FacebookIcon = require('@material-ui/icons/Facebook').default

const config = {
  infoTitle: 'Aprendamos de arquitectura',
  infoTitleNote: 'Tú eres el arquitecto de tu propia vida',
  infoSocialLinks: [
    { icon: GitHubIcon, url: 'https://github.com/kerycdiaz' },
    { icon: LinkedInIcon, url: 'https://linkedin.com/in/kerycdiaz' },
    { icon: InstagramIcon, url: 'https://instagram.com/kerycdiaz' },
    { icon: FacebookIcon, url: 'https://facebook.com/kerycdiaz' },
  ],
  siteMetadata: {
    title: `Keryc Díaz - Arquitecto de software y vida!`,
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
