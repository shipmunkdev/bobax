import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import RadioCheckboxGroup from 'components/RadioCheckboxGroup';
import './CustomizeBobaModalBody.css';

interface BobaModalProps {
  milkList: { [key: string]: { name: string } };
  toppingsList: { [key: string]: { name: string; price: number } };
  milkType: string;
  toppingsType: { [key: string]: boolean };
  setMilkType: (milkType: string) => void;
  setToppingsType: (toppings: { [key: string]: boolean }) => void;
}

const BobaModalForm = ({
  milkList,
  toppingsList,
  milkType,
  toppingsType,
  setMilkType,
  setToppingsType,
}: BobaModalProps) => {
  const checkboxHandler = (option: string) => {
    if (toppingsType[option]) {
      setToppingsType({ ...toppingsType, [option]: !toppingsType[option] });
    } else {
      setToppingsType({ ...toppingsType, [option]: true });
    }
  };

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
          <div className={'starlabel'}>Milk</div>
          <Form.Group>
            {Object.keys(milkList).map((key) => {
              const milkOption = milkList[key];
              return (
                <RadioCheckboxGroup
                  type={'radio'}
                  id={key}
                  key={key}
                  label={milkOption.name}
                  check={milkType === key}
                  handleChange={setMilkType}
                />
              );
            })}
          </Form.Group>
        </Col>
        <Col xs={12} md={8}>
          Toppings (Optional)
          <Form.Group>
            {Object.keys(toppingsList).map((key) => {
              const toppingOption = toppingsList[key];
              return (
                <RadioCheckboxGroup
                  type={'checkbox'}
                  id={key}
                  key={key}
                  label={toppingOption.name}
                  check={toppingsType[key] ? toppingsType[key] : false}
                  handleChange={checkboxHandler}
                />
              );
            })}
          </Form.Group>
        </Col>
      </Container>
    </Form>
  );
};

export default BobaModalForm;
