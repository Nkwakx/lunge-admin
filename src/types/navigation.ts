import { ReactNode } from "react";
import { ColorName } from "./colors";

type ChipVariant = 'filled' | 'outlined';

// Update the NavItemProps interface to include the chip variant type
 interface ChipData {
  color: ColorName; // Assuming you have defined ColorName type
  size: 'small' | 'medium';
  label: string;
  variant: ChipVariant; // Update here
  avatar?: ReactNode;
}

export interface MenuItem {
    id: string;
    title: string;
    type: 'group' | 'item' | 'collapse'; 
    url?: string; 
    icon?: unknown; 
    target?: boolean;
    external?: boolean;
    disabled?: boolean;
    breadcrumbs?: boolean;
    children?: MenuItem[]; 
    chip?: ChipData; 
  }
  
export interface MenuMaster {
    isDashboardDrawerOpened: boolean;
  }
  
export interface NavGroupProps {
    item: MenuItem;
  }

export interface NavItemProps {
    item: MenuItem;
    level: number;
  }

export interface BreadcrumbsProps {
  navigation: {
    items: MenuItem[];
  };
  title?: string;
  [key: string]: unknown; 
}

// tab panel wrapper
export interface TabPanelProps {
  children?: React.ReactNode;
  value: number;
  index: number;
}

export const drawerWidth = 260;

export const twitterColor = '#1DA1F2';
export const facebookColor = '#3b5998';
export const linkedInColor = '#0e76a8';