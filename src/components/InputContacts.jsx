import React, { useState } from "react";

const InputContacts = ({ addContact }) => {
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSave = () => {
    if (!(fullName.trim().length > 0)) {
      return;
    }
    addContact({
      id: Math.random().toString(36).substr(2, 9),
      fullName,
      address,
      phone,
      email,
      date: new Date().toLocaleDateString(),
    });
    setFullName("");
    setAddress("");
    setPhone("");
    setEmail("");
  };

  return (
    <div className="contact new last">
      {" "}
      <p className="inputs">
        <span>Create New Contact</span>

        <label>Full Name:</label>
        <input
          type="text"
          placeholder="FullName..."
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <label> Address:</label>
        <input
          type="text"
          placeholder="Address..."
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <label> Phone:</label>
        <input
          type="text"
          placeholder="Enter..."
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <label>Email:</label>
        <input
          type="text"
          placeholder="Enter..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </p>
      {/* <img src={profile} alt="fullname" /> */}
      <div className="save-list-footer">
        <button className="save" onClick={() => handleSave()}>
          SAVE CONTACT
        </button>
      </div>
    </div>
  );
};

export default InputContacts;
