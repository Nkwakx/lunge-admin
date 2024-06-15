// material-ui
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import useMediaQuery from '@mui/material/useMediaQuery';

// project import
import MobileSection from './MobileSection';
import Notification from './Notification';
import Search from './Search';
import Profile from './profile/Profile';

// project import
import { DarkModeOutlined, LightModeOutlined } from '@mui/icons-material';
import { Theme, useTheme } from '@mui/material';
import { setMode } from '../../app/features/slices/global/ModeSlice';
import { useAppDispatch } from '../../app/store';

// ==============================|| HEADER - CONTENT ||============================== //

export default function HeaderContent() {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const downLG = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'));

  return (
    <>
      {!downLG && <Search />}
      {downLG && <Box sx={{ width: '100%', ml: 1 }} />}
      <IconButton
        disableRipple
        sx={{ color: 'text.primary'}}
        onClick={() => dispatch(setMode())}
      >
         {theme.palette.mode === "dark" ? (
           <LightModeOutlined sx={{ fontSize: "25px" }} /> 
          ) : (
            <DarkModeOutlined sx={{ fontSize: "25px" }} />
          )}
      </IconButton>

      <Notification />
      {!downLG && <Profile />}
      {downLG && <MobileSection />}
    </>
  );
}
