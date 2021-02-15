import React, { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';

const Navbar = (props) => {
     
     return (
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
             <a className="navbar-brand" href="#">Navbar</a>
             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
             </button>
             <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                 <ul className="nav nav-tabs mr-auto">
                     <li> <a className="nav-item nav-link" exact to="/">Home</a>
 </li>
                     <li><a className="nav-item nav-link" to="/about">About</a>
 </li>
                     <li><a className="nav-item nav-link" to="/contact">Contact</a>
 </li>
                 
                 </ul>
             </div>
         </nav>
     )
 }
 
 export default Navbar
