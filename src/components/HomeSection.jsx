import styled from 'styled-components';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Container from './css/Container';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
  text-align: center;
  color: white;
  padding: 0 20px;
`;

const SliderContainer = styled(Slider)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;

  .slick-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.4);
  }
`;

const ContentContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1; /* Ensure content is above the slider */
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  margin-top: 1rem; /* Add margin-top for spacing below the title */
  max-width: 600px;

  @media (max-width: 768px) {
    font-size: 1rem;
    max-width: 90%;
    margin-top: 0.5rem; /* Adjust margin for smaller screens */
  }
`;

const HomeSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    pauseOnHover: false,
  };

  return (
    <HomeContainer id="home">
      <SliderContainer {...settings}>
        <div>
          <img src={image1} alt="Slide 1" />
        </div>
        <div>
          <img src={image2} alt="Slide 2" />
        </div>
        <div>
          <img src={image3} alt="Slide 3" />
        </div>
      </SliderContainer>
      <ContentContainer>
        <Title
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Alief View
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
        >
          Welcome to AlifView Media Group, where Innovation meets Excellence. We specialize in transforming 
          ordinary moments into extraordinary experiences. AlifView Media aims to be passionate about 
          bringing your vision to life through innovative and creative media solutions.
        </Subtitle>
      </ContentContainer>
    </HomeContainer>
  );
};

export default HomeSection;