import React from 'react'
import LazyLoad from 'react-lazyload'
import { connect } from 'react-redux'

import { setNavigatorPosition, setNavigatorShape } from '@store/actions'

import * as S from './styles'

const ListItem = ({
  post,
  categoryFilter,
  setNavigatorPosition,
  setNavigatorShape,
}) => {
  let hidden = false

  if (categoryFilter !== 'all posts') {
    const category = post.node.frontmatter.category
    if (category !== categoryFilter) {
      hidden = true
    }
  }

  // analizar:
  const linkOnClick = () => {
    setNavigatorPosition('is-aside')
    setNavigatorShape('closed')
  }

  return (
    <S.ListItem
      style={{ display: `${hidden ? 'none' : 'block'}` }}
      key={post.node.fields.slug}
    >
      <S.ListLink
        activeClassName="active"
        to={post.node.fields.slug}
        onClick={linkOnClick}
      >
        {post.node.frontmatter.imagen &&
          post.node.frontmatter.imagen.childImageSharp && (
            <S.ListImage>
              <LazyLoad
                height={60}
                overflow={true}
                throttle={300}
                once={true}
                offset={100}
              >
                <picture>
                  <source
                    type="image/webp"
                    srcSet={
                      post.node.frontmatter.imagen.childImageSharp.resolutions
                        .srcSetWebp
                    }
                  />
                  <source
                    srcSet={
                      post.node.frontmatter.imagen.childImageSharp.resolutions
                        .srcSet
                    }
                  />
                  <img
                    src={
                      post.node.frontmatter.imagen.childImageSharp.resolutions
                        .src
                    }
                    alt=""
                  />
                </picture>
              </LazyLoad>
            </S.ListImage>
          )}

        <S.ListText>
          <h1>{post.node.frontmatter.title}</h1>
          <h2>{post.node.frontmatter.description || post.node.excerpt}</h2>
        </S.ListText>
      </S.ListLink>
    </S.ListItem>
  )
}

const mapStateToProps = (state) => {
  return {
    categoryFilter: state.reducers.categoryFilter,
  }
}

const mapDispatchToProps = {
  setNavigatorPosition,
  setNavigatorShape,
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItem)
