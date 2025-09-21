export interface PillProps {
  title: string;
}

export interface ButtonProps {
  title: string;
  // '?' makes the prop optional. We'll set a default value in the component.
  size?: 'sm' | 'md' | 'lg';
  shape?: 'sm' | 'md' | 'full';
}