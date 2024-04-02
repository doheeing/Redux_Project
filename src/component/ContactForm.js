import React, { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);
  const dispatch = useDispatch();

  const addContact = (event) => {
    event.preventDefault();
    dispatch({ type: "ADD_CONTACT", payload: { name, phoneNumber } });
  };
  return (
    <div>
      <Form onSubmit={addContact}>
        <FloatingLabel controlId="formName" label="제목" className="mb-3">
          <Form.Control
            type="text"
            placeholder="제목을 입력해주세요"
            onChange={(e) => setName(e.target.value)}
          />
        </FloatingLabel>
          <textarea
            placeholder="내용을 입력해주세요"
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="text-area"          />

        <div className="input-button-area">
          <Button variant="primary" type="submit" className="input-button">
            추가
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default ContactForm;
