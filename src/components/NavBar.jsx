import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul className="list-none flex flex-col sm:flex-row justify-center mt-10 space-y-4 sm:space-y-0 sm:space-x-8 font-bold size-large">
        <li>
          <Link to="/" className="text-black hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-black hover:underline">
            About
          </Link>
        </li>
        <li>
          <Link to="/projects" className="text-black hover:underline">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-black hover:underline">
            Contact
          </Link>
        </li>
      </ul>
    </nav>


  )
}

export default NavBar
