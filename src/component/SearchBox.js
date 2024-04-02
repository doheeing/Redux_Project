import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";

const SearchBox = () => {
  let [keyword, setKeyword] = useState("");
  let dispatch = useDispatch();
  let { contact } = useSelector((state) => state);
  const searchByName = (event) => {
    event.preventDefault();
    dispatch({ type: "SEARCH_BY_USERNAME", payload: { keyword } });
  };
  return (
    <div>
      <Row>
        <Col lg={9}>
          <Form onSubmit={searchByName}>
            <Form.Control
              type="text"
              placeholder="제목을 입력해주세요"
              onChange={(event) => setKeyword(event.target.value)}
            />
          </Form>
        </Col>
        <Col lg={3}>
          <Button className="search-button">찾기</Button>
        </Col>
      </Row>
    </div>
  );
};

export default SearchBox;
