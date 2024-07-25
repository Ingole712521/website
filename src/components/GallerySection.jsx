import  { useState, useEffect } from 'react';
import styled from 'styled-components';
//import './App.css';
// Replace these with your actual image paths
import slideImage1 from '../assets/image1.png';
import slideImage2 from '../assets/image2.png';
import slideImage3 from '../assets/image3.png';
import containerImage1 from '../assets/image1.png';
import containerImage2 from '../assets/image2.png';
import containerImage3 from '../assets/image3.png';

const images = [slideImage1, slideImage2, slideImage3];
const containers = [
  { img: containerImage1, desc: 'Description for Container 1', link: '#container1' },
  { img: containerImage2, desc: 'Description for Container 2', link: '#container2' },
  { img: containerImage3, desc: 'Description for Container 3', link: '#container3' }
];

const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #fce4ec 0%, #f8bbd0 100%); /* Gradient pink background */
  width: 100%;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 3rem;
  color: #d81b60; /* Darker pink color */
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1000px; /* Max width for larger screens */
  height: 500px; /* Set a consistent height for slides */
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-bottom: 4rem; /* Space between slider and containers */

  @media (max-width: 768px) {
    height: 400px; /* Adjust height for smaller screens */
  }

  @media (max-width: 480px) {
    height: 300px; /* Further adjust height for very small screens */
  }
`;

const Slide = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  filter: brightness(80%); /* Reduce brightness */

  &:hover {
    transform: scale(1.05); /* Slight zoom effect on hover */
  }
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #d81b60; /* Pink background for arrows */
  border: none;
  color: white;
  padding: 12px;
  cursor: pointer;
  border-radius: 50%;
  font-size: 2rem;
  z-index: 2;
  transition: background 0.3s ease;

  &:hover {
    background: #c2185b; /* Darker pink on hover */
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    font-size: 1.75rem;
    padding: 10px;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    padding: 8px;
  }
`;

const PrevArrow = styled(ArrowButton)`
  left: -5%; /* Positioned outside the container on the left */
`;

const NextArrow = styled(ArrowButton)`
  right: -5%; /* Positioned outside the container on the right */
`;

const ContainersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: stretch;
  justify-content: center;
  max-width: 1200px;
  width: 100%;
`;

const Container = styled.div`
  width: calc(33.333% - 2rem); /* 3 containers in a row with gap consideration */
  display: flex;
  flex-direction: column; /* Make the container content vertical */
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  padding: 1rem;

  &:hover {
    transform: scale(1.02); /* Slightly enlarge on hover */
  }

  @media (max-width: 768px) {
    width: calc(50% - 1rem); /* 2 containers in a row on medium screens */
  }

  @media (max-width: 480px) {
    width: calc(100% - 1rem); /* 1 container in a row on small screens */
  }
`;

const ContainerTitle = styled.h3`
  font-size: 1.5rem;
  color: #d81b60; /* Darker pink color */
  margin-bottom: 0.5rem;
`;

const ContainerImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
  }

  @media (max-width: 480px) {
    height: 150px;
  }
`;

const ContainerContent = styled.div`
  padding: 1rem;
  flex: 1;
  text-align: left;
`;

const ContainerDescription = styled.p`
  font-size: 1rem;
  color: #333;
  margin: 0;
  line-height: 1.5;
`;

const ContainerLink = styled.a`
  display: inline-block;
  margin-top: 1rem;
  color: #d81b60;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: #c2185b; /* Darker pink on hover */
  }
`;

const GallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <GalleryContainer id="gallery">
      <Title>Gallery</Title>
      <SliderContainer>
        <Slide>
          <SlideImage src={images[currentIndex]} alt="Gallery Slide" />
        </Slide>
        <PrevArrow onClick={goToPreviousSlide}>&lt;</PrevArrow>
        <NextArrow onClick={goToNextSlide}>&gt;</NextArrow>
      </SliderContainer>
      <ContainersContainer>
        {containers.map((container, index) => (
          <Container key={index}>
            <ContainerTitle>Upcoming Event</ContainerTitle>
            <ContainerImage src={container.img} alt={`Container ${index + 1}`} />
            <ContainerContent>
              <ContainerDescription>
                {container.desc}
              </ContainerDescription>
              <ContainerLink href={container.link}>View More</ContainerLink>
            </ContainerContent>
          </Container>
        ))}
      </ContainersContainer>
    </GalleryContainer>
  );
};

export default GallerySection;
