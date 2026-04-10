import { useEffect, useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Collapse,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import "./header.scss";
import logo from "../../assets/logo2.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
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
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar className={`navbar-custom ${isScrolled ? 'scrolled' : ''}`} light expand="md">
      <div>
        <NavbarBrand href="/">
          <img src={logo} height={"60px"} alt="Logo" style={{ backgroundColor: "#fff", borderRadius: "4px" }} />
        </NavbarBrand>
      </div>

      {/* Custom hamburger / X toggler */}
      <button
        className="navbar-toggler-custom"
        onClick={toggle}
        aria-label="Toggle navigation"
        aria-expanded={isOpen}
      >
        <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
      </button>

      <div className="navbar-collapse-wrapper">
        <Collapse isOpen={isOpen} navbar className="navbar-header">
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="#features" onClick={closeMenu}>Features</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#screenshots" onClick={closeMenu}>Screenshots</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#download" onClick={closeMenu}>Download</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contact" onClick={closeMenu}>Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contact" onClick={closeMenu}>About</NavLink>
            </NavItem>
            <Dropdown nav isOpen={dropdownOpen} toggle={toggleDropdown}>
              <DropdownToggle nav caret>
                Music Sheets & Links
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem target="_blank" href="https://drive.google.com/drive/folders/1-7a8hS9aQDmkL3MaSycI8Uf5Y623QDp8?usp=drive_link" onClick={closeMenu}>Beginner Level</DropdownItem>
                <DropdownItem target="_blank" href="https://drive.google.com/drive/folders/1yepGOgXlxygK70ys3YyuXkuv9nhWggWH" onClick={closeMenu}>Intermediate Level</DropdownItem>
                <DropdownItem target="_blank" href="https://drive.google.com/drive/folders/15XgBiY9uGLSBWq5jFS9W2Z38jpoX6Zhu" onClick={closeMenu}>Upper Intermediate Level</DropdownItem>
                <DropdownItem target="_blank" href="https://drive.google.com/drive/u/1/mobile/folders/1dgP04BMPuzPySixKevE54bPLy0_x8_k5?usp=share_link&pli=1&sort=13&direction=a" onClick={closeMenu}>Duets</DropdownItem>
                <DropdownItem target="_blank" href="https://docs.google.com/forms/d/1wKEh43BoaYEqasm2VJo4Cjb6jBrzEvqDKqJurs9bdSA/edit" onClick={closeMenu}>Advertise your service</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
