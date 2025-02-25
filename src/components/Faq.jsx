import React, { useState } from 'react';
import styled from 'styled-components';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

// Container for the whole page
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  background-color: rgba(37, 37, 37, 1); /* Corrected RGBA value */
  color: #fff;
`;

// Heading style
const Heading = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 20px;
  color: #febb12;
`;

// Container for the FAQ section
const FAQContainer = styled.div`
  width: 80%;
  max-width: 800px;
  margin: 20px auto;
`;

// Style for each FAQ item
const FAQItem = styled.div`
  background-color: #252525;
  border-radius: 15px; /* Rounded corners */
  border: 2px solid #ddd; /* Border around each question */
  padding: 15px 20px; /* Adjust padding */
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  margin-bottom: 20px; /* Space between FAQ items */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Optional: shadow effect */
  display: flex;
  flex-direction: column;
`;

// Container for the question and arrow
const QuestionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

// Style for the question text
const Question = styled.div`
  font-size: 1.9rem; /* Larger font size */
  font-weight: bold;
  color: #febb12;
  flex-grow: 1;
`;

// Style for the answer text
const Answer = styled.div`
  max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
  overflow: hidden;
  transition: max-height 0.6s ease, padding 0.6s ease;
  padding: ${({ isOpen }) => (isOpen ? '10px 0' : '0')};
  font-size: 1.9rem; /* Larger font size for better readability */
  background-color: #252525;
  color: #fff;
`;

// Style for the dropdown arrow
const Arrow = styled.div`
  transition: transform 0.3s ease;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0)')};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.9rem; /* Adjust size if needed */
  color: #febb12; /* Yellow color for the arrow */
`;

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'Whom is this training suitable for ?',
      answer: 'Anyone intrested in learning stock market from scratch is welcome to join the course.'
    },
    {
      question: 'Is laptop mandatory to attend the training ?',
      answer: 'No, a laptop is not mandatory to attend the training. However, having a laptop is highly recommended as it enhances your learning experience.'
    },
    {
      question: 'Do I need to pay entire fees at once ?',
      answer: 'Yes, you need to pay the entire fees at once.'
    },
    {
      question: 'How long will this training last ?',
      answer: 'The training duration is of 2 months, excluding weekends, with one year of handholding support.'
    },
    {
      question: 'Will I be able to trade independently after this training ends ?',
      answer: 'Absolutely Yes, many individuals successfully pursue trading as a full-time career after this course.'
    },
    {
      question: 'Will I receive a certificate of course completion ?',
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
              <Question>{faq.question}</Question>
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
