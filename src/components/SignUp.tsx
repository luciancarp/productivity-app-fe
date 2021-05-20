import { useState } from 'react'
import { Redirect } from 'react-router-dom'

import { connect, ConnectedProps } from 'react-redux'
import { RootStore } from '../store'
import { createUser } from '../actions/user'

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
    <div>
      <h1>Sign Up</h1>

      <form noValidate onSubmit={onSubmit}>
        <div>
          <label>
            Name:
            <input type='name' name='name' onChange={onChange} />
          </label>
        </div>
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
          <input type='submit' value='Sign up' />
        </div>
      </form>
    </div>
  )
}

export default connector(SignUp)
