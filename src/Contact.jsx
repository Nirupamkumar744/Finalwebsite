import React from "react";
import styled from "styled-components";
import { db } from "./components/firebase";
import { collection, addDoc } from "firebase/firestore";

const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = {
      username: form.username.value,
      phonenumber: form.phonenumber.value,
      message: form.message.value,
      tradingExperience: form.tradingExperience.value,
      city: form.city.value,
      occupation: form.occupation.value,
    };

    try {
      const today = new Date().toISOString().split("T")[0];
      await addDoc(collection(db, today), formData);
      alert("Message sent successfully!");
    } catch (e) {
      console.error("Error adding document: ", e);
      alert("Error sending message, please try again.");
    }

    form.reset();
  };

  const Wrapper = styled.section`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url("https://source.unsplash.com/1600x900/?finance,technology") no-repeat center;
    background-size: cover;
    padding: 2rem;

    .container {
      background: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(15px);
      border-radius: 15px;
      padding: 3rem;
      width: 100%;
      max-width: 500px;
      text-align: center;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
      border: 2px solid rgba(255, 255, 255, 0.3);
    }

    h2 {
      font-size: 2rem;
      color: #222; /* Dark color for better visibility */
      margin-bottom: 1.5rem;
      font-weight: 700;
      text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3); /* Soft shadow for readability */
      background: rgba(255, 255, 255, 0.6); /* Light background for contrast */
      padding: 0.5rem 1rem;
      border-radius: 8px;
      display: inline-block;
    }

    .contact-form {
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
    }

    input,
    textarea {
      width: 100%;
      padding: 1rem;
      border: 1px solid rgba(255, 255, 255, 0.6);
      border-radius: 10px;
      font-size: 1rem;
      background: rgba(255, 255, 255, 0.9); /* White background for inputs */
      color: #222;
      outline: none;
      transition: all 0.3s ease;

      &::placeholder {
        color: #555;
      }

      &:focus {
        background: #fff;
        border-color: #ff7eb3;
        box-shadow: 0 0 10px rgba(255, 126, 179, 0.5);
      }
    }

    textarea {
      resize: none;
      min-height: 120px;
    }

    .submit-btn {
      background: linear-gradient(135deg, #ff7eb3, #ff5f9e);
      color: #fff;
      border: none;
      padding: 1rem;
      font-size: 1.2rem;
      border-radius: 10px;
      cursor: pointer;
      transition: all 0.3s ease-in-out;

      &:hover {
        background: linear-gradient(135deg, #ff5f9e, #ff3b80);
        transform: translateY(-3px);
      }
    }
  `;

  return (
    <Wrapper>
      <div className="container">
        <h2>Get in Touch</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <input type="text" name="username" placeholder="Your Name" required />
          <input type="tel" name="phonenumber" placeholder="Phone Number" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <input type="text" name="tradingExperience" placeholder="Trading Experience" />
          <input type="text" name="city" placeholder="City" />
          <input type="text" name="occupation" placeholder="Occupation" />
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </Wrapper>
  );
};

export default Contact;
