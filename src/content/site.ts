/**
 * Textos generales de la web. Edita aquí; los componentes solo leen estos datos.
 * Son borradores: cámbialos con tus palabras.
 */
export interface NavItem {
  label: string
  to: string
}

export interface SocialLink {
  label: 'Instagram' | 'YouTube' | 'LinkedIn' | 'Substack' | 'Spotify' | 'Medium'
  href: string
}

export interface ExternalItem {
  title: string
  kind: string
  description: string
  href: string
  cta: string
}

export const site = {
  name: 'Yaknel Elorza',
  fullName: 'Yaknel Elorza',
  tagline: 'Escritora · Poeta · Facilitadora',
  motto: 'In the middle of the cosmic crossing of our Universe',
  location: 'Berlín | Mundo',
  nav: [
    { label: 'Inicio', to: '/' },
    { label: 'Escritura', to: '/escritura' },
    { label: 'Taller', to: '/taller' },
    { label: 'Trabaja conmigo', to: '/trabaja-conmigo' },
    { label: 'Sobre mí', to: '/sobre-mi' },
    { label: 'Contacto', to: '/contacto' },
  ] satisfies NavItem[],
  // Las que estén vacías no se muestran.
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/yaknelelorza/' },
    { label: 'YouTube', href: 'https://www.youtube.com/@yaknelelorza' },
    { label: 'Spotify', href: 'https://open.spotify.com/show/0BgeT8nbdUjsGFS1gxg6Xq' },
    { label: 'Instagram', href: 'https://www.instagram.com/yaknelelorza' },
    { label: 'Substack', href: 'https://yaknel.substack.com' },
  ] satisfies SocialLink[],
  // Enlaces legales del pie. Sin href, se muestra solo el texto.
  legal: [
    { label: 'Privacy Policy', href: 'https://yaknel.com/privacy-policy/' },
    { label: 'Cookie Policy', href: 'https://yaknel.com/cookie-policy/' },
    { label: 'Terms and Conditions', href: '' },
  ],

  /* ---------- Inicio ---------- */
  hero: {
    eyebrow: 'Autora, poeta y facilitadora',
    title: 'Palabras que habitan la cuerpa',
    lead: 'Escritora y poeta venezolana caribeña en Berlín. Escribo, doy talleres de escritura creativa y somática, y acompaño a otras escritoras y proyectos desde la primera idea hasta la página terminada.',
  },

  /* ---------- Escritura ---------- */
  writing: {
    title: 'Escritura',
    lead: 'Libros, poesía, publicaciones y conversaciones.',
    cta: 'Explora mi escritura',
    book: {
      kind: 'Libro',
      title: 'Bruma',
      description:
        'Mujeres que aman a mujeres, la posibilidad de la otra, la belleza, lo abrupto. Mi primer libro publicado: una autoficción híbrida y autorreflexiva donde la poesía se encuentra con la fantasía.',
      href: 'https://laninaazul.es/tienda/bruma/',
      cta: 'Consigue el libro',
    },
    poetry: {
      kind: 'Poesía',
      title: 'Sigo Aquí',
      description:
        'Esfumarme en el tiempo a través de la palabra habitando la cuerpa. Mi poesía, en tu correo, a través de Substack.',
      href: 'https://yaknel.substack.com',
      cta: 'Leer en Substack',
    },
    publication: {
      kind: 'Publicación',
      title: 'I don’t want to quote anyone but myself',
      description:
        'Un ensayo sobre el exilio, la memoria y la recuperación de una misma, publicado en la revista Futuress (Basilea, Suiza).',
      href: 'https://futuress.org/stories/anyone-but-myself/',
      cta: 'Leer el ensayo',
    },
    media: [
      {
        title: 'Meditation, tattoos and the inevitability of pain',
        kind: 'Entrevista',
        description:
          'Una conversación con Michael Stone —maestro budista, yogui y psicoterapeuta— sobre la meditación y el dolor en relación con los tatuajes.',
        href: 'https://yaknel.com/michael-stone-meditation-tattoos-and-the-inevitability-of-pain/',
        cta: 'Leer',
      },
      {
        title: 'Intersectional Island',
        kind: 'Entrevista en podcast',
        description: 'Con Rodrigo Zorzanelli, sobre la poesía como supervivencia.',
        href: 'https://open.spotify.com/episode/5iNFVrwlUDhtvpCJTMU8Ga',
        cta: 'Escuchar',
      },
      {
        title: 'Da Yaknel Podcast',
        kind: 'Podcast',
        description: 'Procesos creativos a través de la autenticidad.',
        href: 'https://www.youtube.com/@yaknelelorza',
        cta: 'Ver',
      },
    ] satisfies ExternalItem[],
  },

  /* ---------- Taller ---------- */
  workshop: {
    title: 'Talleres de escritura creativa y somática',
    lead: 'Escribir desde la cuerpa: atención, respiración, memoria y palabra. Grupos pequeños, en español, online y en Berlín.',
    cta: 'Únete al taller',
    faqTitle: 'Preguntas frecuentes',
    faq: [
      {
        q: '¿Cuánto cuesta el taller mensual?',
        a: '65 € por taller. Cada mes hay un tema diferente y pagas solo los meses a los que vienes.',
      },
      {
        q: '¿Cuándo empieza?',
        a: 'El primero es el domingo 31 de enero de 2027, a las 10:00 hora de Berlín. Después, el último domingo de cada mes.',
      },
      {
        q: '¿Cómo accedo a las clases?',
        a: 'A través de un enlace de Zoom que recibirás por correo una vez completada tu inscripción.',
      },
      {
        q: '¿Y si no puedo conectarme en vivo?',
        a: 'Recibes la grabación, disponible durante un mes.',
      },
      {
        q: 'Me registré pero no he recibido la confirmación',
        a: 'Revisa tu carpeta de spam o escríbeme desde el formulario de contacto.',
      },
      { q: 'Políticas de cancelación', a: 'No hay reembolsos ni cancelaciones.' },
    ],
  },

  /* ---------- Trabaja conmigo ---------- */
  workWithMe: {
    title: 'Trabaja conmigo',
    lead: 'Acompañamiento editorial uno a uno y colaboraciones creativas.',
    cta: 'Contáctame / reserva',
    editorial: {
      kind: '1:1',
      title: 'Acompañamiento editorial',
      description:
        'Acompañamiento personal para tu libro, poemario o proyecto híbrido: estructura, voz y edición, en sesiones que se adaptan a tu proceso.',
    },
    collaboration: {
      kind: 'Colaboración',
      title: 'Colaboración creativa',
      description:
        'Textos y construcción poética de mundos para proyectos artísticos, culturales y editoriales, como mi trabajo con Becoming Studio y Control Wars Laboratorio (Porto Design Biennale ’21).',
    },
  },

  /* ---------- Charlas y presentaciones (oculto por ahora: sin ruta ni menú) ---------- */
  speaking: {
    title: 'Charlas y presentaciones',
    lead: 'Presentadora, moderadora y ponente en lecturas literarias, festivales y encuentros comunitarios, en español, inglés y alemán.',
    cta: 'Contáctame / reserva',
    topicsTitle: 'Temas',
    // Borrador a partir de tu obra: cámbialos por los tuyos.
    topics: [
      'Escribir desde la cuerpa: escritura somática',
      'Exilio, memoria y diáspora caribeña',
      'La creatividad como activismo cotidiano',
      'Autoficción y formas híbridas',
    ],
    eventsTitle: 'Eventos y empresas',
    // Añade aquí los eventos que has presentado, p. ej. 'Nombre del evento · Ciudad, año'.
    // Mientras la lista esté vacía, este apartado no se muestra.
    events: [] as string[],
  },

  /* ---------- Sobre mí ---------- */
  about: {
    title: 'Sobre mí',
    heading: 'Donde se vive para dejar de existir',
    roles: [
      'Escritora',
      'Autora',
      'Acompañante editorial',
      'Colaboradora',
      'Facilitadora',
      'Referente de pensamiento',
    ],
    story:
      'Soy escritora y poeta queer venezolana caribeña y vivo en Berlín. Escribo entre el español y el inglés, entre el exilio, la memoria y la cuerpa.',
    philosophy:
      'Mi práctica artística se relaciona con el activismo de la vida cotidiana, buscando fomentar la creatividad y la autenticidad a través de experiencias tanto individuales como colectivas.',
    experience: [
      'Mi libro Bruma es una forma autorreflexiva e híbrida de autoficción donde la poesía se encuentra con la fantasía. Mi publicación más reciente, I don’t want to quote anyone but myself, apareció en la revista Futuress (Basilea, Suiza).',
      'Colaboré con Becoming Studio en prácticas de construcción poética de mundos, y en Control Wars Laboratorio, junto con Alter-Realities, en la Porto Design Biennale ’21.',
      'Dirijo talleres semanales de escritura creativa en español en colaboración con The Poetry Project Berlin.',
    ],
    credentialsTitle: 'Formación',
    credentials: [
      'Diplomado en Escritura Creativa — FLACSO, República Dominicana (2022)',
      'Fellowship Coding Resistance — The Futuress (2021)',
      'The Way of Writing — Natalie Goldberg (2019–20)',
      'Grado en Arte y Fotografía — Universitat Abat Oliba, Barcelona (2010)',
    ],
    cta: 'Más sobre mí',
  },

  /* ---------- Newsletter y contacto ---------- */
  newsletter: {
    title: 'Sigo Aquí',
    lead: 'Esfumarme en el tiempo a través de la palabra habitando la cuerpa. Mi poesía, talleres y novedades, directo en tu correo.',
    cta: 'Suscríbete <3',
  },
  contact: {
    title: 'Contacto',
    lead: 'Para talleres, acompañamiento editorial, colaboraciones, eventos y prensa.',
  },
  shop: {
    title: 'Tienda',
    lead: 'Libros y materiales.',
  },
} as const
