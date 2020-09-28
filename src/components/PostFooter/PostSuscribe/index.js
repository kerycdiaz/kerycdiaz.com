import Button from '@material-ui/core/Button'
import Collapse from '@material-ui/core/Collapse'
import InputBase from '@material-ui/core/InputBase'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import Alert from '@material-ui/lab/Alert'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import React, { useState } from 'react'

const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin: '2em 0 0',
    textAlign: 'center',
    '& p': {
      margin: '1em 0 !important',
    },
  },
  paper: {
    padding: '2px 4px',
    display: 'grid',
    width: '100%',
    margin: '0 auto',
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
        display: 'flex',
        width: '400px',
    }
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  alert: {
    width: '100%',
    margin: '0 auto',
    marginTop: '1em',
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
        display: 'flex',
        width: '400px',
    }
  },
}))

const PostSuscribe = (props) => {
  const [email, setEmail] = useState('')
  const [result, setResult] = React.useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    const data = await addToMailchimp(email)
    setResult(data.result)
  }

  const handleEmailChange = (event) => {
    setEmail(event.currentTarget.value)
  }

  const classes = useStyles(props)
  return (
    <div className={classes.wrapper}>
      <p>Recibe nuevo contenido en tu bandeja de correo electrónico.</p>
      <Paper component="form" className={classes.paper}>
        <InputBase
          className={classes.input}
          placeholder="Tu correo electrónico"
          onChange={handleEmailChange}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={(event) => handleSubmit(event)}
        >
          Suscribir
        </Button>
      </Paper>
      <Collapse in={result !== ''} className={classes.alert}>
        <Alert severity={result}>
          {result === 'success' ? (
            <span>Te has suscrito exitosamente.</span>
          ) : (
            <span>Por favor ingresa email correcto.</span>
          )}
        </Alert>
      </Collapse>
    </div>
  )
}

export default PostSuscribe
