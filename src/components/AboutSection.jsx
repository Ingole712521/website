
import styled from 'styled-components';
import { motion } from 'framer-motion';
import companyLogo from '../assets/company-logo.png'; 
import Container from './css/Container'; // Import the Container component
import "../App.css";

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #f4f4f4 0%, #e0e0e0 100%); /* Gradient background */
  width: 100%;
  text-align: center;
`;

const Title = styled(motion.h2)`
  font-size: 3rem;
  color: #471717;
  margin-bottom: 2rem; /* Adjusted for better spacing */
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 2rem; /* Adjust title size for smaller screens */
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row; /* Align items side by side */
  align-items: center;
  justify-content: center;
  gap: 4rem; /* Spacing between logo and description */
  flex-wrap: wrap; /* Allow wrapping on smaller screens */
  max-width: 1200px;
  width: 100%;
  margin-top: 2rem; /* Adjusted margin for spacing */
`;

const LogoContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center; /* Center logo horizontally */
  align-items: center; /* Center logo vertically */
  max-width: 450px; /* Max width for the logo */
  width: 100%;
`;

const Logo = styled(motion.img)`
  height: auto; /* Maintain aspect ratio */
  max-height: 200px; /* Max height for the logo */
`;

const DescriptionContainer = styled.div`
  flex: 2;
  max-width: 700px; /* Max width for description */
  width: 100%;
  text-align: left; /* Left-align text */
  line-height: 1.8; /* Line height for readability */
  padding: 0 1rem; /* Add padding to handle smaller screens */
`;

const Description = styled(motion.p)`
  font-size: 1.5rem; /* Font size for description */
  color: #666;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.2rem; /* Adjust font size for smaller screens */
  }
`;

const AboutSection = () => {
  return (
    <AboutContainer id="about">
      <Title
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        About Us
      </Title>
      <Container>
        <ContentContainer>
          <LogoContainer>
            <Logo
              src={companyLogo}
              alt="Company Logo"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            />
          </LogoContainer>
          <DescriptionContainer>
            <Description
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              AlifView Media is a premier conference organizer. We are dedicated to delivering exceptional value through landmark summits that provide unique opportunities for delegates to exchange knowledge and learn about the latest technological and innovative advancements.
              <br /><br />
              A prestigious platform that honors the exceptional contributions and success of individuals, teams, and organizations who have demonstrated excellence, innovation, and impact in their respective domains.
            </Description>
          </DescriptionContainer>
        </ContentContainer>
      </Container>
    </AboutContainer>
  );
};

export default AboutSection;
