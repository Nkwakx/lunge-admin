import React from 'react';
// material-ui
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

// project import
import { ColorStyleParams } from '../../types/colors';
import getColors from '../../utils/getColors';

const Dot: React.FC<ColorStyleParams> = ({ color, size, variant, sx }) => {
  const theme = useTheme();
  const colors = getColors(theme, color || 'primary');
  const { main } = colors;

  return (
    <Box
      sx={{
        width: size || 8,
        height: size || 8,
        borderRadius: '50%',
        bgcolor: variant === 'outlined' ? '' : main,
        ...(variant === 'outlined' && { border: `1px solid ${main}` }),
        ...sx
      }}
    />
  );
};

export default Dot;
