import styled from 'styled-components';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 2rem;
  background-color: #f4f4f4;
  width: 100%;
  text-align: center;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ContactContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const ContactDetails = styled.div`
  flex: 1;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  text-align: left;
  max-width: 500px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const ContactInfo = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const InfoIcon = styled.div`
  font-size: 1.5rem;
  color: #d81b60;
`;

const InfoText = styled.p`
  margin: 0;
  font-size: 1rem;
  color: #555;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const ContactForm = styled.form`
  flex: 2;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  margin-bottom: 0.5rem;
  font-size: 1rem;
  color: #333;
`;

const FormInput = styled.input`
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  width: 100%;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #d81b60;
  }
`;

const FormTextArea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  width: 100%;
  height: 200px;
  resize: none;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #d81b60;
  }
`;

const SubmitButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #d81b60;
  border: none;
  color: white;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c2185b;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const ContactSection = () => {
  return (
    <ContactContainer id="contact">
      <Title>Contact Us</Title>
      <ContactContent>
        <ContactDetails>
          <ContactInfo>
            <InfoIcon><FaPhone /></InfoIcon>
            <InfoText>+91 2222222222</InfoText>
          </ContactInfo>
          <ContactInfo>
            <InfoIcon><FaEnvelope /></InfoIcon>
            <InfoText>nehalingole2001@gmail.com</InfoText>
          </ContactInfo>
          <ContactInfo>
            <InfoIcon><FaMapMarkerAlt /></InfoIcon>
            <InfoText>1234 Street Name, City, Country</InfoText>
          </ContactInfo>
        </ContactDetails>
        <ContactForm>
          <FormGroup>
            <FormLabel htmlFor="name">Name</FormLabel>
            <FormInput type="text" id="name" name="name" required />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormInput type="email" id="email" name="email" required />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="message">Message</FormLabel>
            <FormTextArea id="message" name="message" required />
          </FormGroup>
          <SubmitButton type="submit">Send Message</SubmitButton>
        </ContactForm>
      </ContactContent>
    </ContactContainer>
  );
};

export default ContactSection;
