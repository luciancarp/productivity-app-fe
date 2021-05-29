import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { connect, ConnectedProps } from 'react-redux'
import { RootStore } from '../store'
import { getProjects, createProject, selectProject } from '../actions/project'

import Input from './Input'
import Button from './Button'

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

  const [formData, setFormData] = useState({
    title: '',
  })

  const onChange = (e: React.FormEvent<HTMLInputElement>): void =>
    setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value })

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    createProject(formData)
  }

  return (
    <Container>
      <StyledForm noValidate onSubmit={onSubmit}>
        <Row>
          <Input label='Title' name='title' onChange={onChange} />
        </Row>

        <Row>
          <Button type='submit' text='Create Project' />
        </Row>
      </StyledForm>
      <h1>Projects</h1>
      <ListContainer>
        {projects.map((project) => (
          <Project>
            <Button
              text={project.title}
              onClick={() => selectProject(project.id)}
              pressed={project.id === selectedProject}
            />
          </Project>
        ))}
      </ListContainer>
    </Container>
  )
}

const Container = styled.header`
  grid-area: 'header';

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const StyledForm = styled.form`
  width: 100%;
`

const Row = styled.div`
  margin-bottom: ${spaces.regular};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const ListContainer = styled.ul``

const Project = styled.li``

export default connector(Projects)
