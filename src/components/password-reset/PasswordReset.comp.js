import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendPasswordResetOtp } from "./passwordAction";

import {
	Container,
	Row,
	Col,
	Form,
	Button,
	Alert,
	Spinner,
} from "react-bootstrap";

export const ResetPassword = () => {
	const dispatch = useDispatch();

	const [email, setEmail] = useState("");

	const { isLoading, status, message } = useSelector(state => state.password);

	const handleOnResetSubmit = e => {
		e.preventDefault();

		dispatch(sendPasswordResetOtp(email));
	};

	const handleOnChange = e => {
		const { value } = e.target;
		setEmail(value);
	};

	return (
		<>
			<Row>
				<Col>
					<h1 className="text-dark text-center">Сбросить пароль</h1>
					<hr />

					{message && (
						<Alert variant={status === "success" ? "success" : "danger"}>
							{message}
						</Alert>
					)}

					{isLoading && <Spinner variant="primary" animation="border" />}

					<Form autoComplete="off" onSubmit={handleOnResetSubmit}>
						<Form.Group>
							<Form.Label>Почта Email</Form.Label>
							<Form.Control
								type="email"
								name="email"
								value={email}
								onChange={handleOnChange}
								placeholder="example@company.com"
								required
							/>
						</Form.Group>

						<Button type="submit" className="bg-dark">Сбросить пароль</Button>
					</Form>
					<hr />
				</Col>
			</Row>
		</>
	);
};
