import './ErrorPage.scss';
import img from '../../images/error2.png';
import React from 'react'
import { useHistory } from 'react-router-dom';

export default function ErrorPage() {

	const history = useHistory();

	const back = () => {
		history.goBack();
	}

	return (
		<div className='row m-0 animated fadeIn'>
			<div className="col-md-6 p-2 bg-white border-radius error-page d-none d-md-block">
				<img src={img} alt="Error Page" className='w-100' />`
			</div>
			<div className="col-md-6 bg-white error-page">
				<div className="row m-0 justify-content-start align-content-center h-inherit">
					<div className="col-md-12 p-0">
						<h1 className=' code mb-3 d-block text-dark'>404 Error</h1>
					</div>
					<h2 className='text-dark mb-3 d-block'>Page not found</h2>
					<h5 className=' mb-3 text-dark'>Sorry, we can’t find the page you are looking for.</h5>
					<p className="text-dark">You may have typed the address incorrectly, or you may have used an outdated link.</p>
					<code>URL path {window.location.pathname}</code>

					<div className="col-md-12 p-0 mt-3">
						<button onClick={back} className='btn btn-primary'><i className="fas fa-arrow-left fa-fw"></i> Back</button>
					</div>
				</div>
			</div>
		</div>
	);
}
