import React from "react";
import { Row, Col } from "react-bootstrap";

const ContactItem = ({ item }) => {
  return (
    <div className="contact-item-main-area">
      <div className="contact-item-area">
        <div className="item-detail">
          <h5 className="item-name">{item.name}</h5>
          <div>{item.phoneNumber}</div>
        </div>
      </div>
    </div>
  );
};

export default ContactItem;
