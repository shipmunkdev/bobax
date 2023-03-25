import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import { milkList } from 'assets/sampleBobaAPI';
import CustomizeRadioButton from 'components/RadioButton';

const BobaModalform = ({ milk, setMilk }: { milk: string; setMilk: (milk: string) => void }) => {
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
        <Col xs={12} md={8}>
          Milk(Required)
          <Form.Group>
            <CustomizeRadioButton milkList={milkList} milk={milk} setMilk={setMilk} />
          </Form.Group>
        </Col>
      </Container>
    </Form>
  );
};

export default BobaModalform;
