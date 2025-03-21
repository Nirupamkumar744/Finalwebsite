import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

const AboutPage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const containerStyle = {
    width: '100%',
    marginBottom: 'none',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: 'rgba(37, 37, 37, 1)',
    color: '#febb12',
  };

  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: isMobile ? 'column' : 'row',
    marginBottom: '40px',
    textAlign: isMobile ? 'center' : 'left',
    gap: isMobile ? '20px' : '40px',
  };

  const imageStyle = {
    width: isMobile ? '100%' : '60%',
    maxWidth: isMobile ? '300px' : '500px',
    height: isMobile ? 'auto' : '400px',
    objectFit: 'cover',
    borderRadius: '10px',
    marginBottom: isMobile ? '20px' : '0',
  };

  const textContainerStyle = {
    marginTop: isMobile ? '20px' : '0',
    textAlign: isMobile ? 'center' : 'left',
    flex: 1,
  };

  const titleStyle = {
    fontSize: isMobile ? '2.5rem' : '3rem',
    marginBottom: '20px',
    color: '#febb12',
    fontWeight: 'bold',
  };

  const whiteTextStyle = {
    color: '#fff', // White color
  };

  const paragraphStyle = {
    fontSize: isMobile ? '1.5rem' : '1.8rem',
    lineHeight: '1.6',
    marginBottom: '15px',
    textAlign: 'justify',
    color: '#FDD788',
  };

  const cardsHeaderStyle = {
    fontSize: isMobile ? '2.5rem' : '3rem',
    textAlign: 'center',
    marginBottom: '30px',
    color: '#febb12',
    fontWeight: 'bold',
  };

  const cardsContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    gap: '20px',
    marginBottom: '30px',
  };

  const cardContainerStyle = {
    position: 'relative',
    width: '100%',
    maxWidth: '300px',
    perspective: '1000px',
    margin: '0 auto',
  };

  const flipCardInnerStyle = (isHovered) => ({
    position: 'relative',
    width: '100%',
    height: '350px',
    transition: 'transform 0.6s',
    transformStyle: 'preserve-3d',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    transform: isHovered ? 'rotateY(180deg)' : 'rotateY(0deg)',
  });

  const flipCardFrontStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    backgroundColor: 'rgba(37,37,37,255)',
    color: '#febb12',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    boxSizing: 'border-box',
    borderRadius: '10px',
    overflow: 'hidden',
  };

  const flipCardBackStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    backgroundColor: '#333',
    color: '#FDD788',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    boxSizing: 'border-box',
    transform: 'rotateY(180deg)',
    borderRadius: '10px',
    overflow: 'hidden',
  };

  const cardImageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '10px',
  };

  const cardHeadingStyle = {
    fontSize: isMobile ? '1.8rem' : '2rem',
    margin: '10px 0',
    color: '#febb12',
    fontWeight: 'bold',
  };

  const cardTextStyle = {
    fontSize: isMobile ? '1.6rem' : '1.5rem',
    color: '#FDD788',
  };

  const backHeadingHiddenStyle = {
    display: 'none',
  };

  const cardData = [
    {
      title: 'Live Market Sessions',
      text: 'Our trading floor, the first of its kind in Bihar, offers a unique opportunity to learn and trade during live market.',
      image: 'https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724152392/2nd_s04uzo.jpg',
      backText: 'Join Stock Archery’s live market sessions for real-time trading experience and actionable insights from industry experts. Engage with the market as it unfolds, gaining hands-on learning and immediate feedback from seasoned professionals.',
    },
    {
      title: 'One-on-One Mentorship',
      text: 'Stock Archery offers personalized mentorship, empowering you with tailored guidance and support for success.',
      image: 'https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724152392/3rd_jem2df.jpg',
      backText: 'Our one-on-one mentorship program offers personalized support tailored to your trading needs. Gain expert guidance and customized strategies to navigate the stock market with confidence.',
    },
    {
      title: 'Doubt Clearing Sessions',
      text: 'We are dedicated to sustainable practices that protect the environment and promote a healthier future.',
      image: 'https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724152393/5th_-_Copy_flkcme.jpg',
      backText: 'Resolve your trading challenges with our personalized sessions. Get targeted solutions and expert advice to tackle your specific issues. Our one-on-one discussions provide in-depth support to refine your strategies and enhance your trading confidence.',
    },
    {
      title: '1 Year Handhold Support',
      text: 'We actively engage with and support our local communities through various initiatives and partnerships.',
      image: 'https://res.cloudinary.com/dyrn2eg1j/image/upload/v1726124281/12343_sobrul.webp',
      backText: 'Get a full year of dedicated support with our comprehensive trading program, ensuring continuous progress toward your goals. Enjoy ongoing access to expert guidance, personalized feedback, and strategic insights tailored to your evolving trading needs.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Us | Stock Archery</title>
        <meta name="description" content="Learn about Stock Archery, Bihar’s premier trading floor offering hands-on trading education, live market sessions, and personalized mentorship. Discover our innovative approach and services to enhance your trading skills." />
        <meta name="keywords" content="Stock Archery, trading education, live market sessions, one-on-one mentorship, trading support, Bihar" />
        <meta property="og:title" content="About Us | Stock Archery" />
        <meta property="og:description" content="Discover Stock Archery's premier trading floor in Bihar. Learn about our live market sessions, one-on-one mentorship, and year-long support programs designed to enhance your trading skills." />
        <meta property="og:image" content="./images/about1.svg" />
        <meta property="og:url" content="https://www.stockarchery.com/about" />
      </Helmet>

      <div style={containerStyle}>
        <section style={headerStyle}>
          <img src="https://res.cloudinary.com/dyrn2eg1j/image/upload/v1726124858/Screenshot__33_-removebg-preview_eltals.png" alt="About Stock Archery" style={imageStyle} />
          <div style={textContainerStyle}>
            <h1 style={titleStyle}>
              <span style={whiteTextStyle}>ABOUT</span> US
            </h1>
            <p style={paragraphStyle}>
            Stock Archery is Bihar’s leading stock market training center and trading floor, offering hands-on education during live market sessions. With expert trainers providing step-by-step guidance, students gain real-time trading experience and master essential skills. Our practical approach ensures learning by doing — trading alongside seasoned professionals. Whether you're a beginner or seeking advanced skills, Stock Archery offers tailored classes to achieve your goals. Experience the future of stock market education in Bihar and elevate your success today.
            </p>
          </div>
        </section>

        <h1 style={cardsHeaderStyle}>
          <span style={whiteTextStyle}>Our</span> Services
        </h1>

        <div style={cardsContainerStyle}>
          {cardData.map((card, i) => (
            <div
              key={i}
              style={cardContainerStyle}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
              role="region"
              aria-labelledby={`card-${i}-title`}
            >
              <div style={flipCardInnerStyle(hoveredCard === i)}>
                <div style={flipCardFrontStyle}>
                  <img src={card.image} alt={`Image representing ${card.title}`} style={cardImageStyle} />
                  <strong>
                    <h2 id={`card-${i}-title`} style={cardHeadingStyle}>{card.title}</h2>
                  </strong>
                  <p style={cardTextStyle}>{card.text}</p>
                </div>
                <div style={flipCardBackStyle}>
                  <h2 style={backHeadingHiddenStyle} aria-hidden="true">{card.title}</h2>
                  <p style={cardTextStyle}>{card.backText}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutPage;
