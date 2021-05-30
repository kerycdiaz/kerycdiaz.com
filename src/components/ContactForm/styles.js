import Button from '@material-ui/core/Button'
import styled from 'styled-components'

export const ContactForm = styled.div`
  display: 'flex';
  flex-direction: 'column';
  align-items: 'center';
`

export const Form = styled.form`
  width: '100%';
  margin-top: 24px;
`

export const SubmitButton = styled(Button)`
  && {
    margin: 15px 0px 16px;
  }
`

export const HiddenTextField = styled.div`
  display: none;
`
