import React from "react";

//STYLES
import styled from "styled-components";
import "../index.css";

// ASSESTS
import { BsArrowRightShort } from "react-icons/bs";

function Button({ icon, text }, props) {
  if (icon === undefined) icon = <BsArrowRightShort />;
  return (
    <Btn>
      {icon} {text}
    </Btn>
  );
}

const Btn = styled.button`
  background-color: var(--primary-color);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-weight: bold;
  gap: 1rem;
  margin: 1rem;
  text-decoration: none;
  cursor: pointer;
  padding: 1rem 3rem;
  border-radius: 2rem;
  border: solid 3px transparent;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0)
    ),
    linear-gradient(101deg, var(--primary-color), var(--orange));
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 2px 1000px 1px var(--background) inset;
  transition: 0.5s ease-in-out;
  cursor: pointer;
  color: var(--primary-color);

  font-weight: bold;
  &:hover {
    box-shadow: none;
    color: #333;
    font-weight: bold;
  }
  svg {
    font-size: 1.5rem;
    color: #333;
    font-weight: bold;
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    padding: 0.5rem 1rem;
    margin: 0.7rem;
    svg {
      font-size: 1rem;
    }
  }
`;

export default Button;
