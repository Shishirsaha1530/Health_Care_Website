import React from 'react';
import './NavBar.css'
import { NavLink} from 'react-router-dom';
import useAuth from './../../../Hooks/useAuth';
// navbar menu function
const NavBar = () => {
  let {user, logOut } = useAuth()
    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed navbar-light bg-light">
              <div className="container">
                <NavLink  className="navbar-brand" to="/"> Fitness Zone </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                {/* navabar menu items */}
                  <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <NavLink  className="nav-link"  to="/home">
                      Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink activeClassName="menu_Item" className="nav-link"
                       to="/about">About Us</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink activeClassName="menu_Item"  className="nav-link" 
                      to="/service">Services</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink activeClassName="menu_Item"  className="nav-link" 
                      to="/blogs">Blog</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink  activeClassName="menu_Item" className="nav-link" to="/contact">
                      Contact
                      </NavLink>
                    </li>
                    <li className="nav-item">
                        {
                          user.displayName? user.displayName:""
                        }
                    </li>
                    <li>
                    {
                      user.displayName? <button onClick={logOut} className='btn btn-danger'> log out </button>:<NavLink to='/login' className='btn btn-success mt-3 mt-md-0'> Log In  </NavLink>
                    }
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
        </div>
    );
};

export default NavBar;