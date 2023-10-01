import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  bgColor?: string;
  txtColor?: string;
  txtHoverColor?: string;
}
