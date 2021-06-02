// test-utils.js
import React, { ReactElement } from 'react'
import { render as rtlRender, RenderOptions } from '@testing-library/react'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import { createMemoryHistory } from 'history'
import rootReducer from '../reducers/rootReducer'

import { ThemeProvider } from '../style/Theme'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'

const middleware = [thunk]

type Props = {
  children?: React.ReactNode
}

function Wrapper({ children }: Props) {
  const history = createMemoryHistory()
  return (
    <ThemeProvider>
      <Router history={history}>{children}</Router>
    </ThemeProvider>
  )
}

const render = (ui: ReactElement, options?: Omit<RenderOptions, 'queries'>) =>
  rtlRender(ui, { wrapper: Wrapper, ...options })

function renderWithRedux(
  ui: ReactElement,
  {
    store = createStore(rootReducer, applyMiddleware(...middleware)),
    ...renderOptions
  } = {}
) {
  function WrapperWithRedux({ children }: Props) {
    return (
      <Provider store={store}>
        <Wrapper>{children}</Wrapper>
      </Provider>
    )
  }
  return rtlRender(ui, { wrapper: WrapperWithRedux, ...renderOptions })
}

function renderWithMockStore(
  ui: ReactElement,
  {
    initialState = {},
    mockStore = configureStore(middleware),
    ...renderOptions
  }
) {
  const store = mockStore(initialState)

  function WrapperWithRedux({ children }: Props) {
    return (
      <Provider store={store}>
        <Wrapper>{children}</Wrapper>
      </Provider>
    )
  }
  return {
    render: rtlRender(ui, { wrapper: WrapperWithRedux, ...renderOptions }),
    store: store,
  }
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { renderWithRedux, render, renderWithMockStore }
