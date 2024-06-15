import { ReactNode } from 'react'; // Import ReactNode

// material-ui
import { Box, Grid } from '@mui/material';

// project import
import AuthFooter from '../../components/cards/AuthFooter';
import LogoIcon from '../../components/logo/LogoIcon';
import AuthCard from './AuthCard';


interface AuthWrapperProps {
  children: ReactNode;
}

export default function AuthWrapper({ children }: AuthWrapperProps) {
  return (
    <Box sx={{ minHeight: '90vh' }}>
      <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
      <Grid item xs={12} sx={{ ml: 3}}>
          <LogoIcon/>
        </Grid>
        <Grid item xs={12}>
          <Grid
            item
            xs={12}
            container
            justifyContent="center"
            alignItems="center"
            sx={{ minHeight: { xs: 'calc(100vh - 134px)', md: 'calc(100vh - 130px)' } }}
          >
            <Grid item>
              <AuthCard>{children}</AuthCard>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <AuthFooter />
        </Grid>
      </Grid>
    </Box>
  );
}
