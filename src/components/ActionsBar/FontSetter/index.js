import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { withStyles } from '@material-ui/core/styles'
import FormatSizeIcon from '@material-ui/icons/FormatSize'
import React, { useState } from 'react'
import { connect } from 'react-redux'

import { setFontSizeIncrease } from '@store/actions'

const styles = (theme) => ({
  fontSizeSetter: {
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {},
  },
  open: {
    color: theme.bars.colors.icon,
  },
  popperClose: {
    pointerEvents: 'none',
  },
})

const FontSetter = ({ classes, setFontSizeIncrease }) => {
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
    <nav className={classes.fontSizeSetter}>
      <IconButton
        aria-label="Increase font size"
        aria-owns={anchorEl ? 'long-menu' : null}
        aria-haspopup="true"
        onClick={handleClick}
        title="Change font size"
        className={classes.open}
      >
        <FormatSizeIcon />
      </IconButton>

      <Menu
        id="simple-menu"
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

export default connect(null, mapDispatchToProps)(withStyles(styles)(FontSetter))
