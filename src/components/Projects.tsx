import styled from 'styled-components'

import { connect, ConnectedProps } from 'react-redux'
import { RootStore } from '../store'
import { getProjects } from '../actions/project'

const mapStateToProps = (state: RootStore) => ({
  project: state.project,
})
const connector = connect(mapStateToProps, { getProjects })
type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & {}

const Projects = ({ getProjects, project }: Props) => (
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

export default connector(Projects)
