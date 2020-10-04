import { withStyles } from '@material-ui/core/styles'
import React from 'react'

import Commento from '@components/Commento'

const styles = () => ({
  postComments: {
    margin: '3em 0 0',
    padding: '3em 0 0',
    borderTop: '1px solid #ddd',
  },
})

const PostComments = ({ classes, id }) => {
  return (
    <div className={classes.postComments}>
      <Commento id={id} />
    </div>
  )
}
export default withStyles(styles)(PostComments)
