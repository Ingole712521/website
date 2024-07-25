import styled from 'styled-components';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import companyLogo from '../assets/company-logo.png';

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem; /* Reduced padding */
  background-color: #333;
  color: white;
  width: 100%;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    text-align: left;
  }
`;

const LogoContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    justify-content: flex-start;
    margin-bottom: 0;
  }
`;

const Logo = styled.img`
  max-width: 150px;
`;

const FooterContent = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem; /* Reduced gap */

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem; /* Adjusted gap for larger screens */
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem; /* Reduced gap */

  & h4 {
    margin-bottom: 0.3rem; /* Reduced margin */
    font-size: 1.2rem;
    color: #fce4ec;
  }
`;

const ListItem = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.3rem; /* Reduced gap */

  &:hover {
    color: #c2185b;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 0.5rem; /* Reduced gap */
`;

const SocialLink = styled.a`
  color: white;
  font-size: 1.5rem;

  &:hover {
    color: #c2185b;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <LogoContainer>
        <Logo src={companyLogo} alt="Company Logo" />
      </LogoContainer>
      <FooterContent>
        <List>
          <h4>Reach Us</h4>
          <ListItem href="tel:+912222222222">
            <FaPhoneAlt /> +91 2222222222
          </ListItem>
          <ListItem href="mailto:nehalingole2001@gmail.com">
            <FaEnvelope /> marketing.alifviewmedia@gmail.com
          </ListItem>
          <ListItem href="https://goo.gl/maps/XYZ123">
            <FaMapMarkerAlt /> 
          </ListItem>
        </List>
        <List>
          <h4>Company</h4>
          <ListItem href="#about">About</ListItem>
          <ListItem href="#gallery">Gallery</ListItem>
        </List>
        <List>
          <h4>Follow Us</h4>
          <SocialLinks>
            <SocialLink href="https://facebook.com" target="_blank">
              <FaFacebookF />
            </SocialLink>
            <SocialLink href="https://twitter.com" target="_blank">
              <FaTwitter />
            </SocialLink>
            <SocialLink href="https://instagram.com" target="_blank">
              <FaInstagram />
            </SocialLink>
            <SocialLink href="https://linkedin.com" target="_blank">
              <FaLinkedinIn />
            </SocialLink>
          </SocialLinks>
        </List>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
