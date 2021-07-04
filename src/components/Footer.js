import React from 'react';

function Footer() {
  return (
    <div>
      <p className="footer__author">&#169; {new Date().getFullYear()} MSE by Mikhail Kirichkov</p>
      <p className="footer__gratitude">Created with OMDb API</p>
    </div>
  )
}

export default Footer;