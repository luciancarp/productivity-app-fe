import { useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import styled from 'styled-components'

import { connect, ConnectedProps } from 'react-redux'
import { RootStore } from '../store'
import { getProject } from '../actions/project'

import { spaces } from '../style/global'
import { itemStyle } from '../style/componentStyles'

interface IParams {
  id: string
}

interface IMatch extends RouteComponentProps<IParams> {}

const mapStateToProps = (state: RootStore) => ({
  project: state.project,
})
const connector = connect(mapStateToProps, { getProject })
type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & {}

const Project = ({ project, match, getProject }: Props & IMatch) => {
  useEffect(() => {
    getProject(match.params.id)
  }, [getProject, match.params.id])

  return (
    <Container>
      <ProjectTitle>{project.project?.title}</ProjectTitle>
      <h3>{JSON.stringify(project.project)}</h3>
    </Container>
  )
}

const Container = styled.div`
  height: 400px;

  ${itemStyle}

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ProjectTitle = styled.h3``

export default connector(Project)
