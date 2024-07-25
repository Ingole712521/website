import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 1200px) {
    max-width: 100%;
  }

  @media (max-width: 768px) {
    padding: 0 30px;
  }
`;

export default Container;
