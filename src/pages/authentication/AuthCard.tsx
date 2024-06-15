import { ReactNode } from 'react'; // Import ReactNode

// material-ui
import Box from '@mui/material/Box';

// project import
import MainCard from '../../components/MainCard';

// ==============================|| AUTHENTICATION - CARD WRAPPER ||============================== //

interface AuthCardProps {
  children: ReactNode; 
}

export default function AuthCard({ children,...other }: AuthCardProps) {
  return (
    <MainCard
      sx={{ 
        maxWidth: { xs: 600, lg: 550 }, 
        margin: { xs: 2.5, md: 3 }, 
        '& > *': { flexGrow: 1, flexBasis: '50%' } }}
      content={false}
      {...other}
      border={false}
      title={null}
    >
      <Box sx={{ p: { xs: 2, sm: 3, md: 4, xl: 5 } }}>{children}</Box>
    </MainCard>
  );
}