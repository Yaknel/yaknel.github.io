import { Box, Container } from '@mantine/core'
import type { ReactNode } from 'react'
import type { Photo } from '@/content/photos'
import { darkTones, type BandTone } from './bandTones'
import { PhotoFrame } from './PhotoFrame'
import { Reveal } from './Reveal'
import classes from './Split.module.css'

interface SplitProps {
  tone: Exclude<BandTone, 'blanco'>
  photo: Photo
  /** true: la foto va a la izquierda y el bloque de color a la derecha. */
  photoFirst?: boolean
  id?: string
  labelledBy?: string
  priority?: boolean
  /** 'contain': muestra la imagen entera, más pequeña y centrada (p. ej. la portada de un libro). */
  photoFit?: 'cover' | 'contain'
  children: ReactNode
}

/**
 * El layout de yaknel.com: un bloque de color con el texto junto a una foto cuadrada,
 * sobre fondo blanco. En móvil la foto va arriba y el bloque debajo.
 */
export function Split({
  tone,
  photo,
  photoFirst = false,
  id,
  labelledBy,
  priority,
  photoFit = 'cover',
  children,
}: SplitProps) {
  return (
    <Box component="section" id={id} aria-labelledby={labelledBy} className={classes.section}>
      <Container size="xl" className={classes.grid} data-photo-first={photoFirst || undefined}>
        <Reveal effect={photoFirst ? 'right' : 'left'} className={classes.panelWrap}>
          <div
            className={classes.panel}
            data-tone={tone}
            data-dark={darkTones.includes(tone) || undefined}
          >
            {children}
          </div>
        </Reveal>
        <Reveal effect="fade" delay={150} className={classes.photo}>
          {photoFit === 'contain' ? (
            <div className={classes.contain} data-tone={tone}>
              <img
                src={photo.src}
                alt={photo.alt}
                loading={priority ? 'eager' : 'lazy'}
                decoding="async"
              />
            </div>
          ) : (
            <PhotoFrame photo={photo} ratio={1} priority={priority} />
          )}
        </Reveal>
      </Container>
    </Box>
  )
}
