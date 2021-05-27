import { Link as RouterLink, LinkProps } from 'react-router-dom'

import styled from 'styled-components'
import { itemStyle, pressedItemStyle } from '../style/componentStyles'
import { spaces } from '../style/global'

type Props = LinkProps & {
  text: string
  pressed?: boolean
  width?: string
  to: string
}

const Link = ({ text, pressed = false, width, to }: Props) => {
  return (
    <LinkContainer to={to} width={width}>
      <Text>{text}</Text>
    </LinkContainer>
  )
}

type LinkContainerType = {
  width?: string
}

const LinkContainer = styled(RouterLink)<LinkContainerType>`
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

export default Link
