import React from 'react';
import {
    Form,
    Button
} from 'react-bootstrap';
// import DatePicker from 'react-bootstrap-date-picker';
import BootstrapDatePickerComponent from '../../components/datepicker/DatePicker.comp'


const Staff = () => {
    return (
        <>
            <div className="row">
                <h2 className='mb-5'>Добавление сотрудника</h2>
                <Form className='mt-10 col-8'>
                    <Form.Group className="mb-3" controlId="ControlInput1">
                        <Form.Label>ФИО</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="ControlInput1">
                        <Form.Label>ИИН:</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="ControlInput1">
                        <Form.Label>Документ удостоверяющий личность сотрудника</Form.Label>
                        <Form.Control as="select">
                            <option value="1">...</option>
                            <option value="2">Удостоверение личности</option>
                            <option value="3">Паспорт</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="ControlInput1">
                        <Form.Label>Номер:</Form.Label>
                        <Form.Control type="tel" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="ControlInput1">
                        <Form.Label>Кем выдано:</Form.Label>
                        <Form.Control as="select">
                            <option value="1">...</option>
                            <option value="2">МВД РК</option>
                            <option value="3">МЮ РК</option>
                        </Form.Control>
                    </Form.Group>

                    <BootstrapDatePickerComponent />

                    <hr />
                    <h3>Для входа</h3>
                    <Form.Group>
                        <Form.Label>Почтовый еmail сотрудника</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                        />
                    </Form.Group>

                </Form>
                <div className="col-2">
                    <Button type="submit" className="bg-dark text-light">Добавить</Button>
                </div>
            </div>
        </>
    );
}

export default Staff;