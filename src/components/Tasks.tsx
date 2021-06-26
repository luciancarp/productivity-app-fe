import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { connect, ConnectedProps } from 'react-redux'
import { RootStore } from '../store'
import { getTasks } from '../actions/task'

import Button from './Button'
import NewTaskForm from './NewTaskForm'
import Task from './Task'

import { spaces } from '../style/global'

const mapStateToProps = (state: RootStore) => ({
  task: state.task,
})
const connector = connect(mapStateToProps, {
  getTasks,
})
type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & { projectId: string }

const Tasks = ({ getTasks, projectId, task: { tasks, loading } }: Props) => {
  useEffect(() => {
    getTasks(projectId)
  }, [getTasks, projectId])

  const [newTaskMode, setNewTaskMode] = useState(false)

  const changeNewTaskMode = (value: boolean) => {
    setNewTaskMode(value)
  }

  const TasksHeader = () => (
    <TasksHeaderContainer>
      <HeaderTitle>Tasks</HeaderTitle>
      <Button
        text='➕'
        onClick={() => {
          setNewTaskMode(true)
        }}
      />
    </TasksHeaderContainer>
  )

  return (
    <Container>
      {!newTaskMode ? (
        <TasksHeader />
      ) : (
        <NewTaskForm changeNewTaskMode={changeNewTaskMode} />
      )}
      {tasks.map((task) => (
        <Task id={task.id} title={task.title} time={task.time} />
      ))}
    </Container>
  )
}

const Container = styled.header`
  grid-area: 'header';

  width: 100%;
`

const HeaderTitle = styled.h1`
  margin: 0;
`

const TasksHeaderContainer = styled.div`
  margin: 0 0 ${spaces.regular} 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export default connector(Tasks)
