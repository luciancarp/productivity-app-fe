import styled, { css } from 'styled-components'
import { spaces } from './global'

export const itemStyle = css`
  padding: ${spaces.regular};

  background-color: ${(props) => props.theme.item};
  border-radius: 30px;
  box-shadow: 12px 12px 20px 6px ${(props) => props.theme.secondShadow},
    -8px -8px 16px 3px ${(props) => props.theme.firstShadow};
`

export const ItemContainer = styled.div`
  ${itemStyle}
`

export const pressedItemStyle = css`
  padding: ${spaces.regular};

  border-radius: 30px;
  box-shadow: 12px 12px 16px 0 ${(props) => `${props.theme.secondShadow} inset`},
    -8px -8px 12px 0 ${(props) => `${props.theme.firstShadow} inset`};
`

export const PressedItemContainer = styled.div`
  ${pressedItemStyle}
`

export const inputStyle = css`
  ${pressedItemStyle}
`

export const InputContainer = styled.input`
  ${inputStyle}
`
