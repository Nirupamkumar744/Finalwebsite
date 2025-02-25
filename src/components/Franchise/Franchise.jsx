import React, { useState, useRef } from "react";
import styles from "./Franchise.module.css"; // Import CSS module
import { db } from "../firebase";
import { collection, doc, setDoc } from "firebase/firestore";
import { GiFireplace } from "react-icons/gi";
import { ImStatsDots } from "react-icons/im";
import { FaMapLocationDot } from "react-icons/fa6";
import { CentreFranchiseData, CentreFranchiseData2, CentreFranchiseData3, CentreFranchiseData4 } from "../CentreFranchise/CentreFranchiseData";
const Franchise = () => {
  const inputRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    phone: "",
    experience: "",
    budget: "",
    startTime: "",
  });

  const handleButtonClick = () => {
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus(); // Move cursor to the input field
      }
    }, 0);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const today = new Date().toISOString().split("T")[0];

    try {
      const enquiryRef = doc(collection(db, "enquiries", today, "submissions"));
      await setDoc(enquiryRef, formData);
      alert("Enquiry submitted successfully!");
      setFormData({
        name: "",
        email: "",
        city: "",
        phone: "",
        experience: "",
        budget: "",
        startTime: "",
      });
    } catch (error) {
      console.error("Error submitting enquiry:", error);
      alert("Failed to submit enquiry.");
    }
    console.log("This is form data " + formData)
  };

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.leftSection}>
          <h1 className={styles.title}>
            <span className={styles.highlight}>
              Stock <span className={styles.highlight2}>Archery</span>
            </span>
          </h1>
          <p className={styles.description}>
            Partner with us to revolutionize financial education in your city and make a lasting impact.
          </p>
          <button onClick={handleButtonClick} className={styles.applyButton}>Apply Now →</button>
        </div>

        {/* Name input */}

        <div className={styles.rightSection}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label htmlFor="name">Full Name <span className={styles.required}>*</span> </label>
              <input ref={inputRef} name="name" type="text" placeholder="Enter your name" required value={formData.name} onChange={handleChange} />
            </div>

            <div className={styles.row}>
              {/* 
Email Input */}

              <div className={styles.inputGroup}>
                <label htmlFor="email">Email <span className={styles.required}>*</span> </label>
                <input name="email" type="email" placeholder="Enter your email" required value={formData.email} onChange={handleChange} />
              </div>

              {/* City Input */}
              <div className={styles.inputGroup}>
                <label htmlFor="city">City <span className={styles.required}>*</span> </label>
                <input name="city" type="text" placeholder="Enter your city" required value={formData.city} onChange={handleChange} />
              </div>
            </div>
            {/* Phone Number Input */}
            <div className={styles.inputGroup}>
              <label htmlFor="phone">Phone Number <span className={styles.required}>*</span> </label>
              <input name="phone" type="tel" placeholder="Enter your phone number" required value={formData.phone} onChange={handleChange} />
            </div>
            {/* Business Experience */}
            <div className={styles.inputGroup}>
              <label>What is your Business Experience <span className={styles.required}>*</span></label>
              <select name="experience" required value={formData.experience} onChange={handleChange}>
                <option value="">Select an option</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Expert">Expert</option>
              </select>
            </div>
            {/* investment budget Input */}
            <div className={styles.inputGroup}>
              <label>What is your investment budget  <span className={styles.required}>*</span></label>
              <select name="budget" required value={formData.budget} onChange={handleChange}>
                <option value="">Select an option</option>
                <option value="5-10 Lakhs">5-10 Lakhs</option>
                <option value="10-15 Lakhs">10-15 Lakhs</option>
                <option value="Above 15 Lakhs">Above 15 Lakhs</option>
              </select>
            </div>

            {/* planning to start Input */}
            <div className={styles.inputGroup}>
              <label>How soon you planning to start  <span className={styles.required}>*</span></label>
              <select name="startTime" required value={formData.startTime} onChange={handleChange}>
                <option value="">Select an option</option>
                <option value="Immediately">Immediately</option>
                <option value="In 1 Month">In 1 Month</option>
                <option value="In 2-3 Months">In 2-3 Months</option>
                <option value="Not Sure">Not Sure</option>
              </select>
            </div>

            <button className={styles.submitButton} type="submit">Send →</button>
          </form>
        </div>
      </div>

      {/* Video Section */}
      <div className={styles.videoSection}>
        <div className={styles.videoWrapper}>
          <video controls className={styles.video}>
          <source src="/pro.webm" type="video/webm" />
            <source src="/pro.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className={styles.videoTextWrapper}>
          <h2 className={styles.videoTitle}>Why Choose Our Franchise?</h2>
          <p className={styles.videoDescription}>
            Become a part of India's leading stock market education platform.
          </p>
        </div>

      </div>

      {/* Minimum Area Required section */}

      <section className={styles.iconCard}>
        <div className={styles.iconContainer}>
          <GiFireplace className={styles.processIcons} color="d88d3c" />
          <h4 className={`${styles.iconTitle} ${styles.iconAreaTitle}`}>Minimum Area Required</h4>
          <p className={styles.iconText}>1000 sqr ft.</p>
        </div>

        <div className={styles.iconContainer}>
          <ImStatsDots className={styles.processIcons} color="3b873e" />
          <h4 className={`${styles.iconTitle} ${styles.iconInvestmentTitle}`}>Investment starts @ INR</h4>
          <p className={styles.iconText}>8 lakhs</p>
        </div>

        <div className={styles.iconContainer}>
          <FaMapLocationDot className={styles.processIcons} color="37439e" />
          <h4 className={`${styles.iconTitle} ${styles.iconLocationTitle}`}>Location</h4>
          <p className={styles.iconText}>India 1 & India 2</p>
        </div>

      </section>

      {/* Centre Franchise Approval Process Section */}

      <section className={styles.approvalProcessContainer}>
        <h1 className={styles.approvalProcessContainerTitle}><span className={styles.approvalProcessContainerSubTitle}>StockArchery  </span>Centre Franchise Approval Process</h1>
        <div className={styles.cardContainer}>
          {CentreFranchiseData.map((data, index) => (
            <div key={index} className={styles.approvalProcessCard}>
              <div className={styles.approvalProcessIcon}>{data.icon}</div>
              <h3 className={styles.approvalProcessTitle}>{data.title}</h3>
              <p className={styles.approvalProcessText}>{data.text}</p>
            </div>
          ))}
        </div>
      </section>



      {/* Why Choose StockArchery Section */}

      <section className={styles.chooseStockArcheryContainer}>
        <h1 className={styles.chooseStockArcheryTitle}>Why Choose <span className={styles.chooseStockArcheryTitleHighlight}>StockArchery</span> ?</h1>
        <div className={styles.chooseStockArcheryCardContainer}>
          {CentreFranchiseData2.map((data, index) => (
            <div key={index} className={styles.chooseStockArcheryCard}>
              <div className={styles.chooseStockArcheryIcon}>{data.icon}</div>
              <p className={styles.chooseStockArcheryText}>{data.title}</p>
            </div>
          ))}
        </div>
      </section>


      {/* OUR CONCEPT Section */}

      <section className={styles.ourConceptContainer}>
        <h1 className={styles.ourConceptContainerTitle}>OUR CONCEPT - <span className={styles.ourConceptContainerSubTitle}>HYBRID LEARNING</span></h1>
        <div className={styles.ourConceptCardContainer}>
          {CentreFranchiseData3.map((data, index) => (
            <div key={index} className={styles.ourConceptCard}>
              <div className={styles.ourConceptCardIcon}>
                {data.icon}
              </div>
              <h3 className={styles.ourConceptCardTitle}>{data.title}</h3>
              <p className={styles.ourConceptCardText}>{data.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Listen from our users & students section */}

      <section className={styles.listenFromUsersContainer}>
        <h1 className={styles.listenFromUsersTitle}>Listen from our users & students</h1>
        <div className={styles.listenFromUsersCardContainer}>
          {CentreFranchiseData4.map((data, index) => (
            <div key={index} className={styles.listenFromUsersCard}>
              <video controls className={styles.listenFromUsersVideo}>
                <source src={data.videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className={styles.videoInfo}>
                <h3>{data.name}</h3>
                <p>{data.role}</p>
                
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Listen from the Founder!! */}
      

    </div>


  );
};

export default Franchise; 