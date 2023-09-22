import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import ListTask from "./Components/ListTask";
import AddTask from "./Components/AddTask";

function AutoLayoutExample() {
  return (
    <Container>
      <Row>
        <Col>
          <AddTask />
        </Col>
        <Col>
          <ListTask />
        </Col>
      </Row>
    </Container>
  );
}

export default AutoLayoutExample;
