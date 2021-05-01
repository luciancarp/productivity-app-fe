import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Projects from './components/Projects'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Projects} />
      </Switch>
    </Router>
  )
}

export default App
