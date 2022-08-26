import "./App.css";
import { useState, useEffect } from "react";
//COMPONENTS:
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Contacts from "./components/Contacts";

function App() {
  useEffect(() => {
    const savedContacts = localStorage.getItem("contacts");
    if (!savedContacts) {
      localStorage.setItem(
        "contacts",
        JSON.stringify([
          {
            id: Math.random().toString(36).substr(2, 9),
            fullName: "Veljko Petrovic",
            address: "121 Town Commons Way Phoenix, AZ, 45215",
            email: "earth@gmail.com",
            phone: 123_465_689,
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            fullName: "Marko Markovic",
            address: "Srbina 35, 11300 Smederevo Srbija",
            email: "mars@gmail.com",
            phone: 256_269_866,
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            fullName: "Michael Jackson",
            address: "52 City St, Detroit, Mi, 46218",
            email: "neptun@gmail.com",
            phone: 359_525_555,
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            fullName: "Vanessa Parady",
            address: "11 Beogradska Beograd, SRB, 11000",
            email: "serbia@gmail.com",
            phone: 123_465_689,
          },
        ])
      );
    }
  }, []);

  const [theme, setTheme] = useState("dark");
  const changeTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <div data-theme={theme} className="app-container">
      <ScrollToTop />
      <NavBar changeTheme={changeTheme} currentTheme={theme} />
      <Home />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
