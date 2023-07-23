import {Switch, Route} from 'react-router-dom'
import Register from './components/Register'
import Users from './components/Users'

const App = () => (
  <Switch>
    <Route exact path="/" component={Register} />
    <Route exact path="/users" component={Users} />
  </Switch>
)
export default App
