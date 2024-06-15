import { Link } from 'react-router-dom';

// material-ui
import { ButtonBase } from '@mui/material';
import Stack from '@mui/material/Stack';

// project import
import { LogoSectionProps } from '../../types/logo';
import LogoIcon from './LogoIcon';

// ==============================|| MAIN LOGO ||============================== //

const Logo: React.FC<LogoSectionProps> = ({ sx, to }) => {
  const defaultPath = '/dashboard/default';
  return (
    <ButtonBase disableRipple component={Link} to={!to? defaultPath : to} sx={sx}>
      <Stack direction="row" spacing={1} alignItems="center">
        <LogoIcon />
      </Stack>
    </ButtonBase>
  );
};

export default Logo;
