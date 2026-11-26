/**
 * Fotos de la web (en public/images). Cambia un nombre de archivo para cambiar la foto.
 * `alt` describe la imagen para lectores de pantalla y buscadores.
 */
export interface Photo {
  src: string
  alt: string
}

const img = (file: string, alt: string): Photo => ({ src: `/images/${file}`, alt })

export const photos = {
  hero: [
    img('img_20210616_182151.jpg', 'Retrato de Yaknel'),
    img('019.jpg', 'Performance con una gran tela roja en un jardín'),
    img('yaknel-yoga-meditation-somatics-4.jpg', 'Yaknel meditando frente al mar'),
  ],
  newsletter: img('img_20201204_105404-copy.jpg', 'Yaknel con sombrero entre las plantas'),
  workshops: {
    'taller-mensual-online': img(
      'pitaya_yoga2019_73.jpg',
      'Práctica somática entre plantas y piedras',
    ),
    'poetry-project': img('opening-2020.jpg', 'Encuentro de escritura en Berlín'),
    'cronica-de-un-si': img('img_20210624_190347.jpg', 'Flor de la pasión'),
    'lo-que-quedo-dicho': img(
      '006.jpg',
      'Personas reunidas en un jardín alrededor de una tela roja',
    ),
    'tus-propios-votos': img('img_20210703_193949.jpg', 'Yaknel en un invernadero'),
  } as Record<string, Photo>,
  gallery: [
    img('015.jpg', 'Tela roja extendida frente a una casa amarilla'),
    img('img_20201204_105005.jpg', 'Yaknel sentada entre plantas'),
    img('img_20190704_135204.jpg', 'Yaknel frente a una puerta antigua'),
    img('pitaya_yoga2019_75-copy.jpg', 'Práctica somática en el bosque'),
    img('extra-episode.jpg', 'Escena de performance en una cocina'),
    img('gd.jpg', 'Yaknel en movimiento'),
    img('yaknel-writing-poetry-performance-1.jpg', 'Postura de yoga entre flores'),
    img('img_20210806_102800.jpg', 'Polaroid en el invernadero'),
    img('012.jpg', 'Taller al aire libre en un jardín'),
    img('img_20191020_172048.jpg', 'Retrato con abrigo verde'),
  ],
  about: img('img_20210703_193957.jpg', 'Yaknel en el invernadero'),
  aboutMore: img('img_20191020_175244.jpg', 'Retrato con luz de neón'),
  contact: img('img_20210513_102610_065.jpg', 'Yaknel paseando por la calle'),
} as const
