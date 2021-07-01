import styled from 'styled-components'

import { spaces } from '../style/global'

// import ThemeSwitcher from './ThemeSwitcher'
import Aside from './Aside'
import Projects from './Projects'
import CurrentTask from './CurrentTask'

type Props = { children?: React.ReactNode }

const Layout = ({ children }: Props) => {
  return (
    <Container>
      {/* <ThemeSwitcher /> */}
      <GridContainer>
        <Projects />
        <Middle>
          <CurrentTask />
          <Content>{children}</Content>
        </Middle>
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
  height: 100%;

  /* margin: 0 auto; */
  /* max-width: 700px; */

  margin: ${spaces.regular} 0 0 0;
`

const Middle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const GridContainer = styled.div`
  height: 100vh;
  width: 100%;

  padding: ${spaces.large} ${spaces.large} ${spaces.large} ${spaces.large};

  display: grid;
  grid-template-columns: 2fr 5fr 1fr;
  /* grid-template-rows: 50px 1fr 50px; */
  grid-template-areas: 'header main aside';

  column-gap: ${spaces.large};
  row-gap: ${spaces.large};
`

export default Layout
