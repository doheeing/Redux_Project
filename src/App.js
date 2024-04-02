import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import ContactForm from "./component/ContactForm";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactList from "./component/ContactList";

//1. 왼쪽에는 연락처 등록하는 곳, 오른쪽은 연락처 리스트와 검색창
//2. 리스트레 유저 이름과 전화번호를 추가할 수 있다
//3. 리스트에 아이템 갯수가 보인다
//4. 사용자가 유저를 이름 검색으로 찾을 수 있다

function App() {
  return (
    <div className="main-block">
      <div className="main-area">
        <div className="apple-button">
          <button className="red"/>
          <button className="yellow"/>
          <button className="green"/>
        </div>
        <h1 className="title">심플 노트</h1>
        <h4>잊지않도록 기록하세요.</h4>
        <Container>
          <Row className="row">
            <Col>
              <ContactForm />
            </Col>
            <Col>
              <ContactList />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
