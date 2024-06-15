import { lazy } from 'react';

// project import
import Loadable from '../components/Loadable';
import MainLayout from '../layout/MainLayout';

const Test = Loadable(lazy(() => import('../pages/about-school/Test')));
const Pupil = Loadable(lazy(() => import('../pages/about-school/Pupil')));
const Report = Loadable(lazy(() => import('../pages/about-school/Report')));
const School = Loadable(lazy(() => import('../pages/about-school/School')));
const Progress = Loadable(lazy(() => import('../pages/about-school/Progress')));
const Assessment = Loadable(lazy(() => import('../pages/about-school/Assessment')));
const Dashboard = Loadable(lazy(() => import('../pages/dashboard/DashboardDefault')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <Dashboard />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <Dashboard />
        },
      ]
    },
    {
      path: 'assessment',
      element: <Assessment />
    },
    {
      path: 'school',
      element: <School />
    },
    {
      path: 'test',
      element: <Test />
    },
    {
      path: 'report',
      element: <Report />
    },
    {
      path: 'pupil',
      element: <Pupil />
    },
    {
      path: 'progress',
      element: <Progress />
    }
  ]
};

export default MainRoutes;
