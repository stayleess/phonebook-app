import React, { useState } from "react";

import { MdDeleteForever } from "react-icons/md";

import ToggleImages from "./ToggleImages";

function Contact({ data, deleteContact }) {
  const [active, setActive] = useState(false);

  const handleChangeImage = () => {
    setActive((male) => {
      return !male;
    });
  };

  return (
    <div className="contact">
      <div className=" contact-header">
        <span>
          <i>{data.fullName} </i>
        </span>
        <ToggleImages active={active} handleChangeImage={handleChangeImage} />
      </div>
      <div className="contact-footer">
        <p>
          {" "}
          <i>Address: </i>
          {data.address}
        </p>
        <p>
          <i>Phone:</i> {data.phone}
        </p>
        <p>
          {" "}
          <i>Email:</i> {data.email}
        </p>
        <MdDeleteForever
          onClick={() => deleteContact(data.id)}
          className="delete-icon"
          size="1.3rem"
        />
        <p className="span-date">
          <i>Date: </i>
          {data.date}
        </p>
      </div>
    </div>
  );
}

export default Contact;
