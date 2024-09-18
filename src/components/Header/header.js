import React, { useEffect } from 'react';
import { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,
} from 'reactstrap';
import "./header.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const adjustScroll = () => {
    const sections = ['features', 'screenshots', 'download', 'contact'];
  
    sections.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        element.style.scrollMarginTop = '80px';
      }
    });
  };
  
  useEffect(() => {
    adjustScroll();
  }, []);

  return (
    <Navbar light expand="md">
      <NavbarBrand href="/">Thriill</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar className='navbar-header'>
        <Nav className="ml-auto" navbar>
        <NavItem>
            <NavLink href="#features">Features</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#screenshots">Screenshots</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#download">Download</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#download">Contact</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
