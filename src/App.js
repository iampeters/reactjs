import React from 'react';
// import Layout from './layout/Layout';
import {BrowserRouter as Router, Switch, Route,  } from 'react-router-dom';
import Auth from './routes/auth/Auth';
import Profile from "./routes/profile/Profile";

function App() {
	return (
		<Router>
			{/* <Layout /> */}
		  <Switch>
		    <Route path='/' exact component={Auth}/>
		    <Route path='/profile' exact component={Profile}/>
		  </Switch>
		</Router>
	);
}

export default App;
