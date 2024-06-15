import { FunctionComponent, SVGProps } from "react";

export interface LogoSectionProps {
    sx: object;
    to: string;
    enabled?: boolean;
    icon?: React.FunctionComponent;
    logo?: string | FunctionComponent<SVGProps<SVGSVGElement>>;
  }