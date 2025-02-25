const styles = {
  body: {
    margin: 0,
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
    overflowX: 'hidden',
  },
  header: {
    backgroundImage: 'url(https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724396033/Simple_Presentation_in_Pink_Lilac_Pastel_Blobs_Basic_Style_wul5th.png)', // Replace with your image URL
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
  h3:{
    fontSize: '1.0em',
    color: '#000000',
   
    transition: 'color 0.3s ease',
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
        <h1 style={styles.h1}>Zerodha Cancels Referral Program</h1>

        <h2 style={styles.h2}>Introduction</h2>
        <p style={styles.p}>
        Zerodha, India's largest stockbroker, has recently announced the cancellation of its popular referral program. This decision has stirred conversations in the financial community, as the referral program was a significant part of Zerodha's customer acquisition strategy. In this report, we will explore the reasons behind this decision, its potential impact, and what it means for Zerodha and its users.
        </p>

        <h2 style={styles.h2}>Background of Zerodha's Referral Program</h2>
        <p style={styles.p}>
        Zerodha's referral program was introduced as an innovative way to incentivize existing users to bring new customers to the platform. The program offered monetary rewards or brokerage credits to those who referred new users who successfully opened trading accounts with Zerodha. This approach not only helped Zerodha grow its user base rapidly but also created a strong community of traders who were actively engaged with the platform.
        </p>

        <h2 style={styles.h2}>Why Zerodha Cancelled the Referral Program</h2>
        <p style={styles.p}>
        There are several reasons behind Zerodha's decision to cancel its referral program:
        </p>
       <ol>
        <li><p style={styles.p}><h3 style={styles.h3}>Regulatory Compliance:</h3> The financial industry in India is heavily regulated. The Securities and Exchange Board of India (SEBI) has been tightening regulations around promotional activities, including referral programs, to ensure transparency and protect investors. Zerodha's decision could be influenced by the need to comply with these evolving regulations, thereby avoiding potential legal issues.</p></li>
        <li><p style={styles.p}><h3 style={styles.h3}>Sustainability Concerns:</h3> As Zerodha's user base grew, the cost of maintaining the referral program may have become unsustainable. The company might have found that the expenses associated with rewarding referrals were outweighing the benefits, especially as the program matured and the rate of new user acquisition slowed down.</p></li>
        <li><p style={styles.p}><h3 style={styles.h3}>Focus on Organic Growth:</h3> Zerodha has always emphasized the importance of organic growth and providing value through its products and services. By canceling the referral program, the company may be aiming to shift its focus entirely to organic user acquisition strategies, such as content marketing, educational initiatives, and word-of-mouth.</p></li>
       </ol>

       <h2 style={styles.h2}>Impact on Users and the Market</h2>
       <p style={styles.p}>The cancellation of the referral program is likely to have mixed reactions among Zerodha's users. While some may be disappointed by the loss of an incentive to refer friends and family, others might appreciate the company's focus on improving its core services. In the long term, this decision could lead to a more sustainable and customer-centric approach, which may benefit both users and Zerodha.</p>

       <h2 style={styles.h2}>Conclusion</h2>
       <p style={styles.p}>Zerodha's decision to cancel its referral program reflects its commitment to regulatory compliance, sustainable growth, and enhancing the user experience. While this move may seem surprising to some, it is likely a strategic decision aimed at positioning the company for long-term success in a rapidly evolving market. Users and stakeholders should view this change as a part of Zerodha's broader strategy to maintain its leadership position in the Indian stockbroking industry.</p>
       


        {/* Social Media Icons */}
        <div style={styles.socialIcons}>
          <a href="https://twitter.com/share?url=https://stockarchery.in/ref&text=Check%20out%20this%20blog%20page%20I%20found" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>
            <i className="fab fa-twitter" style={styles.socialIconInner}></i>
          </a>
          <a href="https://www.facebook.com/sharer/sharer.php?u=https://stockarchery.in/ref" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>
            <i className="fab fa-facebook-f" style={styles.socialIconInner}></i>
          </a>
          <a href="https://wa.me/?text=https://stockarchery.in/ref" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>
            <i className="fab fa-whatsapp" style={styles.socialIconInner}></i>
          </a>
          <a href="https://t.me/share/url?url=https://stockarchery.in/ref&text=Check%20out%20this%20blog%20page%20I%20found" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>
            <i className="fab fa-telegram" style={styles.socialIconInner}></i>
          </a>
          <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://stockarchery.in/ref" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>
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
