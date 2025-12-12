// Shared TypeScript types and interfaces

export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export type CardVariant = 'default' | 'elevated' | 'outlined' | 'flat';

export type TypographyVariant = 
  | 'h1' 
  | 'h2' 
  | 'h3' 
  | 'h4' 
  | 'h5' 
  | 'h6' 
  | 'body' 
  | 'body-sm' 
  | 'caption' 
  | 'label';

export type ColorScheme = 'primary' | 'accent' | 'success' | 'warning' | 'error';

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  url: string;
  image?: string;
  structuredData?: object[];
}







