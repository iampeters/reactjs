import React, { useEffect } from 'react';
import Layout from './layout/Layout';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from 'react-router-dom';
import ProtectedRoute from './RouteGuards/ProtectedRoute';
import { isLoggedIn } from './redux/actions/userActions';
import OpenRoute from './RouteGuards/OpenRoute';
import Login from './routes/Login/Login';
import { useSelector, useDispatch } from 'react-redux';
import Users from './routes/Users/Users';
import Profile from './routes/profile/Profile';
import Header from './components/header/Header';
import SideBar from './components/sidebar/SideBar';
import Footer from './components/footer/Footer';
import Dashboard from './routes/dashboard/Dashboard';

function App() {
	const loggedIn = useSelector(state => state.isAuthenticated);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(isLoggedIn());
	});

	return (
		<div className="container-fluid">
			<div className="row">
				<Router>
					<div className={loggedIn ? 'col-md-12 p-0' : 'd-none'}>
						<Header />
					</div>

					<div className={loggedIn ? 'col-md-2 border-right' : 'd-none'}>
						<SideBar />
					</div>

					<Switch>
						<OpenRoute path="/" exact strict>
							<Login />
						</OpenRoute>

						<ProtectedRoute path="/users">
							<Users />
						</ProtectedRoute>

						<ProtectedRoute path="/dashboard">
							<Dashboard />
						</ProtectedRoute>

						<ProtectedRoute path="/profile">
							<Profile />
						</ProtectedRoute>
					</Switch>

					<div
						className={
							loggedIn
								? 'col-md-10 ml-auto fixed bottom-0 border-top'
								: 'd-none'
						}
					>
						<Footer />
					</div>
				</Router>
			</div>
		</div>
	);
}

export default App;
