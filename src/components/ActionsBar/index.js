import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import FullscreenIcon from '@material-ui/icons/Fullscreen'
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit'
import HomeIcon from '@material-ui/icons/Home'
// import SearchIcon from '@material-ui/icons/Search'
import { Link } from 'gatsby'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import screenfull from 'screenfull'

import {
  setNavigatorPosition,
  setNavigatorShape,
  setScrollToTop,
  setFontSizeIncrease,
} from '@store/actions'

import CategoryFilter from './CategoryFilter'
import FontSetter from './FontSetter'
import * as S from './styles'

const ActionsBar = ({
  navigatorPosition,
  setNavigatorPosition,
  setNavigatorShape,
  setScrollToTop,
  setFontSizeIncrease,
}) => {
  const [fullscreen, setFullscreen] = useState(false)

  const fullscreenOnClick = () => {
    if (screenfull.isEnabled) {
      screenfull.toggle()
      setFullscreen(!screenfull.isFullscreen)
    }
  }

  const arrowUpOnClick = () => {
    setScrollToTop(true)
  }

  const fontSetterOnClick = (val) => {
    setFontSizeIncrease(val)
  }

  const homeOnClick = () => {
    setNavigatorPosition('is-featured')
    setNavigatorShape('closed')
  }

  return (
    <S.ActionsBar>
      <S.ActionsGroup>
        <Link to="/blog">
          <S.ActionButtom
            aria-label="Back to list"
            onClick={homeOnClick}
            title="Back to the list"
          >
            <HomeIcon />
          </S.ActionButtom>
        </Link>
        {navigatorPosition !== 'is-aside' && <CategoryFilter />}
        {/*<S.ActionButtom
          aria-label="Search"
          //onClick={this.searchOnClick}
          component={Link}
          data-shape="closed"
          to="/search/"
          title="Search"
        >
          <SearchIcon />
        </S.ActionButtom>*/}
      </S.ActionsGroup>
      <S.ActionsGroup>
        {navigatorPosition === 'is-aside' && (
          <FontSetter increaseFont={fontSetterOnClick} />
        )}
        {screenfull.isEnabled && fullscreen && (
          <FullscreenExitIcon onClick={fullscreenOnClick} />
        )}
        {screenfull.isEnabled && !fullscreen && (
          <FullscreenIcon onClick={fullscreenOnClick} />
        )}
        <S.ActionButtom
          aria-label="Back to top"
          onClick={arrowUpOnClick}
          title="Scroll to top"
        >
          <ArrowUpwardIcon />
        </S.ActionButtom>
      </S.ActionsGroup>
    </S.ActionsBar>
  )
}

const mapStateToProps = (state) => {
  return {
    navigatorPosition: state.reducers.navigatorPosition,
    categoryFilter: state.reducers.categoryFilter,
  }
}

const mapDispatchToProps = {
  setNavigatorPosition,
  setNavigatorShape,
  setScrollToTop,
  setFontSizeIncrease,
}

export default connect(mapStateToProps, mapDispatchToProps)(ActionsBar)
