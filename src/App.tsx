import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { ThemeProvider } from './style/Theme'
import GlobalStyle from './style/GlobalStyle'

import Projects from './components/Projects'
import Layout from './components/Layout'

const App = () => {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Router>
        <Layout>
          <Switch>
            <Route exact path='/' component={Projects} />
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  )
}

export default App
