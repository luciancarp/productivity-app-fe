import styled from 'styled-components'
import { pressedItemStyle } from '../style/componentStyles'
import { spaces } from '../style/global'

type Props = {
  label?: string
  type?: string
  name: string
  onChange: (e: React.FormEvent<HTMLInputElement>) => void
}

const Input = ({ label, type, name, onChange }: Props) => {
  return (
    <Container>
      <label>
        {label ? `${label}: ` : null}
        <input type={type} name={name} onChange={onChange} />
      </label>
    </Container>
  )
}

const Container = styled.div`
  ${pressedItemStyle}

  padding: ${spaces.narrow};

  width: 100%;
`

export default Input
