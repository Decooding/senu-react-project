import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Spinner,
  Alert,
} from "react-bootstrap";
import { newUserRegistration } from "./userRegAction";
import { useDispatch, useSelector } from "react-redux";

const initialState = {
  CompName: "",
  idName: "",
  phone: "",
  email: "",
  password: "",
  confirmPass: "",
};
const passVerificationError = {
  isLenthy: false,
  hasUpper: false,
  hasLower: false,
  hasNumber: false,
  hasSpclChr: false,
  confirmPass: false,
};

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const [newUser, setNewUser] = useState(initialState);
  const [passwordError, setPasswordError] = useState(passVerificationError);

  const { isLoading, status, message } = useSelector(
    (state) => state.registration
  );

  useEffect(() => { }, [newUser]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setNewUser({ ...newUser, [name]: value });

    if (name === "password") {
      const isLenthy = value.length > 8;
      const hasUpper = /[A-Z]/.test(value);
      const hasLower = /[a-z]/.test(value);
      const hasNumber = /[0-9]/.test(value);
      const hasSpclChr = /[@,#,$,%,&]/.test(value);

      setPasswordError({
        ...passwordError,
        isLenthy,
        hasUpper,
        hasLower,
        hasNumber,
        hasSpclChr,
      });
    }

    if (name === "confirmPass") {
      setPasswordError({
        ...passwordError,
        confirmPass: newUser.password === value,
      });
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // console.log(newUser);
    const { CompName, idName, phone, email, password } = newUser;

    const newRegistration = {
      CompName,
      idName,
      phone,
      email,
      password,
    };
    dispatch(newUserRegistration(newRegistration));
  };

  const [showhide, setShowhide]=useState('')

  const handleOptionChange = (event) =>{
    const getoption = event.target.value;
    setShowhide(getoption);

  }

  return (
    <>
      <Row>
        <Col>
          <h1 className="text-dark text-center">Регистрация</h1>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          {message && (
            <Alert variant={status === "success" ? "success" : "danger"}>
              {message}
            </Alert>
          )}
        </Col>
      </Row>

      <Row>
        <Col>
          <Form onSubmit={handleOnSubmit}>

            <Form.Group>
              <Form.Label>Выберите юридическую форму </Form.Label>
              <select class="form-select" onChange={(e)=>(handleOptionChange(e))}>
                <option value="">...</option>
                <option value="1">ИП</option>
                <option value="1">TOO</option>
                <option value="2">Физ. лицо</option>
              </select>
            </Form.Group>
            {showhide==='1' &&<Form.Group>
              <Form.Label>Наименование компании</Form.Label>
              <Form.Control
                type="text"
                name="CompName"
                value={newUser.CompName}
                onChange={handleOnChange}
                required
              />
            </Form.Group>}
            <Form.Group>
              <Form.Label>БИН\ИИН</Form.Label>
              <Form.Control
                type="number"
                name="idName"
                value={newUser.name}
                onChange={handleOnChange}
                maxLength={12}
                required
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Номер телефона</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                value={newUser.phone}
                onChange={handleOnChange}
                placeholder="+7(___)__-__-__"
                required
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Ваш Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={newUser.email}
                onChange={handleOnChange}
                placeholder="exapmle@company.com"
                required
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Пароль</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={newUser.password}
                onChange={handleOnChange}
                placeholder="Password"
                required
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Подтверждение Пароля</Form.Label>
              <Form.Control
                type="password"
                name="confirmPass"
                value={newUser.confirmPass}
                onChange={handleOnChange}
                placeholder="Password"
                required
              />
            </Form.Group>
            <Form.Text>
              {!passwordError.confirmPass && (
                <div className="text-danger mb-3">Пароль не подходит!</div>
              )}
            </Form.Text>

            <ul className="mb-4">
              <li
                className={
                  passwordError.isLenthy ? "text-success" : "text-danger"
                }
              >
                Длина пароля должна быть не менее 8 символов
              </li>
              <li
                className={
                  passwordError.hasUpper ? "text-success" : "text-danger"
                }
              >
                Обязательно должна быть одна большая одна маленькая буква
              </li>
              <li
                className={
                  passwordError.hasNumber ? "text-success" : "text-danger"
                }
              >
                Должен содержать цифры
              </li>
              <li
                className={
                  passwordError.hasSpclChr ? "text-success" : "text-danger"
                }
              >
                Должен содержать хотя бы один специальный символ @ # $ % &{" "}
              </li>
            </ul>

            <Button
              variant="primary"
              type="submit"
              className="bg-dark col"
              disabled={Object.values(passwordError).includes(false)}
            >
              Войти
            </Button>
            {isLoading && <Spinner variant="info" animation="border" />}
          </Form>
        </Col>
      </Row>
      <Row className="py-4">
        <Col>
          У вас уже есть аккаунт? <a href="/entry">Войти</a>
        </Col>
      </Row>
    </>
  );
};

export default RegistrationForm;
