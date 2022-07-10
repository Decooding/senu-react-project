import React from 'react';
import {
  Row,
  Form,
  Col} from 'react-bootstrap';

 const BankAcct =()=> {
    return (
      <>
      <h3>Реквизиты текущего счета:</h3>
<Form>


  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="4">
    Наименование Банка
    </Form.Label>
    <Col sm="8">
      <Form.Control type="text" placeholder="" />
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="4">
    Текущий счет (IBAN)
    </Form.Label>
    <Col sm="8">
      <Form.Control type="text" placeholder="KZ000000000000" />
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="4">
    Банковский идентификационный код 
    </Form.Label>
    <Col sm="8">
      <Form.Control type="tel" placeholder="БИК" />
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="4">
    КОДЫ БЕНЕФИЦИАРА
    </Form.Label>
    <Col sm="8">
      <Form.Control type="tel" placeholder="КБе" />
    </Col>
  </Form.Group>
</Form>
      </>
    );}
 
export default BankAcct;