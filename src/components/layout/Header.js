import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = props => {
  console.log(props);
  const { branding } = props;
  return (
    <div>
      <p style={{ color: 'red'}}>{ branding }</p>
    </div>
  )
}

Header.defaultProps = {
  branding: 'My App'
}

Header.propTypes = {
  branding: PropTypes.string
}

const myStyle = {
  color: 'green',
  fontSize: '50px'
}

export default Header
