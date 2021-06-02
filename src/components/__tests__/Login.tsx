import React from 'react'
import {
  //   render,
  cleanup,
  fireEvent,
  renderWithRedux,
  //   renderWithMockStore,
} from '../../utils/testUtility'
import faker from 'faker'

import Login from '../Login'
// import { loginUser } from '../../actions/user'

describe('Login', () => {
  afterEach(cleanup)

  it('contains title header', () => {
    const { getByText } = renderWithRedux(<Login />)
    const title = getByText(/Login/i)
    expect(title).toBeInTheDocument()
  })

  it('contains an email input field', () => {
    const { getByLabelText } = renderWithRedux(<Login />)
    const inputEmail = getByLabelText('Email')
    expect(inputEmail).toBeInTheDocument()
  })

  it('contains a password input field', () => {
    const { getByLabelText } = renderWithRedux(<Login />)
    const inputPassword = getByLabelText('Password')
    expect(inputPassword).toBeInTheDocument()
  })

  it('contains a `Log in` button', () => {
    const { getByText } = renderWithRedux(<Login />)
    const button = getByText(/Log in/i)
    expect(button).toBeInTheDocument()
  })

  it('contains a link to the sign up page', () => {
    const { getByText } = renderWithRedux(<Login />)
    const link = getByText(/Sign Up/i)
    expect(link).toBeInTheDocument()
  })

  describe('when the user types in their email address', () => {
    it('changes the value of the `Email` input field', () => {
      const { getByLabelText } = renderWithRedux(<Login />)
      const input = getByLabelText('Email') as HTMLInputElement
      const mockInput = faker.internet.email()
      fireEvent.change(input, { target: { value: mockInput } })
      expect(input.value).toBe(mockInput)
    })
  })

  describe('when the user types in their password', () => {
    it('changes the value of the `Password` input field', () => {
      const { getByLabelText } = renderWithRedux(<Login />)
      const input = getByLabelText('Password') as HTMLInputElement
      const mockInput = faker.internet.password()
      fireEvent.change(input, { target: { value: mockInput } })
      expect(input.value).toBe(mockInput)
    })
  })

  //   describe('when the user presses the submit button', () => {
  //     it('dispatches the `loginUser` action with the correct inputs', () => {
  //       const { render, store } = renderWithMockStore(<Login />, {
  //         initialState: {
  //           user: {
  //             isAuthenticated: false,
  //           },
  //         },
  //       })

  //       store.dispatch = jest.fn()

  //       const { getByText, getByLabelText } = render

  //       const mockEmail = faker.internet.email()
  //       const mockPassword = faker.internet.password()

  //       const inputEmail = getByLabelText('Email') as HTMLInputElement
  //       fireEvent.change(inputEmail, { target: { value: mockEmail } })

  //       const inputPassword = getByLabelText('Password') as HTMLInputElement
  //       fireEvent.change(inputPassword, { target: { value: mockPassword } })

  //       const button = getByText(/Log in/i)
  //       fireEvent.click(button)

  //       expect(store.dispatch).toHaveBeenCalledTimes(1)
  //       expect(store.dispatch).toHaveBeenCalledWith(
  //         loginUser({
  //           email: mockEmail,
  //           password: mockPassword,
  //         })
  //       )
  //     })
  //   })

  //   it('redirects to main page when the user gets authenticated', () => {})
})
