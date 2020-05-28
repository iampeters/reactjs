import Users from './routes/Users/Users';
import React from 'react';
import Profile from './routes/profile/Profile';
import Dashboard from './routes/dashboard/Dashboard';
import Settings from './routes/Settings/Settings';
import Agents from './Pages/Agents/List/Agents';
import AgentDetails from './Pages/Agents/Details/AgentDetails';
import Aggregators from './Pages/Aggregators/List/Aggregators';
import Administrators from './Pages/Administrators/List/Administrators';

export const routes = [
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
				icon: <i className="fas fa-fw mr-3 fa-user-tie" />
			},
			{
				path: '/agents/:id',
				component: AgentDetails,
				name: 'Agent Details',
				exact: true
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
				component: Aggregators,
				icon: <i className="fas fa-fw mr-3 fa-user-friends" />,
				hasChildren: false
			},
			{
				path: '/administrators',
				exact: true,
				name: 'Administrators',
				component: Administrators,
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
		canView: true,
		view: {
			path: '/settings/:id',
			component: AgentDetails,
			name: 'Agent Details',
			exact: true
		},
		icon: <i className="fas fa-fw mr-3 fa-cog" />
	}
];

export const navRoutes = [
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
				icon: <i className="fas fa-fw mr-3 fa-user-tie" />
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
				component: Aggregators,
				icon: <i className="fas fa-fw mr-3 fa-user-friends" />,
				hasChildren: false
			},
			{
				path: '/administrators',
				exact: true,
				name: 'Administrators',
				component: Administrators,
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
		canView: true,
		view: {
			path: '/settings/:id',
			component: AgentDetails,
			name: 'Agent Details',
			exact: true
		},
		icon: <i className="fas fa-fw mr-3 fa-cog" />
	}
];