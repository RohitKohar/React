import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-3 text-2xl">
      <div>
        <img
          src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/store-logo-design-template-3ac57f780d1cae2a6d3a049f82c62437_screen.jpg?ts=1646205211"
          alt=""
          className="w-20 h-20"
        />
      </div>
      <div className="flex justify-between list-none w-96">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </div>
      <div>Cart</div>
    </nav>
  );
}

export default Navbar
