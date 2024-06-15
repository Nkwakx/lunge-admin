import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useGetMenuMaster } from '../../app/features/api/menu';

import { MenuItem, NavGroupProps } from '../../types/navigation';
import NavItem from './NavItem';

const NavGroup: React.FC<NavGroupProps> = ({ item }) => {
  const { menuMaster } = useGetMenuMaster();
  const drawerOpen = menuMaster?.isDashboardDrawerOpened ?? false;

  const sideNavigation = item.children?.map((menuItem: MenuItem) => {
    switch (menuItem.type) {
      case 'item':
        return <NavItem key={menuItem.id} item={menuItem} level={1} />;
      default:
        return;
    }
  });

  return (
    <List
      subheader={
        item.title &&
        drawerOpen && (
          <Box sx={{ pl: 3, mb: 1.5 }}>
            <Typography variant="subtitle2" color="textSecondary">
              {item.title}
            </Typography>
          </Box>
        )
      }
      sx={{ mb: drawerOpen ? 1.5 : 0, py: 0, zIndex: 0 }}
    >
      {sideNavigation}
    </List>
  );
};

export default NavGroup;
