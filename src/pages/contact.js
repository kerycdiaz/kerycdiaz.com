import React from 'react'

import ActionsBar from '@components/ActionsBar'
import Form from '@components/ContactForm'
import Content from '@components/Content'
import InfoBar from '@components/InfoBar'
import InfoBox from '@components/InfoBox'
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
          No dude en ponerse en contacto conmigo por email:{' '}
          {config.contactEmail} o utilice el formulario a continuación.
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
