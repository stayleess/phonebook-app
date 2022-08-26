import React from "react";
import male from "../assets/images/profile-pic1.png";
import female from "../assets/images/profile-pic3.png";

//STYELS:
import styled from "styled-components";
const ToggleImages = ({ active, handleChangeImage }) => {
  return (
    <Toogle className="toggle-wrapper">
      <p>M/F</p>
      {active ? (
        <img
          className="male"
          src={male}
          alt="male"
          onClick={() => {
            handleChangeImage();
          }}
        />
      ) : (
        <img
          className="female"
          src={female}
          alt="female"
          onClick={() => {
            handleChangeImage();
          }}
        />
      )}
    </Toogle>
  );
};

const Toogle = styled.div`
 
 img{
  cursor: pointer;
 }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    text-align: center;
    }
    svg {
      font-size: 1rem;
    }
  }
`;

export default ToggleImages;
