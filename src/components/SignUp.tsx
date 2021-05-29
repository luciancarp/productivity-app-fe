import { useState } from 'react'
import { Redirect, Link } from 'react-router-dom'

import { connect, ConnectedProps } from 'react-redux'
import { RootStore } from '../store'
import { createUser } from '../actions/user'

import styled from 'styled-components'
// import ThemeSwitcher from './ThemeSwitcher'
import { itemStyle } from '../style/componentStyles'
import { spaces } from '../style/global'
import Input from './Input'
import Button from './Button'

const mapStateToProps = (state: RootStore) => ({
  user: state.user,
})
const connector = connect(mapStateToProps, { createUser })
type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & {}

const SignUp = ({ createUser, user }: Props) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const onChange = (e: React.FormEvent<HTMLInputElement>): void =>
    setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value })

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    createUser(formData)
  }

  if (user.isAuthenticated) {
    return <Redirect to='/' />
  }

  return (
    <Container>
      {/* <ThemeSwitcher /> */}
      <Content>
        <Title>Sign Up</Title>

        <StyledForm noValidate onSubmit={onSubmit}>
          <Row>
            <Input label='Name' type='name' name='name' onChange={onChange} />
          </Row>
          <Row>
            <Input
              label='Email'
              type='email'
              name='email'
              onChange={onChange}
            />
          </Row>
          <Row>
            <Input
              label='Password'
              type='password'
              name='password'
              onChange={onChange}
            />
          </Row>
          <Row>
            <Button type='submit' text='Sign up' width='66%' />
          </Row>
          <Row style={{ margin: '0' }}>
            <h4>
              Already have an account?{' '}
              <StyledLink href='#' to='/login'>
                Log in
              </StyledLink>
            </h4>
          </Row>
        </StyledForm>
      </Content>
    </Container>
  )
}

const Container = styled.div`
  position: relative;

  min-height: 100vh;

  background-color: ${(props) => props.theme.background};
`

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  min-width: 350px;

  ${itemStyle}

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Row = styled.div`
  margin-bottom: ${spaces.regular};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const Title = styled.h3`
  text-align: center;
`

const StyledForm = styled.form`
  width: 100%;
`

const StyledLink = styled(Link)`
  font-weight: bold;
`

export default connector(SignUp)
