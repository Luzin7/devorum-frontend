import { HtmlHTMLAttributes, ReactNode } from 'react';

interface DropdownRootProps extends HtmlHTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function DropdownRoot({ children, ...props }: DropdownRootProps) {
  return <div {...props}>{children}</div>;
}
