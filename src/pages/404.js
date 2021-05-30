import React from 'react'

import Layout from '@components/Layout'
import Page404 from '@components/Page404'
import Seo from '@components/Seo'

const NotFoundPage = () => {
  return (
    <Layout>
      <Seo title="404: Not Found" />
      <Page404 />
    </Layout>
  )
}

export default NotFoundPage
