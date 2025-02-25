import React, { Suspense } from 'react';
import styled from 'styled-components';

// Import the SectionComponent from its own file
import SectionComponent from './SectionComponent';

const Container = styled.div`
  padding: 20px;
  background-color: rgba(37, 37, 37, 1);
`;

const PageHeading = styled.h1`
  text-align: center;
  font-size: 50px;
  color: #febb12;
  margin-bottom: 40px;

  span {
    color: #fff;
  }
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Sectionpage = () => (
  <Container id="sections-page">
    <PageHeading><span>Our</span> Services</PageHeading>
    <Suspense fallback={<div>Loading...</div>}>
      <Row>
        <SectionComponent
          image="/one.jpeg"
          heading={<><strong>Bihar’s First Live Trading Institute</strong></>}
          text="The only institute in Bihar offering real-time trading classes, setting a new standard for stock market education."
        />
        <SectionComponent
          image="/two.jpeg"
          heading={<><strong>Learn and Trade Simultaneously</strong></>}
          text="Students gain hands-on experience by learning and trading in a live market environment."
        />
        <SectionComponent
          image="/Three.jpg"
          heading={<><strong>Expert Mentor Guidance</strong></>}
          text="Benefit from personalized instruction and proven strategies from seasoned trading professionals."
        />
      </Row>
      <Row>
        <SectionComponent
          image="/Four.jpg"
          heading={<><strong>Real-Time Market Exposure</strong></>}
          text="Develop practical trading skills with immediate application in the live market."
        />
        <SectionComponent
          image="/Five.jpg"
          heading={<><strong>Comprehensive Trading Experience</strong></>}
          text="A unique blend of theoretical knowledge and practical execution, ensuring well-rounded trading expertise."
        />
        <SectionComponent
          image="/six.jpg"
          heading={<><strong>Interactive Learning Environment</strong></>}
          text="Engage in an energetic and collaborative setting where real-time discussions and peer interactions enhance the learning experience."
        />
      </Row>
    </Suspense>
  </Container>
);

export default Sectionpage;
