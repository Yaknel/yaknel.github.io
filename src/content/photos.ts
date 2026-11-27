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
  hero: img('4.jpg', 'Yaknel con la cabeza hacia atrás sobre un fondo pintado de morado'),
  writing: {
    book: img('bruma-cover.jpg', 'Portada del libro Bruma'),
    poetry: img('img_20201204_105404-copy.jpg', 'Yaknel con sombrero entre las plantas'),
    publication: img(
      'quote.jpg',
      'Pintura: un árbol con frutos rojos dentro de un círculo azul, rodeado de estrellas',
    ),
    media: [
      img('4.jpg', 'Yaknel con la cabeza hacia atrás sobre un fondo pintado de morado'),
      img('img_20210616_182151.jpg', 'Retrato de Yaknel'),
      img('001finalportada.jpg', 'Portada de Da Yaknel Podcast'),
    ],
  },
  workshop: img('escritura.jpg', 'Yaknel escribiendo a mano en una mesa de madera'),
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
  workWithMe: {
    editorial: img('img_20210616_182151.jpg', 'Retrato de Yaknel'),
    collaboration: img('sara.jpg', 'Pintura colorida de una colaboración creativa con Sara'),
  },
  speaking: img('season-opening-2020.jpg', 'Yaknel presentando un evento'),
  somatica: {
    hero: img('pitaya_yoga2019_73.jpg', 'Práctica somática entre plantas y piedras'),
    guide: img('img_20210806_102800.jpg', 'Polaroid de Yaknel en el invernadero'),
  },
  about: img('img_20210806_102800.jpg', 'Polaroid de Yaknel en el invernadero'),
  aboutMore: img('img_20191020_172048.jpg', 'Retrato con abrigo verde'),
  newsletter: img('img_20201204_105005.jpg', 'Yaknel sentada entre plantas'),
  gallery: [
    img('015.jpg', 'Tela roja extendida frente a una casa amarilla'),
    img('img_20201204_105005.jpg', 'Yaknel sentada entre plantas'),
    img('img_20190704_135204.jpg', 'Yaknel frente a una puerta antigua'),
    img('pitaya_yoga2019_75-copy.jpg', 'Práctica somática en el bosque'),
    img('012.jpg', 'Taller al aire libre en un jardín'),
    img('img_20191020_172048.jpg', 'Retrato con abrigo verde'),
    img('yaknel-yoga-meditation-somatics-4.jpg', 'Yaknel meditando frente al mar'),
    img('img_20210703_193957.jpg', 'Yaknel en el invernadero'),
  ],
} as const
