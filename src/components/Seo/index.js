/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import { useStaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { Helmet } from 'react-helmet'

const getSchemaOrgJSONLD = ({
  isPost,
  url,
  title,
  absoluteImage,
  description,
  postDate,
  extra,
}) => {
  const schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url,
      name: title,
      alternateName: extra.title,
    },
  ]

  return isPost
    ? [
        ...schemaOrgJSONLD,
        {
          '@context': extra.url,
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              item: {
                '@id': url,
                name: title,
                absoluteImage,
              },
            },
          ],
        },
        {
          '@context': extra.url,
          '@type': 'BlogPosting',
          url,
          name: title,
          alternateName: extra.title,
          headline: title,
          image: {
            '@type': 'ImageObject',
            url: absoluteImage,
          },
          description,
          author: {
            '@type': 'Person',
            name: extra.author,
          },
          publisher: {
            '@type': 'Organization',
            url: extra.url,
            logo: extra.logo,
            name: extra.author,
          },
          mainEntityOfPage: {
            '@type': 'WebSite',
            '@id': extra.url,
          },
          postDate,
        },
      ]
    : schemaOrgJSONLD
}

const SEO = ({ data }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            siteImage
            author {
              name
            }
            social {
              twitter
            }
          }
        }
      }
    `
  )
  const postTitle = ((data || {}).frontmatter || {}).title
  const postDescription = ((data || {}).frontmatter || {}).description
  const postImage = ((data || {}).frontmatter || {}).imagen
  const postDate = ((data || {}).frontmatter || {}).date
  const postSlug = ((data || {}).fields || {}).slug || ''

  const author = site.siteMetadata.author.name
  const title = postTitle
    ? `${postTitle} - ${author}`
    : `${site.siteMetadata.title}`
  const description = postDescription || site.siteMetadata.description
  const image = postImage
    ? postImage.childImageSharp.resize.src
    : site.siteMetadata.siteImage
  const absoluteImage = `${site.siteMetadata.siteUrl}/${image}`
  const url = site.siteMetadata.siteUrl + postSlug

  const isPost = postTitle ? true : false
  const alternateName = site.siteMetadata.title
  const extra = {
    author,
    title: site.siteMetadata.title,
    url: site.siteMetadata.siteUrl,
    logo: `${site.siteMetadata.siteUrl}/${site.siteMetadata.siteImage}`,
  }
  const schemaOrgJSONLD = getSchemaOrgJSONLD({
    isPost,
    url,
    title,
    alternateName,
    absoluteImage,
    description,
    postDate,
    extra,
  })

  return (
    <Helmet
      htmlAttributes={{
        lang: 'es',
        prefix: 'og: http://ogp.me/ns#',
      }}
      title={title}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          name: `og:url`,
          content: url,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:image`,
          content: absoluteImage,
        },
        {
          property: `og:type`,
          content: isPost ? `article` : `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:image`,
          content: absoluteImage,
        },
        {
          name: `twitter:site`,
          content: `@${author}`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.social?.twitter || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
      ]}
    >
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>
    </Helmet>
  )
}

SEO.propTypes = {
  data: PropTypes.object,
}

export default SEO
