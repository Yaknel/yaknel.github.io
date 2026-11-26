import { Button, type ButtonProps } from '@mantine/core'
import type { ReactNode } from 'react'
import { Link } from 'react-router'
import { isExternalUrl } from '@/lib/url'

interface SmartButtonProps extends ButtonProps {
  href: string
  children: ReactNode
}

/** Botón que usa el router para rutas internas y abre en pestaña nueva los enlaces externos. */
export function SmartButton({ href, children, ...props }: SmartButtonProps) {
  if (isExternalUrl(href)) {
    return (
      <Button component="a" href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </Button>
    )
  }
  return (
    <Button component={Link} to={href} {...props}>
      {children}
    </Button>
  )
}
