// material-ui
import { styled } from '@mui/material/styles';
import Box, { BoxProps } from '@mui/material/Box';

interface LogoDisplayStyledProps extends BoxProps {
  open: boolean;
}

const LogoDisplayStyled = styled(Box, { shouldForwardProp: (prop) => prop !== 'open' })<LogoDisplayStyledProps>(({ theme, open }) => ({
  ...theme.mixins.toolbar,
  display: 'flex',
  alignItems: 'center',
  justifyContent: open ? 'flex-start' : 'center',
  paddingLeft: theme.spacing(open ? 3 : 0)
}));

export default LogoDisplayStyled;
