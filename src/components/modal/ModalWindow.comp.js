import React, { useState } from 'react';
import {
  Button, Tab, Form
} from 'react-bootstrap';

import Modal from 'react-bootstrap/Modal';
import Tabs from 'react-bootstrap/Tabs'

function ModalWin() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        Номенклатура
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Товары и услуги</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Tabs defaultActiveKey="products" id="uncontrolled-tab-example" className="mb-3">
            <Tab eventKey="products" title="Товары">
              <Form.Group className="mb-3" controlId="ControlInput1">
                <Form.Label>Наименование:</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="ControlInput1">
                <Form.Label>Цена:</Form.Label>
                <Form.Control type="number" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="ControlInput1">
                <Form.Label>Единица измерения:</Form.Label>
                <Form.Control as="select">
                  <option value="1"></option>
                  <option value="2">грамм</option>
                  <option value="3">киллограмм</option>
                  <option value="4">тонна</option>
                  <option value="5">штука</option>
                  <option value="6"></option>
                  <option value="7"></option>
                </Form.Control>
              </Form.Group>
            </Tab>
            <Tab eventKey="services" title="Услуги">
              <Form.Group className="mb-3" controlId="ControlInput1">
                <Form.Label>Наименование:</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="ControlInput1">
                <Form.Label>Цена:</Form.Label>
                <Form.Control type="number" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="ControlInput1">
                <Form.Label>Единица измерения:</Form.Label>
                <Form.Control type="number" />
              </Form.Group>
            </Tab>
          </Tabs>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Добавить
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalWin;