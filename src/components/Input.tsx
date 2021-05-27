import styled from 'styled-components'
import { pressedItemStyle } from '../style/componentStyles'

type Props = {
  label: string
  type?: string
  name: string
  onChange: (e: React.FormEvent<HTMLInputElement>) => void
}

const Input = ({ label, type, name, onChange }: Props) => {
  return (
    <Container>
      <label>
        {label}:
        <input type={type} name={name} onChange={onChange} />
      </label>
    </Container>
  )
}

const Container = styled.div`
  ${pressedItemStyle}

  width: 100%;
`

export default Input
