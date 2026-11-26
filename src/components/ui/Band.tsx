import { Box, Container, type ContainerProps } from '@mantine/core'
import type { ReactNode } from 'react'
import { darkTones, type BandTone } from './bandTones'
import classes from './Band.module.css'

interface BandProps {
  tone: BandTone
  id?: string
  labelledBy?: string
  size?: ContainerProps['size']
  children: ReactNode
  /** Decoración opcional (formas) que se coloca detrás del contenido. */
  decoration?: ReactNode
}

/** Franja a lo ancho de la pantalla con fondo propio: separa visualmente cada sección. */
export function Band({ tone, id, labelledBy, size, children, decoration }: BandProps) {
  return (
    <Box
      component="section"
      id={id}
      aria-labelledby={labelledBy}
      className={classes.band}
      data-tone={tone}
      data-dark={darkTones.includes(tone) || undefined}
    >
      {decoration}
      <Container size={size} className={classes.inner}>
        {children}
      </Container>
    </Box>
  )
}
