export interface MainCardProps {
    border?: boolean;
    boxShadow?: boolean;
    children: React.ReactNode;
    content?: boolean;
    contentSX?: Record<string, unknown>;
    darkTitle?: boolean;
    elevation?: number;
    secondary?: React.ReactNode;
    shadow?: string;
    sx?: object;
    title: React.ReactNode;
  }
  
export type Ref = HTMLDivElement | null;