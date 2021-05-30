import React from 'react'

import ActionsBar from '@components/ActionsBar'
import Form from '@components/ContactForm'
import Content from '@components/Content'
import InfoBar from '@components/InfoBar'
import InfoBox from '@components/InfoBox'
import SocialIcons from '@components/InfoBox/SocialIcons'
import Layout from '@components/Layout'
import Navigator from '@components/Navigator'
import PageHeader from '@components/PageHeader'
import Seo from '@components/Seo'

import config from '@data/SiteConfig'

import usePostsList from '@hooks/posts'

import * as Gs from '../templates/styles'

const Contact = () => {
  return (
    <Layout>
      <Seo />
      <Gs.TemplateWrapper>
        <PageHeader title="Formulario de Contacto" />
        <Content>
          <h3>
            ¿Estás pensando en hablar conmigo? Estupendo. Este es lugar perfecto
          </h3>
          Puedes escribirme a través de mi formulario de contacto, enviarme un
          email a <strong>hola@kerycdiaz.com</strong> o seguirme en mis redes
          sociales. Será un placer para mi conversar contigo.
          <SocialIcons />
        </Content>
        <Form />
      </Gs.TemplateWrapper>
      <Navigator posts={usePostsList()} />
      <ActionsBar />
      <InfoBar />
      <InfoBox />
    </Layout>
  )
}

export default Contact
