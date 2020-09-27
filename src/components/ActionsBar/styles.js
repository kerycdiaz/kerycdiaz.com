import IconButton from '@material-ui/core/IconButton'
import styled from 'styled-components'

export const ActionButtom = styled(IconButton)`
  ${({ theme }) => `
    && {
        color: ${theme.bars.colors.icon};
    }
  `}
`
