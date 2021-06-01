import ListItem from '@material-ui/core/ListItem'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import React, { useState } from 'react'
import { connect } from 'react-redux'

import { setNavigatorPosition, setNavigatorShape } from '@store/actions'

import * as S from './styles'

const TopMenu = ({ setNavigatorPosition, setNavigatorShape }) => {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const linkOnClick = (link) => {
    setNavigatorPosition(link)
    setNavigatorShape('closed')
  }

  const items = [
    { to: '/blog', title: 'Blog', link: 'is-feature' },
    { to: '/sobre-mi', title: 'Sobre Mí', link: 'is-aside' },
    { to: '/contact/', title: 'Contacto', link: 'is-aside' },
  ]
  const path = typeof window !== `undefined` ? window.location.pathname : '/'
  return (
    <S.TopMenu>
      <S.MenuWeb path={path}>
        {items.map((item) => {
          return (
            <S.MenuWebLink key={item.to} to={item.to}>
              <ListItem
                onClick={() => {
                  linkOnClick(item.link)
                  handleClose()
                }}
              >
                {item.title}
              </ListItem>
            </S.MenuWebLink>
          )
        })}
      </S.MenuWeb>
      <S.MenuMobile path={path}>
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
                    linkOnClick(item.link)
                    handleClose()
                  }}
                >
                  {item.title}
                </MenuItem>
              </S.MenuItemLink>
            )
          })}
        </Menu>
      </S.MenuMobile>
    </S.TopMenu>
  )
}

const mapDispatchToProps = {
  setNavigatorPosition,
  setNavigatorShape,
}

export default connect(null, mapDispatchToProps)(TopMenu)
