import { useEffect } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import styled from 'styled-components'

import { connect, ConnectedProps } from 'react-redux'
import { RootStore } from '../store'
import { deleteProject, getProject } from '../actions/project'

import { spaces } from '../style/global'
import { itemStyle } from '../style/componentStyles'

import Button from './Button'
import Loading from './Loading'
import Tasks from './Tasks'

interface IParams {
  id: string
}

interface IMatch extends RouteComponentProps<IParams> {}

const mapStateToProps = (state: RootStore) => ({
  project: state.project,
})
const connector = connect(mapStateToProps, { getProject, deleteProject })
type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & {}

const Project = ({
  project,
  match,
  getProject,
  deleteProject,
}: Props & IMatch) => {
  useEffect(() => {
    getProject(match.params.id)
  }, [getProject, match.params.id])

  return (
    <Container>
      {project.loading ? (
        <Loading />
      ) : (<>
        <ProjectHeader>
          <ProjectTitle>{project.project?.title}</ProjectTitle>
          <Button text='🗑️' onClick={() => deleteProject(match.params.id)} />
        </ProjectHeader>
        <Tasks projectId = {project.project?.id || ''}/>
        </>
      )}
    </Container>
  )
}

const Container = styled.div`
  height: 400px;

  ${itemStyle}

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`

const ProjectTitle = styled.h2``

const ProjectHeader = styled.div`
  width: 100%;
  margin: 0 0 ${spaces.regular} 0;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export default connector(Project)
