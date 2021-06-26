import { useEffect } from 'react'
import styled from 'styled-components'

import { connect, ConnectedProps } from 'react-redux'
import { RootStore } from '../store'
import { deleteTask } from '../actions/task'

import { spaces } from '../style/global'
import { itemStyle } from '../style/componentStyles'

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
      <h3>{time}</h3>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export default connector(Task)
