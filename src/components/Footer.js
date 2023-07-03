import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

const Footer = () => {
    return (
      <Navbar
        className="me-2"
        color="dark"
        dark
        fixed="bottom"
      >
        <NavbarBrand href="/">&copy; Super Sayin
        </NavbarBrand>
      </Navbar>
    )
}

export default Footer;