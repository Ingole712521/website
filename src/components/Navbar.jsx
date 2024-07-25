import  { useState, useEffect } from 'react';
import styled from 'styled-components';
import logo from '../assets/alif view white.png'; 

const NavbarContainer = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: transparent; /* Transparent background */
  backdrop-filter: blur(10px); /* Blur effect for better blending */
  z-index: 1000; /* Ensure navbar stays on top */
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  font-family: 'Arial', sans-serif; /* Change font family */
  transition: background 0.3s ease;
`;

const NavbarContent = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

const Logo = styled.img`
  height: 60px; /* Adjust as needed */
  width: auto;
  transition: height 0.3s ease;

  @media (max-width: 768px) {
    height: 50px; /* Smaller logo on medium screens */
  }

  @media (max-width: 480px) {
    height: 40px; /* Smaller logo on small screens */
  }
`;

const MenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  color: #d81b60; /* Pink color */
  font-size: 2rem;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: ${props => (props.isOpen ? 'flex' : 'none')};
    flex-direction: column;
    width: 100%;
    position: absolute;
    top: 60px; /* Adjust according to logo height */
    left: 0;
    background: rgba(255, 255, 255, 0.9); /* Slightly transparent background for dropdown */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const NavLink = styled.a`
  font-size: 1.25rem;
  color: ${props => props.isActive ? '#000' : '#fff'}; /* Black for active, white otherwise */
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease, padding 0.3s ease;
  padding: ${props => props.isActive ? '0.5rem 1rem' : '0.5rem'}; /* Add padding for active link */

  &:hover {
    color: #d81b60; /* Pink color on hover */
  }

  @media (max-width: 768px) {
    font-size: 1.5rem; /* Larger font size on mobile */
    padding: 1rem;
    text-align: center;
    border-bottom: 1px solid #ddd;
  }
`;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    // Handle menu toggle on button click
    const menuButton = document.getElementById('menu');
    menuButton.addEventListener('click', () => setIsMenuOpen(prev => !prev));

    // Handle window resize to close menu if width > 800px
    const handleResize = () => {
      if (window.innerWidth > 800) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);

    // Handle scroll for active links
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll('section');

      sections.forEach(section => {
        const link = document.querySelector(`a[href="#${section.id}"]`);
        const containerOffset = section.offsetTop;
        const containerHeight = section.offsetHeight;
        const containerBottom = containerOffset + containerHeight;

        if (scrollPosition < containerBottom - 20 && scrollPosition >= containerOffset - 20) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up event listeners on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      menuButton.removeEventListener('click', () => setIsMenuOpen(prev => !prev));
    };
  }, []);

  const handleNavClick = (id) => {
    setActive(id);
    setIsMenuOpen(false); // Close menu on link click for mobile view
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <NavbarContainer>
      <NavbarContent>
        <Logo src={logo} alt="Company Logo" />
        <MenuToggle id="menu">
          ☰
        </MenuToggle>
        <NavLinks isOpen={isMenuOpen}>
          <NavLink
            href="#home"
            isActive={active === '#home'}
            onClick={() => handleNavClick('#home')}
          >
            Home
          </NavLink>
          <NavLink
            href="#about"
            isActive={active === '#about'}
            onClick={() => handleNavClick('#about')}
          >
            About
          </NavLink>
          <NavLink
            href="#gallery"
            isActive={active === '#gallery'}
            onClick={() => handleNavClick('#gallery')}
          >
            Gallery
          </NavLink>
          <NavLink
            href="#contact"
            isActive={active === '#contact'}
            onClick={() => handleNavClick('#contact')}
          >
            Contact
          </NavLink>
        </NavLinks>
      </NavbarContent>
    </NavbarContainer>
  );
};

export default Navbar;
