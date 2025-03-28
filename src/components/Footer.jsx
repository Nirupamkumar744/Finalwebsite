import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram, faYoutube, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { db, collection, addDoc } from './firebase';

const Footer = () => {
  const [phone, setPhone] = useState('');

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const today = new Date().toISOString().split('T')[0];
      const docRef = await addDoc(collection(db, `submissions`), {
        phone
      });
      console.log("Document written with ID: ", docRef.id);
      setPhone('');
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const phoneNumber = '+919229102334';
  const message = encodeURIComponent('Hi, I was just checking out your website, and Im interested in learning more about your trading floor and live market sessions. Can you provide me with more details?');
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <Wrapper>
      <section className="contact-short" aria-labelledby="contact-short-heading">
        <div className="grid grid-two-column">
          <div className="contact-text">
            <h3 id="contact-short-heading">Talk to us today</h3>
          </div>
          <div className="contact-short-btn">
            <a href={whatsappURL} target="_blank" rel="noopener noreferrer" aria-label="Contact us on WhatsApp">
              <StyledButton>
                <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" aria-hidden="true" />
                <span>Contact Us</span>
              </StyledButton>
            </a>
          </div>
        </div>
      </section>

      <footer aria-labelledby="footer-heading" role="contentinfo">
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <h3 id="footer-heading"><span className="stock">Stock</span> <span className="archery">Archery</span></h3>
            <a href="/" aria-label="Visit our homepage">
              <p>Besides Babulal Sweets, Manik Sarkar Chowk, Adampur, Bhagalpur 812001, Bihar.</p>
            </a>
          </div>

          <div className="footer-subscribe">
            <h3>Feel Free to Contact Us</h3>
            <form onSubmit={handleSubmit} aria-labelledby="subscribe-form-heading">
              <input
                id="phone-input"
                name="phone"
                type="tel"
                required
                autoComplete="off"
                placeholder="Phone number"
                value={phone}
                onChange={handlePhoneChange}
              />
              <input type="submit" value="Submit" aria-label="Submit subscription form" />
            </form>
          </div>

          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="footer-social--icons" role="list">
              <a href="https://www.linkedin.com/company/stockarchery/" target="_blank" rel="noopener noreferrer" aria-label="Follow us on LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} style={{ color: "#0077b5" }} className="icons" />
              </a>
              <a href="https://www.instagram.com/stock.archery/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram">
                <FontAwesomeIcon icon={faInstagram} style={{ color: "#e1306c" }} className="icons" />
              </a>
              <a href="https://www.youtube.com/@stock.archery" target="_blank" rel="noopener noreferrer" aria-label="Follow us on YouTube">
                <FontAwesomeIcon icon={faYoutube} style={{ color: "#ff0000" }} className="icons" />
              </a>
              <a href="https://x.com/stockarchery" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Twitter">
                <FontAwesomeIcon icon={faTwitter} style={{ color: "#0077b5" }} className="icons" />
              </a>
            </div>
          </div>

          <div className="footer-contact">
            <h3>Call Us</h3>
            <a href="tel:+919229102334" aria-label="Call us at +91 9229102334"><h3>+91 9229102334</h3></a>
          </div>
        </div>

        {/* Copyright section */}
        <div className="footer-bottom--section">
          <hr />
          <p className="copyright">
            © {new Date().getFullYear()} Stock Archery. All Rights Reserved.
          </p>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: rgba(37, 37, 37, 255);
    border-radius: 2rem;
    border: 3px solid #febb12;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);

    .grid {
      display: grid;
      gap: 2rem;

      .contact-text {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        color: #febb12;
      }

      .contact-short-btn {
        display: flex;
        justify-content: center;
        align-items: center;

        a {
          text-decoration: none;
        }
      }
    }
  }

  footer {
    padding: 14rem 0 9rem 0;
    background-color: rgba(37, 37, 37, 255);

    h3 {
      color: ${({ theme }) => theme.colors.yellow};
      margin-bottom: 2.4rem;
      font-size: 2rem;
    }

    .stock {
      color: #ffffff;
    }

    .archery {
      color: #febb12;
    }

    p {
      color: #febb12;
      font-size: 1.5rem;
    }

    .footer-social--icons {
      display: flex;
      gap: 2rem;

      .icons {
        font-size: 2.0rem;
        color: inherit;
        cursor: pointer;
      }
    }

    .footer-subscribe {
      form {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        input[type="tel"] {
          width: 250px;
          padding: 0.75rem 1rem;
          border-radius: 1.5rem;
          border: 2px solid ${({ theme }) => theme.colors.yellow};
        }

        input[type="submit"] {
          width: 150px;
          padding: 0.75rem 1rem;
          border-radius: 0.25rem;
          border: 1px solid #febb12;
          background-color: #febb12;
          color: #000000;
          cursor: pointer;
          transition: all 0.3s ease;

          &:hover {
            background-color: #e6c072;
            border-color: #febb12;
          }
        }
      }
    }

    .footer-bottom--section {
      padding-top: 9rem;
      text-align: center;

      hr {
        margin-bottom: 2rem;
        color: ${({ theme }) => theme.colors.hr};
        height: 0.1px;
      }

      .copyright {
        color: #febb12;
        font-size: 1.4rem;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 100%;
      padding: 2rem 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      .grid {
        grid-template-columns: 1fr;
        text-align: center;
      }

      .contact-short-btn {
        margin-top: 2rem;
        justify-self: center;
      }
    }

    footer .footer-bottom--section {
      padding-top: 3.2rem;
    }
  }
`;

const StyledButton = styled.button`
  background-color: #28a745;
  color: #ffffff;
  border: none;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.6rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 1.5rem;

  .whatsapp-icon {
    font-size: 2rem;
  }

  &:hover {
    background-color: #218838;
  }
`;

export default Footer;