import React, { useState } from 'react';
import styled from 'styled-components';

const Section = styled.div`
  flex: 1;
  text-align: center;
  padding: 10px;
  box-sizing: border-box;
  max-width: calc(33.333% - 20px);
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 8%;
    right: 0;
    width: 0.5px;
    height: 90%;
    background-color: #febb12;
    display: block;
  }

  &:last-child::after {
    display: none;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 20px;

    &::after {
      display: none;
    }
  }
`;

const RoundImage = styled.img`
  border-radius: 10px;
  width: 180px;  /* Fixed width */
  height: 160px; /* Fixed height */
  object-fit: cover; /* Ensures image covers the entire container without distortion */
  margin-bottom: 10px;
  background: #e0e0e0; /* Placeholder color */
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  &.loaded {
    opacity: 1;
  }

  @media (max-width: 768px) {
    width: 80%;  /* Adjust width for smaller screens */
    height: auto; /* Maintain aspect ratio */
  }
`;

const Heading = styled.h2`
  margin: 10px 0;
  font-size: 18px;
  color: #febb12;
`;

const Text = styled.p`
  font-size: 14px;
  color: #FDD788;
`;

const HorizontalLine = styled.hr`
  border: none;
  border-top: 1px solid #febb12;
  margin: 20px 0;
  width: 100%;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const SectionComponent = ({ image, heading, text }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <>
      <Section>
        <RoundImage
          src={image}
          alt={heading}
          onLoad={handleImageLoad}
          className={isLoaded ? 'loaded' : ''}
        />
        <Heading>{heading}</Heading>
        <Text>{text}</Text>
      </Section>
      <HorizontalLine />
    </>
  );
};

export default SectionComponent;
