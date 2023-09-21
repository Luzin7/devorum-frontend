import { ElementType } from 'react'

interface DropdownHeaderProps {
  icon: ElementType
  title: string
}

export function DropdownHeader({ icon: Icon, title }: DropdownHeaderProps) {
  return (
    <div>
      <Icon />
      <p>{title}</p>
    </div>
  )
}
