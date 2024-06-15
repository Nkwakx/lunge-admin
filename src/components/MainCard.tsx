import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { forwardRef } from 'react';
import { MainCardProps, Ref } from '../types/card';

const headerSX = {
  p: 2.5,
  '& .MuiCardHeader-action': { m: '0px auto', alignSelf: 'center' }
};

// eslint-disable-next-line react-refresh/only-export-components
export default forwardRef<Ref, MainCardProps>(({
  border = true,
  boxShadow,
  children,
  content = true,
  contentSX = {},
  darkTitle,
  elevation,
  secondary,
  shadow,
  sx = {},
  title,
  ...others
}, ref) => {
  const theme = useTheme();
  boxShadow = theme.palette.mode === 'dark'? boxShadow || true : boxShadow;

  return (
    <Card
      elevation={elevation || 0}
      ref={ref}
      {...others}
      sx={{
        border: border? '1px solid' : 'none',
        borderRadius: 2,
        borderColor: theme.palette.mode === 'dark'? theme.palette.divider : theme.palette.grey[800], 
        boxShadow: boxShadow && (!border || theme.palette.mode === 'dark')? shadow || theme.shadows : 'inherit', 
        ':hover': {
          boxShadow: boxShadow? shadow || theme.shadows : 'inherit',
        },
        '& pre': {
          m: 0,
          p: '16px!important',
          fontFamily: theme.typography.fontFamily,
          fontSize: '0.75rem',
        },
        ...sx,
      }}
    >
      {/* card header and action */}
      {!darkTitle && title && <CardHeader sx={headerSX} titleTypographyProps={{ variant: 'subtitle1' }} title={title} action={secondary} />}
      {darkTitle && title && <CardHeader sx={headerSX} title={<Typography variant="h3">{title}</Typography>} action={secondary} />}

      {/* card content */}
      {content && <CardContent sx={contentSX}>{children}</CardContent>}
      {!content && children}
    </Card>
  );
});
