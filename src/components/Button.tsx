import styled from 'styled-components'
import { itemStyle, pressedItemStyle } from '../style/componentStyles'
import { spaces } from '../style/global'

type Props = {
  type?: 'button' | 'submit' | 'reset' | undefined
  text: string
  pressed?: boolean
  width?: string
}

const Button = ({ type = 'button', text, pressed = false, width }: Props) => {
  return (
    <ButtonContainer type={type} width={width}>
      <Text>{text}</Text>
    </ButtonContainer>
  )
}
type ButtonContainerType = {
  width?: string
}

const ButtonContainer = styled.button<ButtonContainerType>`
  ${itemStyle}

  cursor: pointer;
  padding: ${spaces.narrow};
  width: ${(props) => (props.width ? `${props.width}` : null)};

  &:active {
    ${pressedItemStyle}
    padding: ${spaces.narrow};
    width: ${(props) => (props.width ? `${props.width}` : null)};
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Text = styled.h3`
  margin: 0;
`

export default Button
