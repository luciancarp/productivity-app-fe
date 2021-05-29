import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import { connect, ConnectedProps } from 'react-redux'
import { RootStore } from '../store'
import { getProjects, createProject, selectProject } from '../actions/project'

import Button from './Button'
import NewProjectForm from './NewProjectForm'

import { spaces } from '../style/global'

const mapStateToProps = (state: RootStore) => ({
  project: state.project,
})
const connector = connect(mapStateToProps, {
  getProjects,
  createProject,
  selectProject,
})
type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & {}

const Projects = ({
  getProjects,
  createProject,
  selectProject,
  project: { projects, selectedProject },
}: Props) => {
  useEffect(() => {
    getProjects()
  }, [getProjects])

  const [newProjectMode, setNewProjectMode] = useState(false)

  const changeNewProjectMode = (value: boolean) => {
    setNewProjectMode(value)
  }

  const ProjectsHeader = () => (
    <ProjectsHeaderContainer>
      <HeaderTitle>Projects</HeaderTitle>
      <Button
        text='➕'
        onClick={() => {
          setNewProjectMode(true)
        }}
      />
    </ProjectsHeaderContainer>
  )

  const history = useHistory()

  const handleSelectProject = (id: string) => {
    selectProject(id)
    history.push(`/project/${id}`)
  }

  return (
    <Container>
      {!newProjectMode ? (
        <ProjectsHeader />
      ) : (
        <NewProjectForm changeNewProjectMode={changeNewProjectMode} />
      )}

      <ListContainer>
        {projects.map((project) => (
          <Project>
            <Button
              text={project.title}
              onClick={() => handleSelectProject(project.id)}
              pressed={project.id === selectedProject}
              width='100%'
            />
          </Project>
        ))}
      </ListContainer>
    </Container>
  )
}

const Container = styled.header`
  grid-area: 'header';

  width: 100%;
`

const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  > :last-child {
    margin: 0;
  }
`

const Project = styled.li`
  width: 100%;
  margin: 0 0 ${spaces.regular} 0;
`

const HeaderTitle = styled.h1`
  margin: 0;
`

const ProjectsHeaderContainer = styled.div`
  margin: 0 0 ${spaces.regular} 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export default connector(Projects)
