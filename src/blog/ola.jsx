const styles = {
  body: {
    margin: 0,
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
    overflowX: 'hidden',
  },
  header: {
    backgroundImage: 'url(https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724395871/Grey_minimalist_business_project_presentation_eqv2bp.png)', // Replace with your image URL
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    padding: '30px 20px',
    width: '100%',
    height: '280px',
    minHeight: '198px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    animation: 'fadeIn 1s ease-in-out',
    textAlign: 'center',
    position: 'relative',
    left: '2px',
    right: '2px',
    marginTop: '2px',
  },
  headerH1: {
    fontSize: '2.5em',
    margin: 0,
    animation: 'slideIn 1s ease-out',
  },
  main: {
    padding: '20px',
    width: '100%',
    boxSizing: 'border-box',
    backgroundColor: '#fff',
  },
  h1: {
    fontSize: '2.5em',
    color: '#333',
    marginBottom: '20px',
    transition: 'color 0.3s ease',
  },
  h1Hover: {
    color: '#4CAF50',
  },
  h2: {
    fontSize: '1.8em',
    color: '#555',
    marginTop: '20px',
    marginBottom: '10px',
    fontWeight: 'bold',
    textAlign: 'left', // Align text to the left
    transition: 'color 0.3s ease',
  },
  h2Hover: {
    color: '#4CAF50',
  },
  p: {
    lineHeight: '1.8',
    color: '#000000',
    marginBottom: '20px',
    textAlign: 'justify',
  },
  socialIcons: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
  socialIcon: {
    textDecoration: 'none',
    margin: '0 10px',
    fontSize: '24px',
    color: '#007BFF', // Blue color for social icons
    transition: 'color 0.3s ease, transform 0.3s ease',
  },
  socialIconHover: {
    color: '#0056b3', // Darker blue for hover effect
    transform: 'scale(1.2)',
  },
  socialIconInner: {
    background: 'none', // Remove background
    border: 'none', // Remove border
    padding: '0', // Remove padding
    borderRadius: '0', // Remove border radius
  },
};

const BlogPage = () => {
  return (
    <div style={styles.body}>
      {/* Banner */}
      <header style={styles.header}>
        
      </header>

      {/* Main Content */}
      <main style={styles.main}>
        <h1 style={styles.h1}>Ola Electric IPO Success: Journey, Milestones, and Market Impact</h1>

        <h2 style={styles.h2}>The Birth of Ola Electric</h2>
        <p style={styles.p}>
          Ola Electric was officially founded in 2017, but its roots trace back to the larger vision of Bhavish Aggarwal, the co-founder of Ola Cabs. Recognizing the global shift towards sustainable transportation and the Indian government's push for electric mobility, Aggarwal envisioned an electric ecosystem that would encompass not just vehicles but also the infrastructure required to support them.
          Ola Electric's mission was clear from the start: to create affordable, high-performance electric vehicles that could replace traditional internal combustion engine (ICE) vehicles in India. This vision was aligned with India's National Electric Mobility Mission Plan, which aimed to achieve significant electrification of the automobile industry by 2030.
        </p>

        <h2 style={styles.h2}>Early Challenges and Strategic Alliances</h2>
        <p style={styles.p}>
          The journey to building a robust electric vehicle company was fraught with challenges. In a market dominated by ICE vehicles, the acceptance of electric vehicles (EVs) was a significant hurdle. Concerns about range anxiety, charging infrastructure, and the high initial cost of EVs were major roadblocks.
          To address these issues, Ola Electric adopted a multi-pronged strategy. The company started by focusing on electric two-wheelers, a segment that had a higher acceptance rate among Indian consumers due to lower costs and easier urban mobility. This decision proved crucial as it allowed Ola Electric to establish a foothold in the burgeoning EV market.
          In 2018, Ola Electric raised $56 million in its first funding round from Tiger Global and Matrix Partners. This funding was instrumental in accelerating the company's R&D efforts and scaling its production capabilities.
        </p>

        <h2 style={styles.h2}>The Ola Electric Scooter: A Game Changer</h2>
        <p style={styles.p}>
          In 2020, Ola Electric unveiled its first electric scooter, the Ola S1, which was met with widespread acclaim. The scooter was designed to be both affordable and technologically advanced, with features such as app-based keyless entry, voice controls, and a robust battery pack offering a range of over 100 kilometers on a single charge.
          The Ola S1's launch was a pivotal moment for the company. It not only demonstrated Ola Electric's ability to deliver a high-quality product but also set new standards in the Indian EV market. The scooter's success was underpinned by Ola's investment in a sprawling manufacturing facility in Krishnagiri, Tamil Nadu, dubbed the 'Futurefactory.'
        </p>

        <h2 style={styles.h2}>The Futurefactory: A Vision Realized</h2>
        <p style={styles.p}>
          The Futurefactory, one of the world's largest electric two-wheeler production facilities, is a testament to Ola Electric's ambitious vision. Spread over 500 acres, the factory has an annual production capacity of 10 million vehicles, making it the largest of its kind globally.
          This facility is a critical component of Ola Electric's strategy to scale its operations and meet the growing demand for electric vehicles. The factory is also a shining example of sustainable manufacturing, powered entirely by renewable energy sources, and is expected to be the world's first carbon-negative two-wheeler factory.
        </p>

        <p style={styles.p}>
          In conclusion, Ola Electric's remarkable performance in the stock market is a reflection of its strategic vision, innovative product offerings, and strong market fundamentals. As the company continues to expand and capture a larger share of the electric vehicle market, it is likely to maintain its position as a leading player in the industry.
        </p>

        {/* Social Media Icons */}
        <div style={styles.socialIcons}>
          <a href="https://twitter.com/share?url=https://stockarchery.in/ola&text=Check%20out%20this%20blog%20page%20I%20found" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>
            <i className="fab fa-twitter" style={styles.socialIconInner}></i>
          </a>
          <a href="https://www.facebook.com/sharer/sharer.php?u=https://stockarchery.in/ola" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>
            <i className="fab fa-facebook-f" style={styles.socialIconInner}></i>
          </a>
          <a href="https://wa.me/?text=https://stockarchery.in/ola" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>
            <i className="fab fa-whatsapp" style={styles.socialIconInner}></i>
          </a>
          <a href="https://t.me/share/url?url=https://stockarchery.in/ola&text=Check%20out%20this%20blog%20page%20I%20found" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>
            <i className="fab fa-telegram" style={styles.socialIconInner}></i>
          </a>
          <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://stockarchery.in/ola" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>
            <i className="fab fa-linkedin" style={styles.socialIconInner}></i>
          </a>
        </div>
      </main>

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes slideIn {
            from { transform: translateY(-20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }

          @media (max-width: 768px) {
            header {
              padding: 30px 10px;
            }
            header h1 {
              font-size: 2em;
            }
            main {
              padding: 15px;
            }
            h1 {
              font-size: 2em;
            }
            h2 {
              font-size: 1.5em;
            }
            .social-icons a {
              margin: 0 8px;
              font-size: 20px;
            }
          }

          @media (max-width: 480px) {
            header {
              padding: 20px 5px;
            }
            header h1 {
              font-size: 1.5em;
            }
            main {
              padding: 10px;
            }
            h1 {
              font-size: 1.8em;
            }
            h2 {
              font-size: 1.3em;
            }
            .social-icons {
              flex-direction: row;
              align-items: center;
            }
            .social-icons a {
              margin: 5px 5px;
              font-size: 18px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default BlogPage;
