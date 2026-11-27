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
  tagline: 'Writer · Poet · Facilitator',
  motto: 'In the middle of the cosmic crossing of our Universe',
  location: 'Berlin | Worldwide',
  nav: [
    { label: 'Home', to: '/' },
    { label: 'Writing', to: '/writing' },
    { label: 'Workshop', to: '/workshop' },
    { label: 'Work with me', to: '/work-with-me' },
    { label: 'Speaking', to: '/speaking' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
  ] satisfies NavItem[],
  // Las que estén vacías no se muestran.
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/yaknelelorza/' },
    { label: 'YouTube', href: 'https://www.youtube.com/@yaknelelorza' },
    { label: 'Instagram', href: 'https://www.instagram.com/yaknelelorza' },
    { label: 'Substack', href: 'https://yaknel.substack.com' },
  ] satisfies SocialLink[],

  /* ---------- Home ---------- */
  hero: {
    eyebrow: 'Yaknel Elorza · Writer, poet & facilitator',
    title: 'Words that inhabit the body',
    lead: 'Caribbean-Venezuelan writer and poet based in Berlin. I write, I teach creative and somatic writing, and I accompany other writers and projects from the first idea to the finished page.',
  },

  /* ---------- Writing ---------- */
  writing: {
    title: 'Writing',
    lead: 'Books, poetry, publications and conversations.',
    cta: 'Explore my writing',
    book: {
      kind: 'Book',
      title: 'Bruma',
      description:
        'Mujeres que aman a mujeres, la posibilidad de la otra, la belleza, lo abrupto. My first published book: a self-reflective, hybrid autofiction where poetry meets fantasy.',
      href: 'https://laninaazul.es/tienda/bruma/',
      cta: 'Get the book',
    },
    poetry: {
      kind: 'Poetry',
      title: 'Sigo Aquí',
      description:
        'Esfumarme en el tiempo a través de la palabra habitando la cuerpa. My poetry, in your inbox, on Substack.',
      href: 'https://yaknel.substack.com',
      cta: 'Read on Substack',
    },
    publication: {
      kind: 'Publication',
      title: 'I don’t want to quote anyone but myself',
      description:
        'An essay on exile, memory and reclaiming the self, published by Futuress (Basel, Switzerland).',
      href: 'https://futuress.org/stories/anyone-but-myself/',
      cta: 'Read the essay',
    },
    media: [
      {
        title: 'Meditation, tattoos and the inevitability of pain',
        kind: 'Interview',
        description:
          'A conversation with Michael Stone — Buddhist teacher, yogi and psychotherapist — on meditation and pain in relation to tattoos.',
        href: 'https://yaknel.com/michael-stone-meditation-tattoos-and-the-inevitability-of-pain/',
        cta: 'Read',
      },
      {
        title: 'Intersectional Island',
        kind: 'Podcast interview',
        description: 'With Rodrigo Zorzanelli, on poetry as survival.',
        href: 'https://open.spotify.com/episode/5iNFVrwlUDhtvpCJTMU8Ga',
        cta: 'Listen',
      },
      {
        title: 'Da Yaknel Podcast',
        kind: 'Podcast',
        description: 'Creative processes through authenticity.',
        href: 'https://www.youtube.com/@yaknelelorza',
        cta: 'Watch',
      },
    ] satisfies ExternalItem[],
  },

  /* ---------- Workshop ---------- */
  workshop: {
    title: 'Creative & somatic writing workshops',
    lead: 'Writing from the body: attention, breath, memory and word. Small groups, in Spanish, online and in Berlin.',
    cta: 'Join workshop',
    faqTitle: 'Preguntas frecuentes',
    // De tu página de talleres anterior. Completa o cambia lo que haga falta.
    faq: [
      {
        q: '¿Cuánto es la inversión?',
        a: 'El valor total del curso es de 150 €, en un pago único.',
      },
      {
        q: '¿Cómo accedo a las clases?',
        a: 'A través de un enlace de Zoom que recibirás por correo una vez completada tu inscripción.',
      },
      {
        q: '¿Por cuánto tiempo estará disponible el material?',
        a: 'Durante 3 meses después de finalizado el taller.',
      },
      {
        q: 'Me registré pero no he recibido la confirmación',
        a: 'Revisa tu carpeta de spam o escríbeme desde el formulario de contacto.',
      },
      { q: 'Políticas de cancelación', a: 'No hay reembolsos ni cancelaciones.' },
    ],
  },

  /* ---------- Work with me ---------- */
  workWithMe: {
    title: 'Work with me',
    lead: 'One-to-one editorial accompaniment and creative collaborations.',
    cta: 'Contact / book me',
    editorial: {
      kind: '1:1',
      title: 'Editorial service',
      description:
        'Personal accompaniment for your book, poetry collection or hybrid project: structure, voice and editing, in sessions shaped around your process.',
    },
    collaboration: {
      kind: 'Collaboration',
      title: 'Creative collaboration',
      description:
        'Texts and poetic world-building for artistic, cultural and editorial projects — like my work with Becoming Studio and Control Wars Laboratorio (Porto Design Biennale ’21).',
    },
  },

  /* ---------- Public speaking ---------- */
  speaking: {
    title: 'Public speaking & MC',
    lead: 'Host, moderator and speaker for literary evenings, festivals and community gatherings — in Spanish, English and German.',
    cta: 'Contact / book me',
    topicsTitle: 'Topics',
    // Borrador a partir de tu obra: cámbialos por los tuyos.
    topics: [
      'Writing from the body: somatic writing',
      'Exile, memory and the Caribbean diaspora',
      'Creativity as everyday activism',
      'Autofiction and hybrid forms',
    ],
    eventsTitle: 'Events & companies',
    // Añade aquí los eventos que has presentado, p. ej. 'Nombre del evento · Ciudad, año'.
    // Mientras la lista esté vacía, este apartado no se muestra.
    events: [] as string[],
  },

  /* ---------- About ---------- */
  about: {
    title: 'About me',
    heading: 'Donde se vive para dejar de existir',
    roles: [
      'Writer',
      'Author',
      'Editorial partner',
      'Collaborator',
      'Facilitator',
      'Thought leader',
    ],
    story:
      'I am a queer Caribbean-Venezuelan writer and poet living in Berlin. I write across Spanish, English and German, between exile, memory and the body.',
    philosophy:
      'My artistic practice is linked to the activism of everyday life: I want to foster creativity and authenticity through both individual and collective experiences.',
    experience: [
      'My book Bruma is a self-reflective, hybrid autofiction where poetry meets fantasy. My most recent publication, I don’t want to quote anyone but myself, appeared in Futuress (Basel, Switzerland).',
      'I collaborated with Becoming Studio on poetic world-building practices, and on Control Wars Laboratorio with Alter-Realities at Porto Design Biennale ’21.',
      'I lead weekly creative writing workshops in Spanish in collaboration with The Poetry Project Berlin.',
    ],
    credentialsTitle: 'Training',
    credentials: [
      'Diploma in Creative Writing — FLACSO, Dominican Republic (2022)',
      'Coding Resistance fellowship — The Futuress (2021)',
      'The Way of Writing — Natalie Goldberg (2019–20)',
      'BA in Art & Photography — Universitat Abat Oliba, Barcelona (2010)',
    ],
    cta: 'More about me',
  },

  /* ---------- Newsletter & contact ---------- */
  newsletter: {
    title: 'Sigo Aquí',
    lead: 'Sign up for my newsletter: poetry, workshops and news, straight to your inbox.',
    cta: 'Sign up',
  },
  contact: {
    title: 'Contact',
    lead: 'For workshops, editorial work, collaborations, events and press.',
  },
  shop: {
    title: 'Shop',
    lead: 'Books and materials.',
  },
} as const
