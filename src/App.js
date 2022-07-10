import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
// import { PrivateRoute } from "./components/private-route/PrivateRoute.comp";
import Dashboard from "./pages/dashboard/Dashboard.page";
import { UserVerification } from "./pages/user-verification/UserVerification.page";
import { Entry } from "./pages/entry/Entry.page";
import { PasswordOtpForm } from "./pages/password-reset/PasswordOtpForm.page";
import { Registration } from "./pages/registration/Registration.page";

import PageNotFound from "./pages/err404/404.page";
import Profile from "./pages/staff/Staff.page";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/">
						<Dashboard />
					</Route>
					<Route exact path="/registration">
						<Registration />
					</Route>
					<Route exact path="/password-reset">
						<PasswordOtpForm />
					</Route>
					<Route exact path="/verification/:_id/:email">
						<UserVerification />
					</Route>
					<Route exact path="/entry">
						<Entry />
					</Route>
					<Route exact path="/res">
						<Profile />
					</Route>
					<Route path="*">
						<PageNotFound />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
