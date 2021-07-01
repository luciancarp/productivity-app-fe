import styled from 'styled-components'

import { connect, ConnectedProps } from 'react-redux'
import { RootStore } from '../store'
// import { deleteProject, getProject } from '../actions/project'

import { spaces } from '../style/global'
import { itemStyle } from '../style/componentStyles'

import Button from './Button'

const mapStateToProps = (state: RootStore) => ({
  project: state.project,
  task: state.task,
})
const connector = connect(mapStateToProps, {})
type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & {}

const CurrentTask = ({ project, task: { currentTask } }: Props) => {
  return (
    <Container>
      <Title>
        {currentTask.title !== undefined ? (
          <>
            Task: <Bold>{currentTask.title}</Bold> | Project:{' '}
            <Bold>{project.project?.title}</Bold>
          </>
        ) : (
          'No current task'
        )}
      </Title>
      <Control>
        <Time>Time left: {currentTask.time}</Time>
        <Button text={'▶'} />
      </Control>
    </Container>
  )
}

const Container = styled.div`
  ${itemStyle}

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const Control = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`

const Title = styled.h3`
  margin: 0;
`

const Time = styled.h3`
  margin: 0 ${spaces.narrow} 0 0;
`

const Bold = styled.span`
  font-weight: bold;
`

export default connector(CurrentTask)
