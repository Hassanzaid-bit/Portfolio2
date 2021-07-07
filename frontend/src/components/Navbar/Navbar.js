import './Navbar.css'
import '../../index.css'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    // assigning location variable
    const location = useLocation();

    // destructuring pathname from location
    const { pathname } = location ;

    // Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/")

    return ( 
    <nav className="nav-content flex justify-between align-baseline my-20">
        <h1 className="logo w-16 sm:w-20 text-center rounded-2xl p-2 cursor-pointer font-extrabold text-7xl"> <Link to="/">Z</Link></h1>
        <ul className="nav-links text-4xl md:text-5xl flex justify-between align-center w">
            <li className="relative" >
                <Link to="/work">
                    Work
                    <i className="bi bi-arrow-up-short absolute bottom-0 right-7 text-4xl"></i>
                </Link>
            </li>
            <li className="relative">
                <Link to="/articles">
                    Articles
                    <i className="bi bi-arrow-up-short absolute bottom-0 right-7 text-4xl "></i>
                </Link>
            </li>
            <li className="relative">
                <Link to="/about">
                    About
                    <i className="bi bi-arrow-up-short absolute bottom-0 right-7 text-4xl"></i>
                </Link>
            </li>
        </ul>
    </nav>
     );
}
 
export default Navbar;