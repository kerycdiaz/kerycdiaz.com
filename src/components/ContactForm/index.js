import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import MuiAlert from '@material-ui/lab/Alert'
import React from 'react'

import * as S from './styles'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const ContactForm = () => {
  const [state, setState] = React.useState({})
  const [message, setMessage] = React.useState(null)

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': event.target.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => {
        setMessage({ type: 'success', text: 'Mensaje enviado con éxito.' })
      })
      .catch((error) => {
        setMessage({
          type: 'error',
          text: 'Ocurrio un error, intente de nuevo.',
        })
      })
  }

  return (
    <S.ContactForm>
      <S.Form
        name="Contact Form"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <S.HiddenTextField>
          <input name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
        </S.HiddenTextField>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="fname"
              name="name"
              variant="outlined"
              required
              fullWidth
              id="name"
              label="Nombre"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="email"
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Correo electrónico"
              name="email"
              autoComplete="email"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="outlined-multiline"
              label="Tu mensaje o comentario"
              name="message"
              multiline
              rows={4}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <S.SubmitButton
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          Enviar
        </S.SubmitButton>
      </S.Form>
      {message && <Alert severity={message.type}>{message.text}</Alert>}
    </S.ContactForm>
  )
}

export default ContactForm
