import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from '../Navbar'
import { Items } from './Items'

const Dashboard = () => {
    return (
        <Router>
            <div className='dashboard'>

                <div className="main">
                    <Navbar/><br/>
                    <Switch>
                        <Route path='/dashboard' render={() => <Items />} />
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default Dashboard