import React, { useEffect, useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,

  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from 'reactstrap';
import "./header.scss";
import logo from "../../assets/logo2.svg";
import ContactDetails from '../ContactDetails/contactdetails';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

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
      <div>
        <NavbarBrand href="/" >
          <img src={logo} height={"60px"} alt="Logo" style={{ backgroundColor: "#fff", borderRadius: "4px" }} />
        </NavbarBrand>
      </div>
      <div>
        <Button className='navbar-custom__button'>
          <a
            href="https://docs.google.com/forms/d/1C4iWXxp46an5YpNxrlLVMiTYjlfpFtCqF2ZX-u1gwG8/edit"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Us Now
          </a>
        </Button>
      </div>
      <NavbarToggler onClick={toggle} />
      <div>
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
              <NavLink href="#contact">About</NavLink>
            </NavItem>
            <Dropdown nav isOpen={dropdownOpen} toggle={toggleDropdown}>
              <DropdownToggle nav caret>
                Music Sheets & Links
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem target="_blank" href="https://drive.google.com/drive/folders/1-7a8hS9aQDmkL3MaSycI8Uf5Y623QDp8?usp=drive_link">Beginner Level</DropdownItem>
                <DropdownItem target="_blank" href="https://drive.google.com/drive/folders/1yepGOgXlxygK70ys3YyuXkuv9nhWggWH">Intermediate Level</DropdownItem>
                <DropdownItem target="_blank" href="https://drive.google.com/drive/folders/15XgBiY9uGLSBWq5jFS9W2Z38jpoX6Zhu">Upper Intermediate Level</DropdownItem>
                <DropdownItem target="_blank" href="https://drive.google.com/drive/u/1/mobile/folders/1dgP04BMPuzPySixKevE54bPLy0_x8_k5?usp=share_link&pli=1&sort=13&direction=a">Duets</DropdownItem>
                <DropdownItem target="_blank" href="https://docs.google.com/forms/d/1wKEh43BoaYEqasm2VJo4Cjb6jBrzEvqDKqJurs9bdSA/edit">Advertise your service</DropdownItem>     
              </DropdownMenu>
            </Dropdown>
          </Nav>
        </Collapse>
      </div>
        <ContactDetails/>
    </Navbar>
  );
};

export default Header;
