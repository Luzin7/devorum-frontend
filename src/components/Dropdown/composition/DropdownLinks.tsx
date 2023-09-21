import { ReactNode } from 'react'

interface DropdownLinksProps {
  children: ReactNode
}

export function DropdownLinks({ children }: DropdownLinksProps) {
  return <ul className="flex flex-col gap-2">{children}</ul>
}
