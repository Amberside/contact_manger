import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = props => {
  console.log(props);
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-3">
      <div className="container">
        <Link to="/" className="navbar-brand">{branding}</Link>
      </div>
      <ul className='navbar-nav mr-auto'>
        <li className="nav-item">
          <Link to="/" className='nav-link'>Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact/add" className='nav-link'>Add</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className='nav-link'>About</Link>
        </li>
        <li className="nav-item">
          <Link to="/test" className='nav-link'>Test</Link>
        </li>
      </ul>
    </nav>
  )
}

Header.defaultProps = {
  branding: 'My App'
}

Header.propTypes = {
  branding: PropTypes.string
}

// const myStyle = {
//   color: 'green',
//   fontSize: '50px'
// }

export default Header
