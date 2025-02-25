const styles = {
  body: {
    margin: 0,
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
    overflowX: 'hidden',
  },
  header: {
    backgroundImage: 'url(https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724921355/Screenshot_19_xwzfao.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    padding: '60px 20px',
    width: '100%',
    height: '280px',
    minHeight: '198px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  headerH1: {
    fontSize: '3em',
    margin: 0,
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    animation: 'slideIn 1s ease-out',
  },
  main: {
    padding: '20px',
    width: '100%',
    boxSizing: 'border-box',
    backgroundColor: '#fff',
    animation: 'fadeIn 1.5s ease-in-out',
  },
  section: {
    marginBottom: '40px',
  },
  sectionHeader: {
    fontSize: '2.2em',
    color: '#333',
    marginBottom: '20px',
    borderBottom: '2px solid #ddd',
    paddingBottom: '10px',
    animation: 'fadeInUp 1s ease-in-out',
  },
  p: {
    lineHeight: '1.8',
    color: '#000000',
    marginBottom: '20px',
    textAlign: 'justify',
    animation: 'fadeInUp 1.4s ease-in-out',
  },
  imageGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
    marginTop: '20px',
  },
  imageCard: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  imageCardOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.5em',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },
  imageCardOverlayHover: {
    opacity: 1,
  },
  fullWidthImageSection: {
    width: '100%',
    margin: '40px 0',
    position: 'relative',
  },
  fullWidthImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '12px',
  },
  socialIcons: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
    animation: 'fadeIn 1.6s ease-in-out',
  },
  socialIcon: {
    textDecoration: 'none',
    margin: '0 10px',
    fontSize: '24px',
    color: '#007BFF',
    transition: 'color 0.3s ease, transform 0.3s ease',
  },
  socialIconHover: {
    color: '#0056b3',
    transform: 'scale(1.2)',
  },
  socialIconInner: {
    background: 'none',
    border: 'none',
    padding: '0',
    borderRadius: '0',
  },
};

const BlogPage = () => {
  return (
    <div style={styles.body}>
      {/* Banner */}
      <header style={styles.header}>
        <h1 style={styles.headerH1}>IT Stocks Propel Nifty to Fresh All-Time High</h1>
      </header>

      {/* Main Content */}
      <main style={styles.main}>
        <section style={styles.section}>
        
          <p style={styles.p}>
          The Indian stock market witnessed a significant surge today as the Nifty 50 index reached a fresh all-time high, driven primarily by gains in IT stocks. Major IT companies like TCS, Infosys, and Wipro reported better-than-expected quarterly earnings, which bolstered investor confidence. The global demand for IT services, fueled by digital transformation, cloud computing, and remote work solutions, has positioned Indian IT companies at the forefront, leading to a strong performance in their stock prices. This sector's positive outlook has further spurred buying interest, contributing to the rally. Additionally, the broader market sentiment remains bullish, with sectors such as banking, finance, and FMCG also showing gains. The Sensex, another key benchmark index, mirrored this trend, climbing over 250 points, reflecting strong overall market momentum.
          </p>

          {/* Image Grid */}
          <div style={styles.imageGrid}>
            <div style={styles.imageCard}>
              <img
                src="https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724920780/Screenshot_16_oa5p7v.png"
                alt="Stock Market Surge"
                style={{ width: '100%', height: 'auto' }}
              />
              <div style={styles.imageCardOverlay}>Market Surge</div>
            </div>
            <div style={styles.imageCard}>
              <img
               src="https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724921355/Screenshot_19_xwzfao.png"
                alt="IT Stocks"
                style={{ width: '100%', height: 'auto' }}
              />
              <div style={styles.imageCardOverlay}>IT Stocks Lead</div>
            </div>
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionHeader}>Key Highlights</h2>
          <p style={styles.p}>
            ⭐<strong>Nifty 50 Hits Record High:</strong> The Nifty 50 index surged to an all-time high,
            crossing the previous records and setting a new benchmark.
          </p>
          <p style={styles.p}>
            ⭐<strong>Sensex Gains Over 250 Points:</strong> The Sensex followed suit, gaining over 250 points. This rise is indicative of a broader market rally, with several sectors contributing to the positive momentum, though IT remains the standout performer.
          </p>
          <p style={styles.p}>
            ⭐<strong>Strong Performance of IT Stocks:</strong>Leading IT companies like TCS, Infosys, and Wipro were among the top gainers in today’s trade. The sector’s growth can be attributed to several factors, including robust quarterly earnings, positive outlooks, and increasing demand for IT services globally.
          </p>
        </section>

        <section style={styles.fullWidthImageSection}>
          <img
            src="https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724920893/Screenshot_17_zimagw.png"
            alt="Nifty 50 Record High"
            style={styles.fullWidthImage}
          />
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionHeader}>Factors Driving the Rally</h2>
          <p style={styles.p}>
            ➡️<strong>Robust Earnings Reports:</strong> Several IT companies have posted better-than-expected
            quarterly results, which have bolstered investor sentiment.
          </p>
          <p style={styles.p}>
            ➡️<strong>Positive Market Sentiment:</strong>Overall, market sentiment has been buoyant, with investors showing optimism about the growth prospects of the Indian economy. The IT sector, being a major growth driver, has naturally benefited from this optimism..
          </p>
          <p style={styles.p}>
            ➡️<strong>Global Demand for IT Services:</strong> Several IT companies have posted better-than-expected
            quarterly results, which have bolstered investor sentiment.
          </p>
          <p style={styles.p}>
            ➡️<strong>Favorable Economic Indicators:</strong> Recent economic data points, such as improved GDP growth rates and lower inflation, have also contributed to the positive market sentiment. The Indian economy’s resilience in the face of global challenges has instilled confidence among investors.
          </p>
          <p style={styles.p}>
            ➡️<strong>Foreign Institutional Investments (FII):</strong> The Indian stock market has seen a steady inflow of foreign institutional investments, particularly in the IT sector. The consistent investment flow from global investors has further fueled the rally in IT stocks.
          </p>
        </section>

        {/* Social Media Icons */}
        <div style={styles.socialIcons}>
          <a
            href="https://twitter.com/share?url=https://stockarchery.in/it&text=Check%20out%20this%20blog%20page%20I%20found"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.socialIcon}
          >
            <i className="fab fa-twitter" style={styles.socialIconInner}></i>
          </a>
          <a
            href="https://www.facebook.com/sharer/sharer.php?u=https://stockarchery.in/it"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.socialIcon}
          >
            <i className="fab fa-facebook-f" style={styles.socialIconInner}></i>
          </a>
          <a
            href="https://wa.me/?text=https://stockarchery.in/it"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.socialIcon}
          >
            <i className="fab fa-whatsapp" style={styles.socialIconInner}></i>
          </a>
          <a
            href="https://t.me/share/url?url=https://stockarchery.in/it&text=Check%20out%20this%20blog%20page%20I%20found"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.socialIcon}
          >
            <i className="fab fa-telegram" style={styles.socialIconInner}></i>
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https://stockarchery.in/it"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.socialIcon}
          >
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

          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .imageCard:hover .imageCardOverlay {
            opacity: 1;
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
            h2 {
              font-size: 1.5em;
            }
            img {
              margin: 10px auto;
              display: block;
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
            h2 {
              font-size: 1.3em;
            }
            img {
              margin: 10px auto;
              display: block;
            }
          }
        `}
      </style>
    </div>
  );
};

export default BlogPage;