import Users from './routes/Users/Users';
import React from 'react';
import Profile from './routes/profile/Profile';
import Dashboard from './routes/dashboard/Dashboard';
import Settings from './routes/Settings/Settings';
import Agents from './Pages/Agents/Agents';

const routes = [
	{
		path: '/dashboard',
		exact: true,
		name: 'Dashboard',
		component: Dashboard,
		icon: <i className="fas fa-fw mr-3 fa-home" />,
		hasChildren: false
	},
	{
		path: '/users',
		exact: true,
		name: 'Users',
		component: Dashboard,
		icon: <i className="fas fa-fw mr-3 fa-users" />,
		hasChildren: true,
		children: [
			{
				path: '/session',
				exact: true,
				name: 'Session',
				component: Profile,
				icon: <i className="fas fa-fw mr-3 fa-user" />,
				hasChildren: false
			},
			{
				path: '/agents',
				exact: true,
				name: 'Agents',
				component: Agents,
				icon: <i className="fas fa-fw mr-3 fa-user-tie" />,
				hasChildren: false
			},
			{
				path: '/customers',
				exact: true,
				name: 'Customers',
				component: Profile,
				icon: <i className="fas fa-fw mr-3 fa-user-alt" />,
				hasChildren: false
			},
			{
				path: '/aggregators',
				exact: true,
				name: 'Aggregators',
				component: Profile,
				icon: <i className="fas fa-fw mr-3 fa-user-friends" />,
				hasChildren: false
			},
			{
				path: '/admin',
				exact: true,
				name: 'Admin',
				component: Profile,
				icon: <i className="fas fa-fw mr-3 fa-user-shield" />,
				hasChildren: false
			},
			{
				path: '/users',
				name: 'Manage Users',
				component: Users,
				hasChildren: false,
				icon: <i className="fas fa-fw mr-3 fa-user-cog" />
			}
		]
	},
	// {
	// 	path: '/profile',
	// 	name: 'Profile',
	// 	component: Profile,
	// 	hasChildren: false,
	// 	icon: <i className="fas fa-fw mr-3 fa-user" />
	// },
	{
		path: '/partners',
		name: 'Partners',
		component: Settings,
		hasChildren: true,
		children: [
			{
				path: '/providus',
				exact: true,
				name: 'Providus',
				component: Settings
			},
			{
				path: '/interswitch',
				exact: true,
				name: 'Interswitch',
				component: Dashboard
			}
		],
		icon: <i className="fas fa-fw mr-3 fa-hands-helping" />
		// <i className="fas fa-hands-helping"></i>
	},
	{
		path: '/bills',
		name: 'Bills',
		component: Settings,
		hasChildren: true,
		children: [
			{
				path: '/categories',
				exact: true,
				name: 'Categories',
				component: Settings
			},
			{
				path: '/bills',
				exact: true,
				name: 'Bills',
				component: Settings
			},
			{
				path: '/bill-items',
				exact: true,
				name: 'Bill Items',
				component: Dashboard
			}
		],
		icon: <i className="fas fa-file-invoice fa-fw mr-3"></i>
	},
	{
		path: '/providers',
		name: 'Providers',
		component: Settings,
		hasChildren: true,
		children: [
			{
				path: '/providers',
				exact: true,
				name: 'Providers',
				component: Settings
			},
			{
				path: '/provider-categories',
				exact: true,
				name: 'Categories',
				component: Settings
			},
			{
				path: '/provider-bill',
				exact: true,
				name: 'Bills',
				component: Dashboard
			},
			{
				path: '/provider-bill-items',
				exact: true,
				name: 'Bill Items',
				component: Dashboard
			}
		],
		icon: <i className="fas fa-fw mr-3 fa-cogs" />
	},
	{
		path: '/accounts',
		name: 'Accounts',
		component: Settings,
		hasChildren: true,
		children: [
			{
				path: '/accounts',
				exact: true,
				name: 'Accounts',
				component: Settings
			},
			{
				path: '/account/activity',
				exact: true,
				name: 'Account Activity',
				component: Dashboard
			}
		],
		icon: <i className="fas fa-fw mr-3 fa-cogs" />
	},
	{
		path: '/Logs',
		name: 'Logs',
		component: Settings,
		hasChildren: true,
		children: [
			{
				path: '/error-logs',
				exact: true,
				name: 'Error Logs',
				component: Settings
			},
			{
				path: '/account/activity',
				exact: true,
				name: 'Account Activity',
				component: Dashboard
			}
		],
		icon: <i className="fas fa-fw mr-3 fa-cogs" />
	},
	{
		path: '/settings',
		name: 'Settings',
		component: Settings,
		hasChildren: false,
		children: [
			{
				path: '/settings',
				exact: true,
				name: 'Settings',
				component: Settings
			},
			{
				path: '/typography',
				exact: true,
				name: 'Typography',
				component: Dashboard
			}
		],
		icon: <i className="fas fa-fw mr-3 fa-cog" />
	}
];

export default routes;
