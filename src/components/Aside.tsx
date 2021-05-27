import styled from 'styled-components'

import { connect, ConnectedProps } from 'react-redux'
import { RootStore } from '../store'
import { logoutUser } from '../actions/user'

import Button from './Button'
import Link from './Link'

const mapStateToProps = (state: RootStore) => ({
  user: state.user,
})
const connector = connect(mapStateToProps, { logoutUser })
type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & {}

const Aside = ({ logoutUser, user }: Props) => (
  <Container>
    {user.isAuthenticated ? (
      <>
        <h3>User: {user.user.name}</h3>
        <Button text='Logout' onClick={() => logoutUser()} />
      </>
    ) : (
      <Link text='Login' to='/login' />
    )}
  </Container>
)

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export default connector(Aside)
