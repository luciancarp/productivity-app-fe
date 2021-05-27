import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { connect, ConnectedProps } from 'react-redux'
import { RootStore } from '../store'
import { getProjects, createProject } from '../actions/project'

import Input from './Input'
import Button from './Button'

import { spaces } from '../style/global'

const mapStateToProps = (state: RootStore) => ({
  project: state.project,
})
const connector = connect(mapStateToProps, { getProjects, createProject })
type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & {}

const Projects = ({
  getProjects,
  createProject,
  project: { projects },
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
      {projects.map((project) => (
        <ProjectTitle>{project.title}</ProjectTitle>
      ))}
    </Container>
  )
}

const Container = styled.div`
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

const ProjectTitle = styled.h3``

export default connector(Projects)
