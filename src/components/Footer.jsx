import React from "react";

// COMPONENTS:
import Button from "./Button";

// STYLES
import styled from "styled-components";
import "../index.css";

// ASSETS
import Logo from "../assets/icons/contact-book.png";

function Footer() {
  const links = [
    {
      title: "Company",
      links: ["Map", "About", "News"],
    },
    {
      title: "Links",
      links: ["Brochure", "Company", "Terms and Privacy", "Cookie Policy"],
    },
    {
      title: "Contacts",
      links: [
        "+01 12345 12345",
        "myPhoneBook.gmail.com",
        "All Around The World 123, Planet Earth",
      ],
    },
  ];

  return (
    <Foot>
      <div className="upper-footer">
        <div className="brand">
          <img src={Logo} alt="logo" />
          <p>From idea to resolution, it's time for revolution.</p>
          <div className="mail-container">
            <input type="email" placeholder="Enter Email" />
            <Button text="Lets Get Started" />
          </div>
        </div>

        {links.map(({ title, links }, index) => {
          return (
            <div className="links" key={index}>
              <h3> {title}</h3>
              <ul key={title}>
                {links.map((link) => (
                  <li key={link}>
                    <a href={`./${link}`}>{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="lower-footer">
        <span> ⓒ 2022 PhoneBook</span>
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
          <li>Linkedin</li>
        </ul>
      </div>
    </Foot>
  );
}

const Foot = styled.div`
  border-top: 1px solid var(--primary-color);
  margin: 1.5rem 6rem;
  .upper-footer {
    display: grid;
    grid-template-columns: 3fr 1fr 1fr 1fr;
    gap: 3rem;
    padding-top: 3rem;
    .brand {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      p {
        color: #babbbb;
        font-weight: bolder;
      }
    }
    .mail-container {
      display: flex;
      align-items: center;
      gap: 1rem;
      input {
        padding: 0.8rem 1rem;
        border-radius: 2rem;
        border: solid 3px transparent;
        cursor: pointer;
        background-image: linear-gradient(
            rgba(255, 255, 255, 0),
            rgba(255, 255, 255, 0)
          ),
          linear-gradient(101deg, var(--primary-color), var(--orange));
        background-origin: border-box;
        background-clip: content-box, border-box;
        &:hover {
        }
        &:focus {
          outline: none;
        }
      }
      button {
        padding: 0.3rem 1rem;
        gap: 0.5rem;
      }
    }
    .links {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      h3 {
        color: var(--primary-color);
      }
      ul {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        li {
          list-style: none;
          a {
            color: #babbbb;
            font-weight: bold;
            cursor: pointer;
            transition: 0.3s ease-in-out;
            &:hover {
              color: var(--primary-color);
            }
          }
        }
      }
    }
  }
  .lower-footer {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid var(--primary-color);
    margin-top: 1.5rem;
    color: #babbbb;
    font-style: bold;

    span {
      margin-top: 1.5rem;
    }
    ul {
      margin-top: 1.5rem;
      list-style-type: none;
      gap: 3rem;
      display: flex;
      li {
        transition: 0.5s ease-in-out;
        cursor: pointer;
        color: #babbbb;
        font-style: bold;
        &:hover {
          color: var(--primary-color);
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 0;
    gap: 2rem;
    padding: 1rem 2rem;
    .upper-footer {
      flex-direction: column;
      gap: 1rem;
      .brand {
        margin-left: -2rem;
        width: 30vw;
        .mail-container {
          display: flex;
          flex-direction: column;
          margin-top: 1rem;
        }
      }
    }
    .links {
      .link {
        inline-size: 50px;
        word-break: break-all;
        overflow-wrap: break-word;
        gap: 0.5rem;
      }
    }
    .lower-footer {
      flex-direction: column;
      gap: 1rem;
    }
  }
`;

export default Footer;
