import Link from 'next/link'
import { HOME } from 'utils'

interface LogoProps {
  content: string
}

export function Logo({ content }: LogoProps) {
  return (
    <Link href={HOME}>
      <h1 className="font-semibold text-lg">{content}</h1>
    </Link>
  )
}
