/**
 * Textos generales de la web. Edita aquí; los componentes solo leen estos datos.
 */
export interface NavItem {
  label: string
  to: string
}

export interface SocialLink {
  label: 'Substack' | 'Instagram' | 'YouTube' | 'Spotify' | 'LinkedIn' | 'Medium'
  href: string
}

export const site = {
  name: 'Yaknel',
  fullName: 'Yaknel Elorza',
  tagline: 'Escritora · Poeta',
  motto: 'In the middle of the cosmic crossing of our Universe',
  nav: [
    { label: 'Inicio', to: '/' },
    { label: 'Talleres', to: '/talleres' },
    { label: 'Tienda', to: '/tienda' },
    { label: 'Sobre mí', to: '/sobre-mi' },
    { label: 'Contacto', to: '/contacto' },
  ] satisfies NavItem[],
  // Rellena las URLs que falten; las vacías no se muestran.
  socials: [
    { label: 'Substack', href: 'https://yaknel.substack.com' },
    { label: 'Instagram', href: '' },
    { label: 'YouTube', href: '' },
    { label: 'Spotify', href: '' },
    { label: 'LinkedIn', href: '' },
    { label: 'Medium', href: '' },
  ] satisfies SocialLink[],
  hero: {
    title: 'In the middle of the cosmic crossing of our Universe',
    lead: 'Escritora y poeta. Palabra, cuerpo y memoria.',
  },
  newsletter: {
    title: 'Sigo Aquí',
    lead: 'Esfumarme en el tiempo a través de la palabra habitando la cuerpa. Recibe mis textos en tu correo.',
  },
  workshops: {
    title: 'Talleres',
    lead: 'Escritura creativa y somática para explorar tu voz.',
  },
  poetica: {
    title: 'La poética de la historia',
    lead: 'Libros personalizados que narran historias y vínculos reales.',
  },
  shop: {
    title: 'Tienda',
    lead: 'Libros y materiales. Pago seguro.',
  },
  about: {
    title: 'Donde se vive para dejar de existir',
    intro:
      'Escritora y poeta queer venezolana. Mi práctica artística se relaciona con el activismo de la vida cotidiana, buscando fomentar la creatividad y la autenticidad a través de experiencias tanto individuales como colectivas.',
    paragraphs: [
      'Su publicación más reciente, I don’t want to quote anyone but myself, apareció en la revista Futuress (Basilea, Suiza). Entre sus trabajos se encuentra su libro Bruma, una forma autorreflexiva e híbrida de autoficción donde la poesía se encuentra con la fantasía.',
      'También colaboró con Becoming Studio en prácticas de construcción poética de mundos, Control Wars Laboratorio, realizado en conjunto con Alter-Realities, Porto Design Biennale ’21.',
      'Actualmente colabora con The Poetry Project Berlin en talleres semanales de escritura creativa en español.',
    ],
  },
  contact: {
    title: 'Contacto',
    lead: 'Para talleres, colaboraciones y prensa.',
  },
} as const
