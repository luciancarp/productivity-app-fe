import styled from 'styled-components'

const Projects = () => (
  <Container>
    <ProjectTitle>Project 1</ProjectTitle>
    <ProjectTitle>Project 2</ProjectTitle>
    <ProjectTitle>Project 3</ProjectTitle>
  </Container>
)

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ProjectTitle = styled.h3``

export default Projects
