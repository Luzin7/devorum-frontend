import LinkItem from '@components/LinkItem';
import React, { ComponentProps } from 'react';

type DropdownLinkProps = ComponentProps<typeof LinkItem>;

export function DropdownLink({ title, ...props }: DropdownLinkProps) {
  return <LinkItem title={title} {...props} />;
}
