// material-ui
import Box from '@mui/material/Box';

// project import
import NavGroup from './NavGroup';
import MenuRoutes from '../../routes/MenuRoutes';

// ==============================|| DRAWER CONTENT - NAVIGATION ||============================== //

export default function Navigation() {
  const navGroups = MenuRoutes.items.map((item) => {
    switch (item.type) {
      case 'group':
        return <NavGroup key={item.id} item={item} />;
      default:
        return;
    }
  });

  return <Box sx={{ pt: 2 }}>{navGroups}</Box>;
}
