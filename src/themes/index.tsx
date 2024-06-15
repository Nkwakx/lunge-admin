import { ReactNode, useMemo } from 'react';

// material-ui
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useAppSelector } from '../app/store';
import { themeSettings } from './theme';

// ==============================|| DEFAULT THEME - MAIN  ||============================== //

interface ThemeCustomizationProps {
  children: ReactNode;
}

export default function ThemeCustomization({ children }: ThemeCustomizationProps) {
  const { mode } = useAppSelector((state) => state.theme);
  const themes =  useMemo(() =>createTheme(themeSettings(mode)), [mode]);
  
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
