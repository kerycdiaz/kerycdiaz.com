import IconButton from '@material-ui/core/IconButton'
import styled from 'styled-components'

export const ActionsBar = styled.div`
  ${({ theme }) => `
    left: 0;
    width: 100%;
    bottom: 0;
    height: ${theme.bars.sizes.actionsBar}px;
    display: flex;
    padding: 0 ${theme.base.sizes.linesMargin};
    position: absolute;
    background: ${theme.bars.colors.background};
    flex-direction: row;
    justify-content: space-between;
    ::before {
      top: 0;
      left: ${theme.base.sizes.linesMargin};
      right: ${theme.base.sizes.linesMargin};
      height: 0;
      content: "";
      position: absolute;
      border-top: 1px solid ${theme.base.colors.lines};
    }
    @media (min-width: ${theme.mediaQueryTresholds.M}px) {
      padding: 0 calc(${theme.base.sizes.linesMargin} * 1.5);
    }
    @media (min-width: ${theme.mediaQueryTresholds.L}px) {
      top: 0;
      left: auto;
      right: 0;
      width: ${theme.bars.sizes.actionsBar}px;
      height: 100%;
      padding: ${theme.base.sizes.linesMargin} 0;
      flex-direction: column;
      ::before {
        top: ${theme.base.sizes.linesMargin};
        left: 0;
        right: auto;
        width: 0;
        bottom: ${theme.base.sizes.linesMargin};
        height: auto;
        border-left: 1px solid ${theme.base.colors.lines};
      }
    }
  `}
`

export const ActionsGroup = styled.div`
  ${({ theme }) => `
    display: flex;
    align-items: center;
    flex-direction: row;
    @media (min-width: ${theme.mediaQueryTresholds.L}px) {
      flex-direction: column;
    }
  `}
`

export const ActionButtom = styled(IconButton)`
  ${({ theme }) => `
    && {
        color: ${theme.bars.colors.icon};
    }
  `}
`
