import styled from 'styled-components'

import ThemeSwitcher from './ThemeSwitcher'
import Aside from './Aside'

type Props = { children?: React.ReactNode }

const Layout = ({ children }: Props) => {
  return (
    <Container>
      <ThemeSwitcher />
      <Content>{children}</Content>
      <Aside />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const Content = styled.div`
  margin: 0 auto;
  max-width: 700px;
`

export default Layout
