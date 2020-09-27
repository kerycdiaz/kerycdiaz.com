import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import FormatSizeIcon from '@material-ui/icons/FormatSize'
import React, { useState } from 'react'
import { connect } from 'react-redux'

import { setFontSizeIncrease } from '@store/actions'

import * as GS from '../styles'

const FontSetter = ({ setFontSizeIncrease }) => {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleSetting = (e) => {
    const val = e.target.innerText.replace('%', '')
    const factor = +val / 100
    setFontSizeIncrease(factor)
    handleClose()
  }
  return (
    <nav>
      <GS.ActionButtom
        aria-label="Increase font size"
        aria-owns={anchorEl ? 'long-anchorEl' : null}
        aria-haspopup="true"
        onClick={handleClick}
        title="Change font size"
      >
        <FormatSizeIcon />
      </GS.ActionButtom>

      <Menu
        id="simple-anchorEl"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleSetting}>150%</MenuItem>
        <MenuItem onClick={handleSetting}>125%</MenuItem>
        <MenuItem onClick={handleSetting}>100%</MenuItem>
        <MenuItem onClick={handleSetting}>75%</MenuItem>
      </Menu>
    </nav>
  )
}

const mapDispatchToProps = {
  setFontSizeIncrease,
}

export default connect(null, mapDispatchToProps)(FontSetter)
