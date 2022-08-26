import React, { useState, useEffect } from "react";

//STYLE:
import "../index.css";

//COMPONENTS:
import Contact from "./Contact";
import InputContacts from "./InputContacts";

const Contacts = () => {
  const [contacts, setContacts] = useState([]); // data

  useEffect(() => {
    const savedContacts = localStorage.getItem("contacts");
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    }
  }, []);

  const addContact = (newContact) => {
    const newContactList = [...contacts, newContact];
    setContacts(newContactList);
    localStorage.setItem("contacts", JSON.stringify(newContactList));
  };

  const deleteContact = (id) => {
    const remainedContacts = contacts.filter((item) => item.id !== id);
    setContacts(remainedContacts);
  };

  return (
    <div className="contacts-lits">
      <InputContacts addContact={addContact} />
      <div className="contact-container">
        {contacts.map((data, i) => (
          <Contact
            id="phone_book"
            deleteContact={deleteContact}
            data={data}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Contacts;
