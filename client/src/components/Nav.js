import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';

const Nav = () => {

    return (
        
            <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top">
                <Link className="nav-link" to='/'>PredictTheNFL</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to='/'>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/about'>About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/search'>Search</Link>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <Link className="nav-link" to='/register'>Register</Link>
                    <Link className="nav-link" to='/login'>Login</Link>
                </form>
                </div>
            </nav>
    
    
    );

}

export default Nav;