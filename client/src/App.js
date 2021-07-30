import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

// redux components
import { Provider } from 'react-redux'
import store from './store'

// router section
import Home from './component/Home'
import Dashboard from './component/dashboard/Dashboard'


const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route path='/' exact component={Home} />
        <Route path='/dashboard' component={Dashboard} />
      </Router>
    </Provider>
  )
}

export default App;
