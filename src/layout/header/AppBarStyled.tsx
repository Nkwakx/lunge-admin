
// material-ui
import AppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import { drawerWidth } from '../../types/navigation';

// project import

// ==============================|| HEADER - APP BAR STYLED ||============================== //

interface AppBarStyledProps {
  open: boolean;
}

const AppBarStyled = styled(AppBar, { shouldForwardProp: (prop) => prop !== 'open' })<AppBarStyledProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  left: 0,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(!open && {
    width: `calc(103.9% - ${theme.spacing(7.5)})`
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));

export default AppBarStyled;
