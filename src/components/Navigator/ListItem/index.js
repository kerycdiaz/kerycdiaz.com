import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import LazyLoad from 'react-lazyload'
import { connect } from 'react-redux'

import {
  setNavigatorPosition,
  setNavigatorShape,
  setCategoryFilter,
} from '@store/actions'

import * as S from './styles'

const ListItem = ({
  post,
  setNavigatorPosition,
  setNavigatorShape,
  setCategoryFilter,
}) => {
  const linkOnClick = () => {
    setNavigatorPosition('is-aside')
    setNavigatorShape('closed')
    setCategoryFilter('all posts')
  }

  return (
    <S.ListItem key={post.node.fields.slug}>
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
                <GatsbyImage
                  image={
                    post.node.frontmatter.imagen.childImageSharp.gatsbyImageData
                  }
                  alt={post.node.frontmatter.title}
                />
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

const mapDispatchToProps = {
  setNavigatorPosition,
  setNavigatorShape,
  setCategoryFilter,
}

export default connect(null, mapDispatchToProps)(ListItem)
