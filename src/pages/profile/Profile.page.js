import React from 'react';
import {
    Row,
    Form,
    Col
} from 'react-bootstrap';

import BankCard from '../../components/creditCards/Cards.comp'


const Profile = () => {
    return (
        <>
            <h1>Профиль</h1>
            {/* {showhide==='1' && <h4>Наименование компании</h4>} */}
            <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                <Form.Label column sm="4">
                    ИНН/БИН
                </Form.Label>
                <Col sm="8">
                    <Form.Control plaintext readOnly defaultValue="1234567890" />
                </Col>
            </Form.Group>

            <hr />

            <h2>Контактные данные</h2>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                <Form.Label column sm="4">
                    Юридический адрес
                </Form.Label>
                <Col sm="8">
                    <Form.Control plaintext readOnly defaultValue="Казахстан, Акмолинская обл., г. Нур-Султан, ул. Кабанбай Батыра, д. 48/7, кв. (офис) 101" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                <Form.Label column sm="4">
                    Электронный адрес
                </Form.Label>
                <Col sm="8">
                    <Form.Control plaintext readOnly defaultValue="tselinogradskii@mail.ru" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                <Form.Label column sm="4">
                    Телефонный номер
                </Form.Label>
                <Col sm="8">
                    <Form.Control plaintext readOnly defaultValue="+7-(777)-777-77-77" />
                </Col>
            </Form.Group>
            <hr />

            <BankCard />

            <hr />
        </>
    );
}

export default Profile;