/**
 * Tienda. GitHub Pages es estático, así que el pago lo gestiona un servicio externo:
 * crea un "Payment Link" en Stripe (o Gumroad, Ko-fi...) y pega la URL en `checkoutUrl`.
 * Si `checkoutUrl` está vacío, el botón lleva a /contacto.
 * Las imágenes van en public/images/ (p. ej. "/images/bruma.jpg").
 */
export interface Product {
  id: string
  title: string
  description: string
  price?: string // texto libre: "18 €". Vacío = "Consultar precio"
  image?: string
  label?: string
  checkoutUrl?: string
  color: 'rosa' | 'mostaza' | 'lila' | 'azul' | 'morado' | 'verde'
}

export const products: Product[] = [
  {
    id: 'bruma',
    title: 'Bruma',
    description:
      'Mujeres que aman a mujeres, la posibilidad de la otra, la belleza, lo abrupto. La Niña Azul Editorial.',
    label: 'Novela',
    image: '/images/bruma-cover.jpg',
    checkoutUrl: 'https://laninaazul.es',
    color: 'lila',
  },
  {
    id: 'poemario-ilustrado',
    title: 'Poemario ilustrado',
    description: 'Poemas e ilustraciones en colaboración con Eva Marina Burckhardt.',
    label: 'Próximamente',
    image: '/images/img_20190524_171635.jpg',
    color: 'rosa',
  },
  {
    id: 'postales',
    title: 'Serie de postales',
    description: 'Fragmentos breves de mi escritura convertidos en tarjetas para enviar o guardar.',
    label: 'Postales',
    image: '/images/img_20210501_174354.jpg',
    color: 'mostaza',
  },
]
