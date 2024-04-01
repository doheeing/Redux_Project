import React from "react";
import { Row, Col } from "react-bootstrap";

const ContactItem = ({ item }) => {
  return (
    <div className="contact-item-main-area">
      <Row className="contact-item-area">
        <Col lg={2} className="img-area">
          <img
            width={50}
            src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"
          />
        </Col>
        <Col lg={10} className="item-detail">
          <div>{item.name}</div>
          <div>{item.phoneNumber}</div>
        </Col>
      </Row>
    </div>
  );
};

export default ContactItem;
