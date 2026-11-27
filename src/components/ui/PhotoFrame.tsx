import type { CSSProperties } from 'react'
import type { Photo } from '@/content/photos'
import classes from './PhotoFrame.module.css'

interface PhotoFrameProps {
  photo: Photo
  /** Forma del marco: arco (como una ventana), rectángulo o cápsula. */
  shape?: 'arch' | 'rect' | 'pill'
  ratio?: number
  className?: string
  style?: CSSProperties
  priority?: boolean
}

/** Foto con zoom suave al pasar el ratón. Cuadrada por defecto, como en yaknel.com. */
export function PhotoFrame({
  photo,
  shape = 'rect',
  ratio = 1,
  className,
  style,
  priority = false,
}: PhotoFrameProps) {
  return (
    <figure
      className={[classes.frame, className].filter(Boolean).join(' ')}
      data-shape={shape}
      style={{ aspectRatio: ratio, ...style }}
    >
      <img
        src={photo.src}
        alt={photo.alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className={classes.img}
      />
    </figure>
  )
}
