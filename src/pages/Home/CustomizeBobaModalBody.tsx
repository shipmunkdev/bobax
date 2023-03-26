import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import { milkList, toppingsList } from 'assets/sampleBobaAPI';
import CustomizeRadioButton from 'components/RadioButton';

interface BobaModalProps {
  milk: string;
  toppings: string[];
  setMilk: (milk: string) => void;
  setToppings: (toppings: string[]) => void;
}

const BobaModalform = ({ milk, toppings, setMilk, setToppings }: BobaModalProps) => {
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
            {Array.isArray(milkList)
              ? milkList.map((milkOption, index) => (
                  <CustomizeRadioButton
                    type={'radio'}
                    key={index.toString()}
                    OptionList={milkOption}
                    option={milk}
                    setOption={setMilk}
                  />
                ))
              : Object.keys(milkList).map((key) => {
                  const milkOption = milkList[key];
                  return (
                    <CustomizeRadioButton
                      type={'radio'}
                      key={key}
                      OptionList={milkOption}
                      option={milk}
                      setOption={setMilk}
                    />
                  );
                })}
          </Form.Group>
        </Col>
        <Col xs={12} md={8}>
          Toppings(Optional)
          <Form.Group>
            {Array.isArray(toppingsList)
              ? toppingsList.map((toppingOptions, index) => (
                  <CustomizeRadioButton
                    type={'checkbox'}
                    key={index.toString()}
                    OptionList={toppingOptions}
                    option={toppings}
                    setOption={setToppings}
                  />
                ))
              : Object.keys(toppingsList).map((key) => {
                  const toppingOptions = toppingsList[key];
                  return (
                    <CustomizeRadioButton
                      type={'checkbox'}
                      key={key}
                      OptionList={toppingOptions}
                      option={toppings}
                      setOption={setToppings}
                    />
                  );
                })}
          </Form.Group>
        </Col>
      </Container>
    </Form>
  );
};

export default BobaModalform;
