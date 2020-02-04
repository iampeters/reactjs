import React from 'react';
import Header from '../components/header/Header';
import SideBar from '../components/sidebar/SideBar';
import Main from './Main';
import Footer from '../components/footer/Footer';
import { BrowserRouter as Router } from 'react-router-dom';

export default function Layout() {
	return (
		<div className="container-fluid">
			<div className="row">
				{/* <Router>
					<Header />
					<SideBar /> */}
					<div className="col-md-9 mr-auto ml-auto main">
						{/* <Main /> */}
					</div>
					{/* <Footer />
				</Router> */}
			</div>
		</div>
	);
}
