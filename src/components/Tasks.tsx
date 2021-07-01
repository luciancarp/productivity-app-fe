import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { connect, ConnectedProps } from 'react-redux'
import { RootStore } from '../store'
import { getTasks } from '../actions/task'

import Button from './Button'
import NewTaskForm from './NewTaskForm'
import Task from './Task'

import { spaces } from '../style/global'
import { pressedItemStyle } from '../style/componentStyles'

const mapStateToProps = (state: RootStore) => ({
  task: state.task,
  project: state.project,
})
const connector = connect(mapStateToProps, {
  getTasks,
})
type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & {}

const Tasks = ({
  getTasks,
  task: { tasks, loading },
  project: { selectedProject },
}: Props) => {
  useEffect(() => {
    getTasks(selectedProject || '')
  }, [getTasks, selectedProject])

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
      <TaskListContainer>
        <TasksList>
          {tasks.map((task) => (
            <Task
              id={task.id}
              title={task.title}
              time={task.time}
              projectId={task.project}
            />
          ))}
        </TasksList>
      </TaskListContainer>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

const TaskListContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

const TasksList = styled.div`
  overflow: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  /* firefox */
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }

  ${pressedItemStyle}
`

const HeaderTitle = styled.h2`
  margin: 0;
`

const TasksHeaderContainer = styled.div`
  width: 100%;

  margin: 0 0 ${spaces.regular} 0;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export default connector(Tasks)
