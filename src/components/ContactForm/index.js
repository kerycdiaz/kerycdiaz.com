import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import React from 'react'

import * as S from './styles'

const ContactForm = () => {
  return (
    <S.ContactForm>
      <S.Form
        noValidate
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-recaptcha="true"
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="fname"
              name="firstName"
              variant="outlined"
              required
              fullWidth
              id="firstName"
              label="Nombre"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Correo electrónico"
              name="email"
              autoComplete="email"
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
            />
          </Grid>
          <Grid item xs={12}>
            <div data-netlify-recaptcha="true"></div>
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
    </S.ContactForm>
  )
}

export default ContactForm
