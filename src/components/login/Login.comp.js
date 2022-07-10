import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
	Container,
	Row,
	Col,
	Form,
	Button,
	Spinner,
	Alert,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

import { loginPending, loginSuccess, loginFail } from "./loginSlice";
import { userLogin } from "../../api/userApi";
import { getUserProfile } from "../../pages/dashboard/userAction";

export const LoginForm = ({ formSwitcher }) => {
	const dispatch = useDispatch();
	const history = useHistory();
	let location = useLocation();

	const { isLoading, isAuth, error } = useSelector(state => state.login);
	let { from } = location.state || { from: { pathname: "/" } };

	useEffect(() => {
		sessionStorage.getItem("accessJWT") && history.replace(from);
	}, [history, isAuth]);

	const [email, setEmail] = useState("example@company.com");
	const [password, setPassword] = useState("password");

	const handleOnChange = e => {
		const { name, value } = e.target;

		switch (name) {
			case "email":
				setEmail(value);
				break;

			case "password":
				setPassword(value);
				break;

			default:
				break;
		}
	};

	const handleOnSubmit = async e => {
		e.preventDefault();

		if (!email || !password) {
			return alert("Заполните все формы!");
		}

		dispatch(loginPending());

		try {
			const isAuth = await userLogin({ email, password });

			if (isAuth.status === "error") {
				return dispatch(loginFail(isAuth.message));
			}

			dispatch(loginSuccess());
			dispatch(getUserProfile());
			history.push("/dashboard");
		} catch (error) {
			dispatch(loginFail(error.message));
		}
	};

	return (
		<div className="bg-light">
			<Row>
				<Col>
					<h1 className="text-dark text-center">Авторизация</h1>
					<hr />
					{error && <Alert variant="danger">{error}</Alert>}
					<Form autoComplete="off" onSubmit={handleOnSubmit}>
						<Form.Group>
							<Form.Label>Ваш Email</Form.Label>
							<Form.Control
								type="email"
								name="email"
								value={email}
								onChange={handleOnChange}
								placeholder="Enter Email"
								required
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label>Пароль</Form.Label>
							<Form.Control
								type="password"
								name="password"
								onChange={handleOnChange}
								value={password}
								placeholder="password"
								required
							/>
						</Form.Group>
						<div className="row">
							<Button type="submit" className="bg-dark text-light col">Войти</Button>
						</div>
						{isLoading && <Spinner variant="primary" animation="border" />}
					</Form>
					<hr />
				</Col>
			</Row>

			<Row>
				<Col>
					<a href="/password-reset">Забыли пароль?</a>
				</Col>
			</Row>
			<Row className="py-4">
				<Col>
				He регистрированы? <a href="/registration"> Регистрация</a>
				</Col>
			</Row>
		</div>
	);
};

LoginForm.propTypes = {
	formSwitcher: PropTypes.func.isRequired,
};
