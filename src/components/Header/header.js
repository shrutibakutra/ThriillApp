import React, { useEffect, useState } from 'react';
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
import logo from "../../assets/logo1.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); 
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar className={`navbar-custom ${isScrolled ? 'scrolled' : ''}`} light expand="md">
      <NavbarBrand href="/">
        <img src={logo} height={"50px"} alt="Logo" />
      </NavbarBrand>
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
            <NavLink href="#contact">Contact</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">About</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
