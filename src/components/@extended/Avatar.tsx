import MuiAvatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import React, { CSSProperties } from 'react';

import getColors from '../../utils/getColors';
import { ColorStyleParams, AvatarProps } from '../../types/colors';

// Function to get color styles based on theme, color, and type
function getColorStyle({ theme, color, variant }: ColorStyleParams): Partial<CSSProperties> {
  const colors = getColors(theme, color);
  const { light, main, contrastText } = colors;

  switch (variant) {
    case 'filled':
      return {
        color: contrastText,
        background: main
      };
    case 'outlined':
      return {
        color: main,
        border: '1px solid',
        borderColor: main,
        background: 'transparent'
      };
    case 'text':
      return {
        color: main,
        border: '1px solid',
        borderColor: light,
        background: light
      };
    default:
      return {
        color: main,
        background: light
      };
  }
}

// Function to get size styles based on size
function getSizeStyle({ size }: AvatarProps): Partial<CSSProperties> {
  switch (size) {
    case 'badge':
      return {
        border: '2px solid',
        fontSize: '0.675rem',
        width: 20,
        height: 20
      };
    case 'xs':
      return {
        fontSize: '0.75rem',
        width: 24,
        height: 24
      };
    case 'sm':
      return {
        fontSize: '0.875rem',
        width: 32,
        height: 32
      };
    case 'lg':
      return {
        fontSize: '1.2rem',
        width: 52,
        height: 52
      };
    case 'xl':
      return {
        fontSize: '1.5rem',
        width: 64,
        height: 64
      };
    case 'md':
    default:
      return {
        fontSize: '1rem',
        width: 40,
        height: 40
      };
  }
}

const AvatarStyle = styled(MuiAvatar, { shouldForwardProp: (prop) => prop !== 'color' && prop !== 'type' && prop !== 'size' })(
  ({ theme, color = 'primary', type = 'filled', size = 'md' }: AvatarProps) => ({
    ...getSizeStyle({ theme, size }), // Add theme property to getSizeStyle()
    ...getColorStyle({ theme, color, variant: type }),
    ...(size === 'badge' && {
      borderColor: theme.palette.background.default,
    }),
  })
);


const Avatar: React.FC<AvatarProps> = ({ children, color = 'primary', type, size = 'md', alt, src, sx, ...others }) => {
  return (
    <AvatarStyle color={color} type={type} size={size} alt={alt} src={src} sx={sx} {...others}>
      {children}
    </AvatarStyle>
  );
};

export default Avatar;
