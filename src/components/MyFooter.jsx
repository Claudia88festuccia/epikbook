import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function FooterContainer() {
  return (
    <Container>
      <Row>
        <Card.Footer >
        <Col>sono il footer</Col>
        </Card.Footer>
      </Row>
    </Container>
  );
}

export default FooterContainer;