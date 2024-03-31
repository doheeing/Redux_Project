import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";

const SearchBox = () => {
    let [searchName, serSearchName] = useState("");
    let dispatch = useDispatch();
    let { contact } = useSelector((state) => state);
    const searchByName = (event) => {
        event.preventDefault();
        dispatch({ type: "SEARCH_NAME", payload: { searchName } });
      };
  return (
    <div>
      <Row onSubmit={searchByName}>
        <Col lg={10}>
        <Form.Control type="text" placeholder="이름을 입력해주세요" onChange={(e) => serSearchName(e.target.value)}/>
        </Col>
        <Col lg={2}>
        <Button>찾기</Button>
        </Col>
      </Row>
    </div>
  );
};

export default SearchBox;
