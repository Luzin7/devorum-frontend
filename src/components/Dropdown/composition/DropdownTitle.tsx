interface DropdownTitleProps {
  title: string
}

export function DropdownTitle({ title }: DropdownTitleProps) {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}
