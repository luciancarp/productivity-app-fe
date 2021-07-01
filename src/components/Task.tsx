import styled from 'styled-components'

import { connect, ConnectedProps } from 'react-redux'
import { RootStore } from '../store'
import { deleteTask, selectCurrentTask } from '../actions/task'

import { spaces } from '../style/global'

import Button from './Button'

const mapStateToProps = (state: RootStore) => ({
  task: state.task,
})
const connector = connect(mapStateToProps, { deleteTask, selectCurrentTask })
type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & {
  id: string
  title: string
  time: string
  projectId: string
}

const Task = ({
  task,
  id,
  title,
  time,
  projectId,
  deleteTask,
  selectCurrentTask,
}: Props) => {
  return (
    <Container>
      <TaskTitle>{title}</TaskTitle>
      <ButtonsContainer>
        <Button text='🗑️' onClick={() => deleteTask(id)} />
        <Button
          text={`${time} ▶`}
          onClick={() => selectCurrentTask(id, projectId)}
        />
      </ButtonsContainer>
    </Container>
  )
}

const Container = styled.div`
  padding: ${spaces.tiny} ${spaces.narrow} ${spaces.tiny} ${spaces.narrow};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  button {
    margin: 0 ${spaces.narrow} 0 0;
  }

  button:last-child {
    margin: 0;
  }
`

const TaskTitle = styled.h4`
  margin: 0;
`

export default connector(Task)
