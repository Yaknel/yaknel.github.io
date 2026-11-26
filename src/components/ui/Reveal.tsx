import { type ElementType, type ReactNode, useEffect, useRef, useState } from 'react'
import classes from './Reveal.module.css'

type Effect = 'up' | 'down' | 'left' | 'right' | 'fade' | 'zoom'

interface RevealProps {
  children: ReactNode
  effect?: Effect
  /** Retraso en ms, para encadenar elementos (efecto cascada). */
  delay?: number
  component?: ElementType
  className?: string
}

/**
 * Hace aparecer el contenido al entrar en pantalla y lo desvanece al salir,
 * en ambos sentidos de scroll. Sin animaciones si la persona prefiere movimiento reducido.
 */
export function Reveal({ children, effect = 'up', delay = 0, component, className }: RevealProps) {
  const Component = component ?? 'div'
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry?.isIntersecting ?? true),
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Component
      ref={ref}
      className={[classes.reveal, className].filter(Boolean).join(' ')}
      data-effect={effect}
      data-visible={visible || undefined}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Component>
  )
}
