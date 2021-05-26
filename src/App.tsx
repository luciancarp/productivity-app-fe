import { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './store'
import { getUser } from './actions/user'
import setAuthToken from './utils/setAuthToken'

import { ThemeProvider } from './style/Theme'
import GlobalStyle from './style/GlobalStyle'

import Login from './components/Login'
import SignUp from './components/SignUp'
import Projects from './components/Projects'
import Layout from './components/Layout'
import Alerts from './components/Alerts'

if (localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {
  useEffect(() => {
    store.dispatch<any>(getUser())
  }, [])

  return (
    <Provider store={store}>
      <ThemeProvider>
        <GlobalStyle />
        <Router>
          <Alerts />
          <Switch>
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/login' component={Login} />
            <Layout>
              <Route exact path='/' component={Projects} />
            </Layout>
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  )
}

export default App
