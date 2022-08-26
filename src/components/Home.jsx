import React from "react";

// Style
import styled from "styled-components";
import "../index.css";

//ASSETS
// import background from "../assets/images/background.png";
import Hero from "../components/Hero";

function Home() {
  return (
    <Section id="home" className="home">
      <Hero id="hero" />
    </Section>
  );
}

const Section = styled.div`
  margin: 3rem auto;
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    padding: 1rem;
    position: relative;
    margin-top: 1rem;
  }
`;

export default Home;
