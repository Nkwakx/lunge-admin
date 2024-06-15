import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

// material-ui
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import useMediaQuery from '@mui/material/useMediaQuery';

// project import
import { Theme } from '@mui/material';

import Header from './header/Header';
import navigation from '../routes/MenuRoutes';
import Sidebar from './sidebar/Sidebar';
import Loader from '../components/Loader';
import Breadcrumbs from '../components/@extended/Breadcrumbs';
import { handlerDrawerOpen, useGetMenuMaster } from '../app/features/api/menu';

// ==============================|| MAIN LAYOUT ||============================== //

export default function MainLayout() {
  const { menuMasterLoading } = useGetMenuMaster();
  const downXL = useMediaQuery((theme: Theme) => theme.breakpoints.down('xl'));

  useEffect(() => {
    handlerDrawerOpen(!downXL);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [downXL]);

  if (menuMasterLoading) return <Loader />;

  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <Header />
      <Sidebar />
      <Box component="main" sx={{ width: 'calc(100% - 260px)', flexGrow: 1, p: { xs: 2, sm: 3 },  bgcolor: 'primary.lighter', }}>
        <Toolbar />
        <Breadcrumbs navigation={navigation} title="" />
        <Outlet />
      </Box>
    </Box>
  );
}
