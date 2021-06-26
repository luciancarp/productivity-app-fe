import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import { connect, ConnectedProps } from 'react-redux'
import { RootStore } from '../store'
import { getTasks } from '../actions/task'

import { spaces } from '../style/global'

const mapStateToProps = (state: RootStore) => ({
  task: state.task,
})
const connector = connect(mapStateToProps, {
  getTasks,
})
type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & {projectId: string}

const Tasks = ({
  getTasks,
projectId,
  task: { tasks, loading },
}: Props) => {
  useEffect(() => {
    getTasks(projectId)
  }, [getTasks, projectId])

  return (
    <Container>
        {JSON.stringify(tasks)}
    </Container>
  )
}

const Container = styled.header`
  grid-area: 'header';

  width: 100%;
`

export default connector(Tasks)
