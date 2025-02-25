import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: green;
  color: white;
  border: none;
  border-radius: 12px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #004d00; /* Darker green on hover */
  }

  svg {
    margin-right: 8px;
  }
`;

const FixedButton = styled(Button)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000; /* Ensures the button is above other elements */
`;

const WhatsAppButton = () => {
  const handleClick = () => {
    const phoneNumber = '+917645086121';
    const message = 'Hi, I was just checking out your website, and Im interested in learning more about your trading floor and live market sessions. Can you provide me with more details?';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <FixedButton onClick={handleClick}>
      <FaWhatsapp />
      Contact Us
    </FixedButton>
  );
};

export default WhatsAppButton;
