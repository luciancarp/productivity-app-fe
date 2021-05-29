import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { connect, ConnectedProps } from 'react-redux'
import { RootStore } from '../store'
import { getProjects, createProject } from '../actions/project'

import { spaces } from '../style/global'

const mapStateToProps = (state: RootStore) => ({
  project: state.project,
})
const connector = connect(mapStateToProps, {})
type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & {}

const Project = ({ project }: Props) => {
  return (
    <Container>
      <ProjectTitle>Project Title</ProjectTitle>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ProjectTitle = styled.h3``

export default connector(Project)
