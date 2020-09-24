import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import React, { useState } from 'react'
import { connect } from 'react-redux'

import usePagesList from '@hooks/pages'

import { setNavigatorPosition, setNavigatorShape } from '@store/actions'

import * as S from './styles'

const TopMenu = ({ setNavigatorPosition, setNavigatorShape }) => {
  const pages = usePagesList()

  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const linkOnClick = () => {
    setNavigatorPosition('is-aside')
    setNavigatorShape('closed')
  }

  const items = [
    { to: '/', title: 'Inicio' },
    ...pages.map((page) => {
      const { fields, frontmatter } = page.node
      const title = frontmatter.menuTitle
        ? frontmatter.menuTitle
        : frontmatter.title
      return { to: fields.slug, title: title }
    }),
    { to: '/contact/', title: 'Contacto' },
  ]

  return (
    <S.TopMenu>
      <S.MenuIconColor
        aria-label="More"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </S.MenuIconColor>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {items.map((item) => {
          return (
            <S.MenuItemLink key={item.to} to={item.to}>
              <MenuItem
                onClick={() => {
                  linkOnClick()
                  handleClose()
                }}
              >
                {item.title}
              </MenuItem>
            </S.MenuItemLink>
          )
        })}
      </Menu>
    </S.TopMenu>
  )
}

const mapDispatchToProps = {
  setNavigatorPosition,
  setNavigatorShape,
}

export default connect(null, mapDispatchToProps)(TopMenu)
