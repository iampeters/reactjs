import Users from './routes/Users/Users';
import Profile from './routes/profile/Profile';
import Dashboard from './routes/dashboard/Dashboard';

const routes = [
	{
		path: '/dashboard',
		exact: true,
		name: 'Dashboard',
		component: Dashboard,
		children: [
			{
				path: '/typography',
				exact: true,
				name: 'Typography',
				component: ''
			}
		]
	},
	{
		path: '/profile',
		name: 'Profile',
		component: Profile
	},
	{
		path: '/users',
		name: 'Users',
		component: Users
	}
];

export default routes;
