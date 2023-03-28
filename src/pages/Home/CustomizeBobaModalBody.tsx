import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import { milkList } from 'assets/sampleBobaAPI';
import RadioCheckboxGroup from 'components/RadioButton';
import './CustomizeBobaModalBody.css';

interface BobaModalProps {
  milkType: string;
  // toppings: {[key: string]:boolean};
  setMilkType: (milkType: string) => void;
  // setToppings: (toppings: {[key: string]:boolean}) => void;
}

const BobaModalform = ({ milkType, setMilkType }: BobaModalProps) => {
  // const radioBoxHandler = (option: string) => {
  //   setMilkType(option);
  // };

  // const checkBoxHandler = (option:string) => {
  //   if (toppings[option]){
  //     if(toppings[option] == true) {
  //       toppings[option] = false
  //     }else{
  //       toppings[option] = true
  //     }
  //   }else{
  //     toppings[option] = true
  //   }

  // }

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
        {/* <Col xs={12} md={8}>
          Toppings(Optional)
          <Form.Group>
              {Object.keys(toppingsList).map((key) => {
                  const toppingOptions = toppingsList[key];
                  const checkbool = toppings[key] ? toppings[key] : false
                  return (
                    <RadioCheckboxGroup
                      type={'checkbox'}
                      key={key}
                      label={toppingOptions.name}
                      check={checkbool}
                      handlechange={checkBoxHandler}
                    />
                  );
                })}
          </Form.Group>
        </Col> */}
      </Container>
    </Form>
  );
};

export default BobaModalform;
