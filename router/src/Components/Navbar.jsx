import React from 'react';
import {Link, withRouter} from 'react-router-dom';

const Navbar = (props) =>{

  return(
    <nav className='nav-wrapper red darken-3'>
      <div className='container'>
        <span className='brand-logo'>Poke Times</span>
        <ul className='right'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/About'>About</Link></li>
          <li><Link to='/Contact'>Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(Navbar);
