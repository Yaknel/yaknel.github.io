import type { Photo } from '@/content/photos'
import classes from './Gallery.module.css'

/** Cinta de fotos en movimiento continuo; se detiene al pasar el ratón. */
export function Gallery({ photos, label }: { photos: readonly Photo[]; label: string }) {
  // Se duplica la lista para que el bucle sea continuo; la copia se oculta a lectores de pantalla.
  return (
    <section className={classes.wrap} aria-label={label}>
      <div className={classes.track}>
        {[...photos, ...photos].map((p, i) => (
          <img
            key={`${p.src}-${i}`}
            src={p.src}
            alt={i < photos.length ? p.alt : ''}
            aria-hidden={i >= photos.length || undefined}
            loading="lazy"
            decoding="async"
            className={classes.item}
            data-shape={i % 3 === 0 ? 'arch' : i % 3 === 1 ? 'rect' : 'pill'}
          />
        ))}
      </div>
    </section>
  )
}
