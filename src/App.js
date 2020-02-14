import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import ProtectedRoute from './RouteGuards/ProtectedRoute';
import { isLoggedIn } from './redux/actions/userActions';
import OpenRoute from './RouteGuards/OpenRoute';
import Login from './routes/Login/Login';
import { useSelector, useDispatch } from 'react-redux';
import Header from './components/header/Header';
import SideBar from './components/sidebar/SideBar';
import Alert from './components/Alert/Alert';

// import Footer from './components/footer/Footer';

import routes from './routes';
import OuterHeader from './components/outer-header/OuterHeader';

function App() {
	const loggedIn = useSelector(state => state.isAuthenticated);
	const alert = useSelector(state => state.alert);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(isLoggedIn());
	});

	return (
		<main className="bg-light">
			{alert.hasAlert
				? alert.children.map((child, key) => (
						<Alert
							header={child.header}
							body={child.body}
							props={child.props}
							key={key}
						/>
				  ))
				: ''}

			<div className="container-fluid">
				<div className="row">
					<Router>
						<div className="col-md-12 p-0 box-shadow fixed-top bg-white">
							{loggedIn ? <Header /> : <OuterHeader />}
						</div>

						<div
							className={
								loggedIn
									? 'col-md-2 box-shadow-right p-0 sideBar-container bg-white d-none d-md-block'
									: 'd-none'
							}
						>
							<SideBar />
						</div>

						<div
							className={
								loggedIn
									? 'col-md-10  ml-auto main bg-light'
									: 'col-md-10  ml-auto mr-auto main bg-light'
							}
							id="main"
						>
							<Switch>
								{routes.map((route, index) =>
									route.hasChildren ? (
										route.children.map((childRoute, id) => (
											<ProtectedRoute path={childRoute.path} key={id}>
												<childRoute.component />
											</ProtectedRoute>
										))
									) : (
										<ProtectedRoute path={route.path} key={index}>
											<route.component />
										</ProtectedRoute>
									)
								)}

								<OpenRoute path="/" exact strict>
									<Login />
								</OpenRoute>
							</Switch>
						</div>

						{/* <div
							className={
								loggedIn
									? 'col-md-10 ml-auto fixed-bottom bottom-0 border-top'
									: 'd-none'
							}
						>
							<Footer />
						</div> */}
					</Router>
				</div>
			</div>
		</main>
	);
}

export default App;
