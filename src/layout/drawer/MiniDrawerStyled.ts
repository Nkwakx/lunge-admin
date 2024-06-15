// material-ui
import { styled, Theme, CSSObject } from '@mui/material/styles';
import Drawer, { DrawerProps } from '@mui/material/Drawer';
import { drawerWidth } from '../../types/navigation';

// project import

// Define the mixins for opened and closed drawer states
const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  borderRight: '1px solid',
  borderRightColor: theme.palette.divider,

  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),

  overflowX: 'hidden',
  boxShadow: 'none'
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),

  overflowX: 'hidden',
  width: 0,
  borderRight: 'none',
  boxShadow: theme.shadows[0]
});

// Define MiniDrawerStyledProps to extend DrawerProps
interface MiniDrawerStyledProps extends DrawerProps {
  open?: boolean; // Optional 'open' prop to control the drawer state
}

// Adjust the styled function to match the expected type signature
const MiniDrawerStyled = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== 'open'
})<MiniDrawerStyledProps>(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open ? openedMixin(theme) : closedMixin(theme)),
  '& .MuiDrawer-paper': open ? openedMixin(theme) : closedMixin(theme)
}));

export default MiniDrawerStyled;
