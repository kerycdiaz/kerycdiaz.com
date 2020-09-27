import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import FilterListIcon from '@material-ui/icons/FilterList'
import React, { useState } from 'react'
import { connect } from 'react-redux'

import usePostsList from '@hooks/posts'

import { setCategoryFilter } from '@store/actions'

import * as GS from '../styles'

const CategoryFilter = ({ setCategoryFilter }) => {
  const posts = usePostsList()

  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const categories = [
    { name: 'all posts', key: 'all' },
    ...posts
      .reduce((list, edge, i) => {
        const category = edge.node.frontmatter.category
        if (category && !~list.indexOf(category)) {
          return list.concat(edge.node.frontmatter.category)
        } else {
          return list
        }
      }, [])
      .map((category) => {
        return { name: category, key: category }
      }),
  ]

  const handleFiltering = (e) => {
    const category = e.target.innerText.trim()
    setCategoryFilter(category)
    handleClose()
  }

  return (
    <nav>
      <GS.ActionButtom
        aria-label="Filter by category"
        aria-haspopup="true"
        onClick={handleClick}
        title="Filter the list by category"
      >
        <FilterListIcon />
      </GS.ActionButtom>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {categories.map((category) => {
          return (
            <MenuItem key={category.key} onClick={handleFiltering}>
              {category.name}
            </MenuItem>
          )
        })}
      </Menu>
    </nav>
  )
}

const mapDispatchToProps = {
  setCategoryFilter,
}

export default connect(null, mapDispatchToProps)(CategoryFilter)
