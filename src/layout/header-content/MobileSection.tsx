import { useEffect, useRef, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Popper from '@mui/material/Popper';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Search from './Search';
import Profile from './profile/Profile';
import Transitions from '../../components/@extended/Transitions';
import MoreOutlined from '@ant-design/icons/MoreOutlined';

export default function MobileSection() {
  const theme = useTheme();

  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement | null>(null);
  const prevOpen = useRef<boolean>(false);

  const handleClose = (event: MouseEvent | TouchEvent) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as Node)) {
      return;
    }
    setOpen(false);
  };

  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      (anchorRef.current as HTMLElement).focus();
    }
    prevOpen.current = open;
  }, [open]);

  const iconBackColorOpen = 'grey.300';
  const iconBackColor = 'grey.100';

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <>
      <Box sx={{ flexShrink: 0, ml: 0.75 }}>
        <IconButton
          sx={{ color: 'text.primary', bgcolor: open ? iconBackColorOpen : iconBackColor }}
          aria-label="open more menu"
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          color="secondary"
        >
          <MoreOutlined />
        </IconButton>
      </Box>
      <Popper
        placement="bottom-end"
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        sx={{ width: '100%' }}
        popperOptions={{
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, 9],
              },
            },
          ],
        }}
      >
        {({ TransitionProps }) => (
          <Transitions type="fade" in={open} {...TransitionProps}>
            <Paper sx={{ boxShadow: theme.shadows }}>
              <ClickAwayListener onClickAway={handleClose}>
                <AppBar color="inherit">
                  <Toolbar>
                    <Search />
                    <Profile />
                  </Toolbar>
                </AppBar>
              </ClickAwayListener>
            </Paper>
          </Transitions>
        )}
      </Popper>
    </>
  );
}
