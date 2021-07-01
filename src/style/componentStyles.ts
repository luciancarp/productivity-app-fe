import styled, { css } from 'styled-components'
import { spaces } from './global'

export const itemStyle = css`
  padding: ${spaces.regular};

  background-color: ${(props) => props.theme.item};
  border-radius: 30px;
  border: 1px solid ${(props) => props.theme.background};
  box-shadow: 12px 12px 20px 3px ${(props) => props.theme.secondShadow},
    12px 12px 40px 3px ${(props) => props.theme.firstShadow} inset,
    -8px -8px 16px 3px ${(props) => props.theme.firstShadow},
    -8px -8px 30px 3px ${(props) => props.theme.secondShadow} inset;

  /* box-shadow: 3px 3px 4px 0 ${(props) =>
    `${props.theme.secondShadow} inset`}; */
`

export const itemStyleSmall = css`
  padding: ${spaces.tiny};

  background-color: ${(props) => props.theme.item};
  border-radius: 30px;
  border: 1px solid ${(props) => props.theme.background};
  box-shadow: 5px 5px 15px 2px ${(props) => props.theme.secondShadow},
    5px 5px 30px 2px ${(props) => props.theme.firstShadow} inset,
    -6px -6px 10px 2px ${(props) => props.theme.firstShadow},
    -6px -6px 20px 2px ${(props) => props.theme.secondShadow} inset;
`

export const ItemContainer = styled.div`
  ${itemStyle}
`

export const pressedItemStyle = css`
  padding: ${spaces.regular};

  border-radius: 30px;
  border: 1px solid ${(props) => props.theme.background};
  box-shadow: 6px 6px 20px 0 ${(props) => `${props.theme.secondShadow} inset`},
    -8px -8px 12px 0 ${(props) => `${props.theme.firstShadow} inset`};
`

export const pressedItemStyleSmall = css`
  padding: ${spaces.tiny};

  border-radius: 30px;
  border: 1px solid ${(props) => props.theme.background};
  box-shadow: 6px 6px 20px 0 ${(props) => `${props.theme.secondShadow} inset`},
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
