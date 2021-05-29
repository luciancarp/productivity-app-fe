import styled from 'styled-components'

// import ThemeSwitcher from './ThemeSwitcher'
import Aside from './Aside'
import Projects from './Projects'

type Props = { children?: React.ReactNode }

const Layout = ({ children }: Props) => {
  return (
    <Container>
      {/* <ThemeSwitcher /> */}
      <GridContainer>
        <Projects />
        <Content>{children}</Content>
        <Aside />
      </GridContainer>
    </Container>
  )
}

const Container = styled.div`
  /* display: flex;
  flex-direction: row;
  justify-content: center; */
`

const Content = styled.main`
  grid-area: 'main';

  /* margin: 0 auto; */
  /* max-width: 700px; */
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 5fr 1fr;
  /* grid-template-rows: 50px 1fr 50px; */
  grid-template-areas: 'header main aside';
  height: 100vh;

  width: 100%;
`

export default Layout
