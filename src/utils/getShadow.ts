import { Theme as MuiTheme } from '@mui/material/styles';

// Define type for shadow
type ShadowType =
  | 'secondary'
  | 'error'
  | 'warning'
  | 'info'
  | 'success'
  | 'primaryButton'
  | 'secondaryButton'
  | 'errorButton'
  | 'warningButton'
  | 'infoButton'
  | 'successButton';

// Extend the Theme interface to include customShadows
interface Theme extends MuiTheme {
  customShadows: {
    secondary: string;
    error: string;
    warning: string;
    info: string;
    success: string;
    primaryButton: string;
    secondaryButton: string;
    errorButton: string;
    warningButton: string;
    infoButton: string;
    successButton: string;
    primary: string;
  };
}

// ==============================|| CUSTOM FUNCTION - COLOR SHADOWS ||============================== //

const getShadow = (theme: Theme, shadow: ShadowType): string => {
  switch (shadow) {
    case 'secondary':
      return theme.customShadows.secondary;
    case 'error':
      return theme.customShadows.error;
    case 'warning':
      return theme.customShadows.warning;
    case 'info':
      return theme.customShadows.info;
    case 'success':
      return theme.customShadows.success;
    case 'primaryButton':
      return theme.customShadows.primaryButton;
    case 'secondaryButton':
      return theme.customShadows.secondaryButton;
    case 'errorButton':
      return theme.customShadows.errorButton;
    case 'warningButton':
      return theme.customShadows.warningButton;
    case 'infoButton':
      return theme.customShadows.infoButton;
    case 'successButton':
      return theme.customShadows.successButton;
    default:
      return theme.customShadows.primary;
  }
};

export default getShadow;
