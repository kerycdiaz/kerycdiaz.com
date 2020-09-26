import React from 'react'
import { connect } from 'react-redux'

import Layout from '@components/Layout'
import SEO from '@components/Seo'

import { setNavigatorPosition } from '@store/actions'

const useSingleton = (initializer) => {
  React.useState(initializer)
}

const Index = ({ navigatorPosition, setNavigatorPosition }) => {
  useSingleton(() => {
    if (navigatorPosition !== 'is-featured') {
      setNavigatorPosition('is-featured')
    }
  })

  return (
    <Layout>
      <SEO title="All posts" />
    </Layout>
  )
}

const mapStateToProps = (state) => {
  return {
    navigatorPosition: state.reducers.navigatorPosition,
  }
}

const mapDispatchToProps = {
  setNavigatorPosition,
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
