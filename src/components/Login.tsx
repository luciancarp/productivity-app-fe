import { useState } from 'react'
import { Redirect } from 'react-router-dom'

import { connect, ConnectedProps } from 'react-redux'
import { RootStore } from '../store'
import { loginUser } from '../actions/user'

const mapStateToProps = (state: RootStore) => ({
  user: state.user,
})
const connector = connect(mapStateToProps, { loginUser })
type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & {}

const Login = ({ loginUser, user }: Props) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const onChange = (e: React.FormEvent<HTMLInputElement>): void =>
    setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value })

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    loginUser(formData)
  }

  if (user.isAuthenticated) {
    return <Redirect to='/' />
  }

  return (
    <div>
      <h1>Login</h1>

      <form noValidate onSubmit={onSubmit}>
        <div>
          <label>
            Email:
            <input type='email' name='email' onChange={onChange} />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input type='password' name='password' onChange={onChange} />
          </label>
        </div>
        <div>
          <input type='submit' value='Log in' />
        </div>
      </form>
    </div>
  )
}

export default connector(Login)
