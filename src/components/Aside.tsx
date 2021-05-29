import styled from 'styled-components'

import { connect, ConnectedProps } from 'react-redux'
import { RootStore } from '../store'
import { logoutUser } from '../actions/user'

import Button from './Button'
import Link from './Link'
import ThemeSwitcher from './ThemeSwitcher'

const mapStateToProps = (state: RootStore) => ({
  user: state.user,
})
const connector = connect(mapStateToProps, { logoutUser })
type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & {}

const Aside = ({ logoutUser, user }: Props) => (
  <Container>
    <ButtonContainer>
      {user.isAuthenticated ? (
        <>
          <Button text='Logout' onClick={() => logoutUser()} width='100%' />
        </>
      ) : (
        <Link text='Login' to='/login' width='100%' />
      )}
    </ButtonContainer>
    <ThemeSwitcherContainer>
      <ThemeSwitcher />
    </ThemeSwitcherContainer>
  </Container>
)

const Container = styled.aside`
  grid-area: 'aside';

  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const ThemeSwitcherContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`

const ButtonContainer = styled.div`
  width: 100%;
`

export default connector(Aside)
