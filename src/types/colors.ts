import { SxProps, Theme } from "@mui/material";
import { ReactNode, CSSProperties } from "react";

export type ColorName = 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';

export interface ColorStyleParams {
  theme: Theme;
  color: ColorName;
  variant: 'filled' | 'outlined' | 'text';
  sx?: SxProps;
  size?: number;
}

export interface AvatarProps {
  theme: Theme;
  children?: ReactNode;
  color?: ColorName;
  type?: 'filled' | 'outlined' | 'text';
  size?: 'badge' | 'xs' | 'sm' | 'lg' | 'xl' | 'md';
  alt?: string;
  src?: string;
  sx?: CSSProperties;
  others?: Record<string, unknown>;
}

