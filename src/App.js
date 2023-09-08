import {Switch, Route} from 'react-router-dom'

import Home from './components/Home'

import Tmatch from './components/TeamMatches'

import Notfound from './components/NotFound'

import './App.css'

const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/team-matches/:id" component={Tmatch} />
      <Route component={Notfound} />
    </Switch>
  </>
)

export default App
