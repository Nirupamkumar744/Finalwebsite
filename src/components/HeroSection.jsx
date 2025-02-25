import React from "react";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { useGlobalContext } from "../context";
import { Link } from "react-scroll"; // Import react-scroll

const HeroSection = () => {
  const { image, paragraph } = useGlobalContext();

  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-data" role="banner" aria-labelledby="hero-heading">
          <h1 id="hero-heading" className="hero-heading">
            <span className="stock">Stock</span> <span className="archery">Archery</span>
          </h1>
          <p className="hero-para">{paragraph}</p>
          <Link
            to="sections-page"
            smooth={true}
            duration={500}
            aria-label="Learn more about our services"
          >
            <Button className="btn hireme-btn">
              Know more
            </Button>
          </Link>
        </div>

        <div className="section-hero-image" role="figure" aria-labelledby="hero-image-caption">
          <picture>
            <img src={image} alt="Hero illustration showing archery" className="hero-img" />
          </picture>
          <figcaption id="hero-image-caption" className="sr-only">Hero illustration showing archery equipment and practice.</figcaption>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: rgba(37, 37, 37, 1); /* Corrected RGBA value */

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 1;
  }

  .btn {
    max-width: 16rem;
    background-color: #febb12;
    border: none;
    transition: background-color 0.3s ease;
  }

  .btn:hover {
    background-color: #fdd788; /* Slightly lighter on hover */
  }

  .hero-heading {
    text-transform: uppercase;
    font-size: 6.4rem;
  }

  .stock {
    color: white; /* White color for "Stock" */
  }

  .archery {
    color: #febb12; /* Original color for "Archery" */
  }

  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
    color: #FDD788;
  }

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  picture {
    text-align: center;
    width: 100%;
  }

  .hero-img {
    max-width: 100%;
  }

  /* Optional: Adding a gradient overlay */
  .section-hero-image::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(37, 37, 37, 0.4), rgba(37, 37, 37, 0.1));
    border-radius: 15px; /* Match the image border radius */
    z-index: 0;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
      grid-template-columns: 1fr; /* Stack items vertically on small screens */
    }
  }
`;

export default HeroSection;
