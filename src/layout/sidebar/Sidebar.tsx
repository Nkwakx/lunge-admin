import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useMemo } from 'react';

// project imports
import { handlerDrawerOpen, useGetMenuMaster } from '../../app/features/api/menu';
import LogoDisplay from '../header/logo/LogoDisplay';
import SidebarDisplay from './SidebarDisplay';
import MiniDrawerStyled from '../drawer/MiniDrawerStyled';
import { drawerWidth } from '../../types/navigation';

// ==============================|| MAIN LAYOUT - DRAWER ||============================== //

interface SideProps {
  window?: () => Window | undefined;
}

export default function Sidebar({ window }: SideProps) {
  const { menuMaster } = useGetMenuMaster() || {};
  const drawerOpen = menuMaster?.isDashboardDrawerOpened ?? false; // Fallback to false if undefined
  const theme = useTheme(); // Get the theme object
  const matchDownMD = useMediaQuery(theme.breakpoints.down('md')); // No need to convert to string

  // responsive drawer container
  const container = window ? () => window()?.document.body ?? null : undefined;

  const logoDisplay = useMemo(() => <LogoDisplay open={!!drawerOpen} />, [drawerOpen]);
  const sideNavigation = useMemo(() => <SidebarDisplay />, []);

  return (
    <Box component="nav" sx={{ flexShrink: { md: 0 }, zIndex: 1200 }} aria-label="mailbox folders">
      {!matchDownMD ? (
        <MiniDrawerStyled variant="permanent" open={drawerOpen}>
          {logoDisplay}
          {sideNavigation}
        </MiniDrawerStyled>
      ) : (
        <Drawer
          container={container}
          variant="temporary"
          open={drawerOpen}
          onClose={() => handlerDrawerOpen(!drawerOpen.toString())}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', lg: 'none' },
            '&.MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              borderRight: '1px solid',
              borderRightColor: 'divider',
              backgroundImage: 'none',
              boxShadow: 'inherit'
            }
          }}
        >
          {logoDisplay}
          {sideNavigation}
        </Drawer>
      )}
    </Box>
  );
}
