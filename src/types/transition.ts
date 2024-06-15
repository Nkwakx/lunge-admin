
// Define a type for the transition props
export interface TransitionProps {
    children: React.ReactNode;
    position?: 'top-left' | 'top-right' | 'top' | 'bottom-left' | 'bottom-right' | 'bottom' | 'top-left';
    type?: 'grow' | 'collapse' | 'fade' | 'slide' | 'zoom';
    direction?: 'up' | 'right' | 'left' | 'down';
    [x: string]: unknown; // For other props
}