import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
                 <Link className="navbar__home" to="/">Inventory Management</Link>
            </nav>
        </div>
    )
}

export default Navbar