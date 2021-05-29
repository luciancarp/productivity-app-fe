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
        <Button text='Logout' onClick={() => logoutUser()} width='100%' />
      </>
    ) : (
      <Link text='Login' to='/login' width='100%' />
    )}
  </Container>
)

const Container = styled.aside`
  grid-area: 'aside';

  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`

export default connector(Aside)
