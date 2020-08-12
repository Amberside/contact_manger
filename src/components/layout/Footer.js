import React from 'react'

const Footer = () => {
  // create a new date object
  const date = new Date();
  // the return will use String.fromCharCode(169) to output the copyright symbol
  // and the data.getFullYear will output the current year. This will update the year for us.
  return (
    <div className='bg-danger'>
      <p className='py-2 ml-5 mr-auto text-white'>
        copyright { String.fromCharCode(169)}
        {' ' + date.getFullYear()} Websites 'r' us
      </p>
    </div>
  )
}

export default Footer;
