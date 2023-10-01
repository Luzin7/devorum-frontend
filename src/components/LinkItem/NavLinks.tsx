import Link from 'next/link';
import React, { ComponentProps } from 'react';

interface LinksProps extends ComponentProps<typeof Link> {
  title: string;
}

export function LinkItem({ title, ...props }: LinksProps) {
  return (
    <Link {...props}>
      <li>{title}</li>
    </Link>
  );
}
