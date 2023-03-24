import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import React from 'react';

const BobaModalform = () => {
  return (
    <Form>
      <Container>
        <Row>
          <Col xs={12} md={8}>
            Quantity
          </Col>
          <Col xs={6} md={4}>
            number
          </Col>
        </Row>
      </Container>
    </Form>
  );
};

export default BobaModalform;
