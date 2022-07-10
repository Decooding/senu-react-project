import React from 'react';
import {
    Form,
    Button
} from 'react-bootstrap';
import ModalWin from '../modal/ModalWindow.comp';

const Proxy = () => {
    return (
        <>
            <div className="row">
                <h2 className='mb-5'>Счет на оплату</h2>
                <Form className='mt-10 col-8'>
                    <Form.Group className="mb-3" controlId="ControlInput1">
                        <Form.Label>Номер документа</Form.Label>
                        <Form.Control type="text" value={1} />
                    </Form.Group>

                    <Form.Group controlId="dob">
                        <Form.Label>Дата:</Form.Label>
                        <Form.Control type="date" name="dob" placeholder="01.07.2022" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="ControlInput1">
                        <Form.Label>Банковский счет</Form.Label>
                        <Form.Control as="select">
                            <option value="1">...</option>
                            <option value="2"></option>
                            <option value="3"></option>
                            <option value="4"></option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="ControlInput1">
                        <Form.Label>Контрагент (Покупатель)</Form.Label>
                        <Form.Control type="text" placeholder='ИНН\БИН покупателя' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="ControlInput1">
                        <Form.Label>Покупатель:</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="ControlInput1">
                        <Form.Label>Договор:</Form.Label>
                        <Form.Control type="text" placeholder='Без договора' />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="ControlInput1">
                        <Form.Label>Код назначения платежа:</Form.Label>
                        <Form.Control as="select">
                            <option value="1">...</option>
                            <option value="2">0</option>
                            <option value="3">002</option>
                            <option value="4">003</option>
                            <option value="4">004</option>
                            <option value="4">005</option>
                            <option value="4">006</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Выставить печать и подпись" />
                    </Form.Group>

                    <ModalWin />

                    <hr />
                </Form>
                <div className="col-4">
                    <Button type="submit" className="bg-dark text-light">Создать документ</Button>
                </div>
            </div>
        </>
    );
}

export default Proxy;