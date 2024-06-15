import React from 'react'; // Ensure React is imported for TypeScript
import { useTheme } from '@mui/material/styles';

// project import
import DrawerHeaderStyled from './LogoDisplayStyled';
import Logo from '../../../components/logo/Logo';

// Define the interface for the props of the DrawerHeader component
interface DrawerHeaderProps {
  open: boolean;
}

// ==============================|| DRAWER HEADER ||============================== //
interface LogoWithIsIconProps extends React.ComponentPropsWithoutRef<typeof Logo> {
  isIcon?: boolean;
}

const withIsIcon = (Component: React.ComponentType<LogoWithIsIconProps>) => (props: LogoWithIsIconProps) => {
  const { isIcon, ...otherProps } = props;
  return <Component {...otherProps} isIcon={isIcon} />;
};

export default function LogoLayout({ open }: DrawerHeaderProps) {
  const theme = useTheme();
  const LogoWithIsIcon = withIsIcon(Logo);

  return (
    <DrawerHeaderStyled theme={theme} open={!!open}>
      <LogoWithIsIcon isIcon={!open} to="/" sx={{ width: open ? 'auto' : 35, height: 35 }} />
    </DrawerHeaderStyled>
  );
}
