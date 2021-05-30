import React from 'react'
import { connect } from 'react-redux'

import ActionsBar from '@components/ActionsBar'
import InfoBar from '@components/InfoBar'
import InfoBox from '@components/InfoBox'
import Layout from '@components/Layout'
import Navigator from '@components/Navigator'
import Seo from '@components/Seo'

import usePostsList from '@hooks/posts'

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
      <Seo />
      <Navigator posts={usePostsList()} />
      <ActionsBar />
      <InfoBar />
      <InfoBox />
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
