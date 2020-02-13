import './Settings.scss';
import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';

export default function Settings() {

	return (
		<div className="border-radius bg-white p-5 box-shadow-mild">
			<h5>Settings</h5>
			{/* <Skeleton variant="rect" width={510} height={118} /> */}

			<div className="col-3">
				<Skeleton variant="text" width={210} />
				<Skeleton variant="circle" width={40} height={40} />
				<Skeleton variant="rect" width={210} height={118} />
			</div>
		</div>
	);
}
