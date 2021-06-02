import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import App from '../App'
import tokenUtility from '../utils/tokenUtility'
import { logoutUser } from '../actions/user'

// test('renders learn react link', () => {
//   render(<App />)
//   const linkElement = screen.getByText(/learn react/i)
//   expect(linkElement).toBeInTheDocument()
// })

describe('App', () => {
  afterEach(cleanup)

  it('takes a snapshot', async () => {
    const { asFragment } = render(<App />)

    expect(asFragment()).toMatchSnapshot()
  })

  // TODO
  // it('sets auth token if it is stored in localStorage', () => {})
  // it('fetches user info', () => {})
  // it('contains a Provider component', () => {})
  // it('contains a ThemeProvider component', () => {})
  // it('contains a GlobalStyles component', () => {})
  // it('contains an Alerts component', () => {})
})
