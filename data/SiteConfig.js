// const colors = require('../src/styles/colors');
const LinkedInIcon = require('@material-ui/icons/LinkedIn').default
const InstagramIcon = require('@material-ui/icons/Instagram').default
const FacebookIcon = require('@material-ui/icons/Facebook').default
const TwitterIcon = require('@material-ui/icons/Twitter').default

const config = {
  infoTitle: 'Hora de construir!',
  infoTitleNote: 'Eres el arquitecto de tu vida!',
  infoSocialLinks: [
    { icon: InstagramIcon, url: 'https://instagram.com/kerycdiaz' },
    { icon: LinkedInIcon, url: 'https://linkedin.com/in/kerycdiaz' },
    { icon: FacebookIcon, url: 'https://facebook.com/kerycdiaz' },
    { icon: TwitterIcon, url: 'https://twitter.com/kerycdiaz' },
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
  contactEmail: 'info@kerycdiaz.com',
}
module.exports = config
