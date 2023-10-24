

import React from 'react';

function Footer() {
  return (
    <div>
      <footer>
        <h2>Contact Us</h2>
        <address>
          <p>Email: contact@example.com</p>
          <p>Phone: +1-123-456-7890</p>
          <p>Address: 123 Main St, City, Country</p>
        </address>
        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Footer;
