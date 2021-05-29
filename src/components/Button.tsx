import styled from 'styled-components'
import { itemStyle, pressedItemStyle } from '../style/componentStyles'
import { spaces } from '../style/global'

type Props = {
  type?: 'button' | 'submit' | 'reset' | undefined
  text: string
  pressed?: boolean
  width?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
}

const Button = ({
  type = 'button',
  text,
  pressed = false,
  width,
  onClick,
}: Props) => {
  return (
    <ButtonContainer
      pressed={pressed}
      type={type}
      width={width}
      onClick={onClick}
    >
      <Text>{text}</Text>
    </ButtonContainer>
  )
}
type ButtonContainerType = {
  width?: string
  pressed: boolean
}

const ButtonContainer = styled.button<ButtonContainerType>`
  cursor: pointer;

  width: ${(props) => (props.width ? `${props.width}` : null)};

  ${(props) => (props.pressed ? pressedItemStyle : itemStyle)}
  padding: ${spaces.narrow};

  &:active {
    ${pressedItemStyle}
    padding: ${spaces.narrow};
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
