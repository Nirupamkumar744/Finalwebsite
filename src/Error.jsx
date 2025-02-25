import React from "react";
import styled from "styled-components";
import { Button } from "./styles/Button";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <Wrapper>
      <img src="../images/error.svg" alt="error" />
      <NavLink to="/">
        <Button className="btn">Go Back</Button>
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  img {
    max-width: 100%;
    height: auto;
  }

  .btn {
    font-size: 1.8rem;
    margin-top: 3rem;
    padding: 1rem 2rem;
  }

  @media (max-width: 768px) {
    padding: 5rem 2rem;

    .btn {
      font-size: 1.6rem;
      margin-top: 2rem;
      padding: 0.8rem 1.6rem;
    }
  }

  @media (max-width: 480px) {
    padding: 4rem 1rem;

    .btn {
      font-size: 1.4rem;
      margin-top: 1.5rem;
      padding: 0.6rem 1.2rem;
    }
  }
`;

export default Error;
