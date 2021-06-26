import styled from 'styled-components'

import { connect, ConnectedProps } from 'react-redux'
import { RootStore } from '../store'
import { deleteTask } from '../actions/task'

import { spaces } from '../style/global'

import Button from './Button'

const mapStateToProps = (state: RootStore) => ({
  task: state.task,
})
const connector = connect(mapStateToProps, { deleteTask })
type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & { id: string; title: string; time: string }

const Task = ({ task, id, title, time, deleteTask }: Props) => {
  return (
    <Container>
      <h3>{title}</h3>
      <ButtonsContainer>
        <Button text='🗑️' onClick={() => deleteTask(id)} />
        <Button text={`${time} ▶`} />
      </ButtonsContainer>
    </Container>
  )
}

const Container = styled.div`
  padding: ${spaces.narrow};

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

export default connector(Task)
