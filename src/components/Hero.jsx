import React from "react";
import styled from "styled-components";
import "../index.css";

//COMPONENTS:
import Button from "./Button";

//ASSETS:
import { RiGroupLine } from "react-icons/ri";
import Image from "../assets/images/background.png";

function Hero() {
  return (
    <Container>
      <div className="container content">
        <div className="text">
          <h2 className="description">
            Welcome to your <b className="highlight">PhoneBook!</b>
          </h2>
          <p className="description">
            Please <i className="highlight">Login/Reigister</i>
          </p>
          <a href="register">
            <Button
              className="btn"
              text="Join PhoneBook"
              icon={<RiGroupLine />}
            />
          </a>
          <p className="description">
            Find out more about this{" "}
            <b className="highlight">
              <i>marvelous</i>{" "}
            </b>
            app.
          </p>
          <a href="/">
            <Button
              className="btn"
              text="Go to PhoneBook"
              icon={<RiGroupLine />}
            />
          </a>
        </div>
      </div>
      <div className="image-container">
        <div className="image">
          <img src={Image} alt="background" />
        </div>
        <div className="ellipse-container">
          <div className="ellipse pink" />
          <div className="ellipse orange" />
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-size: 32px;
  margin: 0 6rem;
  .content {
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: flex-start;
    color: #babbbb;
    h2 {
      text-transform: uppercase;
      letter-spacing: 0.1rem;
    }
    p {
      font-size: 1.5vw;
    }

    .text {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      align-items: flex-start;
      .highlight {
        color: var(--primary-color);
      }
    }
    a {
      text-decoration: none;
    }
  }
  .image-container {
    text-align: center;
    position: relative;
    z-index: 10;
    .image {
      img {
        width: 39vw;
      }
    }
    .ellipse-container {
      .ellipse {
        z-index: -1;
        position: absolute;
        height: 15rem;
        width: 15rem;
        filter: blur(100px);
      }
      .pink {
        top: 40%;
        right: 40%;
        background-color: var(--pink);
      }
      .orange {
        bottom: 40%;
        left: 40%;
        background-color: var(--orange);
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    font-size: 0.7rem;
    display: flex;
    flex-direction: column;
    margin-left: -30px;
    .container {
      display: flex;
      justify-content: center;
      align-items: center;

      .text {
        margin-left: 1rem;
        h2 {
        }
        .description {
          font-size: 1rem;
          display: flex;
          flex-direction: column;
        }
      }
    }
    .image-container {
      position: absolute;
      right: 0;
      top: 30%;

      .image {
        img {
          height: 20rem;
        }
      }
      .ellipse-container {
        .ellipse {
          height: 10rem;
          width: 10rem;
          filter: blur(60px);
        }
        .pink {
          right: 40%;
          top: 25%;
        }
        .orange {
          left: 40%;
        }
      }
    }
  }
`;

export default Hero;
