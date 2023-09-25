import React from 'react';
import { Link } from 'react-router-dom';


function Navigation() {
    return ( 
        <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/AboutUs">About Us</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/Products">Products</Link>
          </li>
          <li>
            <Link to="/FAQ">FAQ</Link>
          </li>
        </ul>
      </nav>

     );
}
 
export default Navigation;