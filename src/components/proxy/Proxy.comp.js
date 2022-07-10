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
                <h2 className='mb-5'>Доверенность на товар</h2>
                <Form className='mt-10 col-8'>
                    <Form.Group className="mb-3" controlId="ControlInput1">
                        <Form.Label>Номер документа</Form.Label>
                        <Form.Control type="text" value={1} />
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
                        <Form.Label>Выдана: (должность, фамилия, имя)</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="ControlInput1">
                        <Form.Label>На получение от (наименование поставщика)</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="ControlInput1">
                        <Form.Label>активов по (номер и дата счета на оплату)</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>

                    <div className="row">
                        <Form.Group controlId="dob" className='col'>
                            <Form.Label>Дата выдачи:</Form.Label>
                            <Form.Control type="date" name="dob" placeholder="" />
                        </Form.Group>
                        <Form.Group controlId="dob" className='col'>
                            <Form.Label>Действительно до:</Form.Label>
                            <Form.Control type="date" name="dob" placeholder="" />
                        </Form.Group>
                    </div>

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