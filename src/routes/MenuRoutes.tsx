// project import
import { BookOutlined, DashboardOutlined, LoginOutlined, ProfileOutlined } from '@ant-design/icons';
import { MenuItem } from '../types/navigation';

// ==============================|| MENU ITEMS ||============================== //

const dashboard: MenuItem = {
  id: 'group-dashboard', title: 'Dashboard', type: 'group',
  children: [{ id: 'dashboard', title: 'Dashboard', type: 'item', url: '/dashboard/default', icon: DashboardOutlined, breadcrumbs: false }]
};

const authPages: MenuItem = {
  id: 'group-auth', title: 'Authentication', type: 'group',
  children: [
    { id: 'pages-login', title: 'Login', type: 'item', url: '/login', icon: LoginOutlined },
    { id: 'pages-register', title: 'Register', type: 'item', url: '/register', icon: ProfileOutlined }
]
};

const pages: MenuItem = {
  id: 'group-pages', title: 'Pages', type: 'group',
  children: [
    { id: 'assessment', title: 'Assessment', type: 'item', url: '/assessment', icon: BookOutlined },
    { id: 'progress', title: 'Progress', type: 'item', url: '/progress', icon: BookOutlined },]

};

const MenuRoutes = {
  items: [dashboard, authPages, pages]
};

export default MenuRoutes;
