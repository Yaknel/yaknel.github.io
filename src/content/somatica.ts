/**
 * Página del taller mensual de escritura somática (/taller/escritura-somatica).
 * Textos de tu landing "Escritura Somática · Landing del taller mensual".
 */
export const somatica = {
  eyebrow: 'Taller mensual online · desde enero 2027',
  title: 'Escribir desde la cuerpa.',
  lead: 'Darle voz a las historias que aún no sabemos que llevamos dentro.',
  facts: [
    'Primer taller: domingo 31 de enero',
    'Último domingo del mes',
    'Un tema diferente cada mes',
    '10:00 hora de Berlín',
    '2 horas en vivo',
    'Grabación disponible un mes',
  ],
  price: '65 € al mes',
  cta: 'Quiero reservar mi lugar',
  // Reserva: de momento lleva al formulario de contacto. Pega aquí tu enlace de pago cuando lo tengas.
  bookingHref: '/contacto?asunto=taller-mensual',

  invitation: {
    title: 'La cuerpa guarda lo que la mente todavía no ha nombrado.',
    paragraphs: [
      'Cada mes nos reunimos para escucharla. Respiramos, nos enraizamos, meditamos y dejamos que la escritura aparezca como su eco. Con herramientas de grounding, meditación y respiración construimos la cuerpa como un lugar seguro, y desde ahí escribimos.',
      'Es un espacio gentil para explorar. No necesitas experiencia previa ni tener nada claro. Solo llegar.',
      'Cada mes trabajamos un tema diferente, así que puedes entrar en cualquier momento.',
    ],
  },

  steps: [
    {
      title: 'Llegar a la cuerpa',
      text: 'Respiración, grounding y meditación para construir la cuerpa como lugar seguro.',
    },
    {
      title: 'Escribir desde adentro',
      text: 'Prompts guiados, escritura creativa y automática para dejar salir lo que pide voz.',
    },
    {
      title: 'Reflexionar y cerrar',
      text: 'Un momento para mirar lo escrito, compartir si quieres, y cerrar con suavidad.',
    },
  ],

  includes: [
    'Dos horas en vivo con ejercicios de respiración, meditación y grounding para la cuerpa',
    'Técnicas de escritura creativa y escritura automática',
    'Un espacio seguro e íntimo para explorar a tu ritmo',
    'La grabación de la sesión, disponible durante un mes',
    'Herramientas para expandir tu práctica de escritura y reflexiones para seguir escribiendo desde la cuerpa durante el mes',
  ],
  disclaimer:
    'Este taller no es terapia ni la sustituye. Puedes pausar o saltarte cualquier ejercicio cuando lo necesites.',

  guide: {
    title: 'Yaknel Elorza',
    paragraphs: [
      'Soy escritora y poeta queer venezolana, con base en Berlín. Mi práctica artística se relaciona con el activismo de la vida cotidiana: creo en la escritura como un lugar para cultivar la creatividad y la autenticidad, en lo individual y en lo colectivo.',
      'Llevo más de quince años practicando y enseñando Ashtanga yoga, meditación y movimiento somático, con la respiración y la propia experiencia como maestras. En este taller uno esos dos caminos: la cuerpa como instrumento y la escritura como su eco.',
      'Soy autora de Bruma, una autoficción híbrida donde la poesía se encuentra con la fantasía. Mi texto más reciente, I don’t want to quote anyone but myself, apareció en Futuress (Basilea). He colaborado con Becoming Studio en prácticas de construcción poética de mundos (Porto Design Biennale ’21) y guío el taller semanal de escritura creativa en español en The Poetry Project Berlin.',
    ],
  },

  faq: [
    {
      q: '¿Qué es la escritura somática?',
      a: 'Es una práctica que escribe desde las sensaciones de la cuerpa y no solo desde la cabeza. A través de la respiración, el movimiento y la atención, la cuerpa se vuelve el instrumento y las palabras aparecen como su reflejo. A veces traen historias que no sabíamos que estaban ahí.',
    },
    {
      q: '¿Para quién es el taller?',
      a: 'Para escritoras, buscadoras y personas creativas. También para quien nunca ha escrito pero siente que tiene algo dentro esperando voz. Si quieres una relación más amable con tu escritura y con tu cuerpa, es para ti.',
    },
    {
      q: '¿Necesito experiencia previa?',
      a: 'No. No hace falta experiencia en escritura, meditación ni movimiento. Todo se guía paso a paso y cada quien va a su propio ritmo.',
    },
    {
      q: '¿Qué necesito para asistir?',
      a: 'Conexión a internet, un dispositivo con Zoom, cuaderno y bolígrafo (mejor a mano que en el teclado) y un rincón tranquilo donde puedas moverte un poco. Si quieres, ten cerca una manta, un cojín o algo caliente para tomar.',
    },
    {
      q: '¿Cuándo es y a qué hora?',
      a: 'El último domingo de cada mes a las 10:00, hora de Berlín. El primero es el domingo 31 de enero de 2027. En invierno equivale a las 10:00 en Madrid, 9:00 en Canarias, 6:00 en Buenos Aires, 5:00 en Caracas y Santo Domingo, 4:00 en Bogotá y 3:00 en Ciudad de México. Si te queda muy temprano, tienes la grabación.',
    },
    {
      q: '¿Qué pasa si no puedo conectarme en vivo?',
      a: 'Todas las personas inscritas reciben la grabación, así que puedes hacer el taller en diferido cuando te venga bien. Estará disponible durante un mes.',
    },
    {
      q: '¿Tengo que leer lo que escribo?',
      a: 'Nunca. Compartir es siempre opcional. Lo que escribes es tuyo: puedes escuchar, escribir en silencio y quedarte con todo para ti.',
    },
    {
      q: '¿Es terapia?',
      a: 'No. Es un espacio creativo y de autoexploración. Puede mover cosas, por eso cuidamos el ritmo y siempre puedes pausar.',
    },
    {
      q: '¿Cuánto cuesta?',
      a: '65 € por taller. Cada mes hay un tema diferente y pagas solo los meses a los que vienes.',
    },
    {
      q: '¿Puedo venir a un solo taller?',
      a: 'Sí. Cada mes es independiente y tiene su propio tema. Puedes venir una vez o acompañarnos de forma continua.',
    },
  ],

  closing: {
    eyebrow: 'Un taller íntimo de escritura somática',
    title: 'Enero · Domingo 31 · 65 €',
    text: 'Dos horas en vivo, grabación durante un mes y un espacio seguro para escribir desde la cuerpa.',
    cta: 'Quiero entrar',
  },
} as const
