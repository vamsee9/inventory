import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Navbar from './Navbar'
export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <main className='homepage'>
                    <h1 className='homepage__heading'>
                        Inventory Management System - (IMS)
                    </h1><br/>
                    <h4>
                        <li>
                            Adding Inventory Item
                        </li>
                        <li>
                            editing of the Inventory item
                        </li>
                        <li>
                            deletion of Inventory Item
                        </li>
                    </h4>
                    <Link className="homepage__cta" to="/dashboard">dashboard</Link>
                </main>
            </React.Fragment>
        )
    }
}
