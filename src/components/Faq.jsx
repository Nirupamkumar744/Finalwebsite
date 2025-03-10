import React, { useState } from 'react';
import styled from 'styled-components';
import { FaChevronDown, FaChevronUp, FaQuestionCircle } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

// Container for the whole page
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 40px 20px; /* Increased padding for a spacious feel */
  background: #252525; /* Light gradient background */
  color: #333; /* Dark text for readability */
  font-family: 'Roboto', sans-serif; /* Use Google Font */
`;

// Heading style
const Heading = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 30px;
  color: #febb12;
  font-weight: 700;
`;

// Container for the FAQ section
const FAQContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

// Style for each FAQ item
const FAQItem = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  border: 1px solid #ddd;
  padding: 20px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  margin-bottom: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;

  &:hover {
    background-color: #f9f9f9; 
    transform: translateY(-2px); 
  }
`;

// Container for the question and arrow
const QuestionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

// Style for the question text
const Question = styled.div`
  font-size: 1.6rem;
  font-weight: 500; 
  color: #2c3e50; 
  flex-grow: 1;
  display: flex;
  align-items: center;
`;

const QuestionIcon = styled(FaQuestionCircle)`
  margin-right: 10px; 
  color: #3498db; 
`;

// Style for the answer text
const Answer = styled.div`
  max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
  overflow: hidden;
  transition: max-height 0.6s ease, padding 0.6s ease;
  padding: ${({ isOpen }) => (isOpen ? '10px 0' : '0')};
  font-size: 1.4rem; 
  color: #555; 
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  transition: opacity 0.3s ease;
`;

// Style for the dropdown arrow
const Arrow = styled.div`
  transition: transform 0.3s ease;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0)')};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem; 
  color: #3498db; 
`;

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'Whom is this training suitable for?',
      answer: 'Anyone interested in learning stock market from scratch is welcome to join the course.'
    },
    {
      question: 'Is laptop mandatory to attend the training?',
      answer: 'No, a laptop is not mandatory to attend the training. However, having a laptop is highly recommended as it enhances your learning experience.'
    },
    {
      question: 'Do I need to pay entire fees at once?',
      answer: 'Yes, you need to pay the entire fees at once.'
    },
    {
      question: 'How long will this training last?',
      answer: 'The training duration is of 45 days, excluding weekends, with one year of handholding support.'
    },
    {
      question: 'Will I be able to trade independently after this training ends?',
      answer: 'Absolutely Yes, many individuals successfully pursue trading as a full-time career after this course.'
    },
    {
      question: 'Will I receive a certificate of course completion?',
      answer: 'Yes, you will.'
    },
  ];

  return (
    <PageContainer>
      <Helmet>
        <title>Frequently Asked Questions | Stock Archery</title>
        <meta name="description" content="Find answers to common questions about our capital markets training, including suitability, laptop requirements, fees, training duration, certification, and more." />
        <meta name="keywords" content="FAQ, capital markets training, Stock Archery, trading education, financial markets, trading course, stock market questions" />
        <meta property="og:title" content="Frequently Asked Questions | Stock Archery" />
        <meta property="og:description" content="Find answers to common questions about our capital markets training, including suitability, laptop requirements, fees, training duration, certification, and more." />
        <meta property="og:image" content="./images/faq-image.svg" />
        <meta property="og:url" content="https://www.stockarchery.com/faq" />
      </Helmet>

      <Heading>Frequently Asked Questions</Heading>
      <FAQContainer>
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            onClick={() => toggleAnswer(index)}
            role="button"
            aria-expanded={openIndex === index}
            aria-controls={`answer-${index}`}
            tabIndex="0"
          >
            <QuestionContainer>
              <Question>
                <QuestionIcon />
                {faq.question}
              </Question>
              <Arrow isOpen={openIndex === index}>
                {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </Arrow>
            </QuestionContainer>
            <Answer id={`answer-${index}`} isOpen={openIndex === index}>
              {faq.answer}
            </Answer>
          </FAQItem>
        ))}
      </FAQContainer>
    </PageContainer>
  );
};

export default FAQ;