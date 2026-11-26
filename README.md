# yaknel.github.io
Personal Website · yaknel.com

React 19 · TypeScript (strict) · Mantine 9 · React Router 8 · Vite · Vitest. Se despliega en GitHub Pages con GitHub Actions.

## Editar contenido (sin tocar código)

| Qué | Dónde |
| --- | --- |
| Textos generales, bio, redes, menú | `src/content/site.ts` |
| Talleres y servicios (con fechas) | `src/content/workshops.ts` |
| Productos de la tienda | `src/content/products.ts` |
| Colores (paleta Hilma af Klint) | `palette` en `src/app/theme.ts` |
| Color de cada franja | `tone="..."` en `src/features/sections.tsx` |
| Imágenes | `public/images/` |
| Fuentes (Micky, Square Sans) | `public/fonts/` |

Las fechas de taller pasadas se ocultan solas.

## Puesta en marcha, paso a paso

1. **Formulario de contacto:** crea una cuenta gratis en [formspree.io](https://formspree.io), haz un formulario nuevo y copia su ID (las letras tras `/f/`).
2. En GitHub, ve a **Settings → Secrets and variables → Actions → Variables** y añade:
   - `VITE_FORMSPREE_ID` = tu ID de Formspree
   - `VITE_SUBSTACK_URL` = `https://yaknel.substack.com`
3. **Settings → Pages → Source: GitHub Actions.**
4. Haz un push a `main`: la web se publica sola (pestaña **Actions** para ver el progreso).
5. **Tienda:** en Stripe crea un *Payment Link* por producto y pega la URL en `checkoutUrl` de `products.ts`.
6. **Dominio (último paso):** Settings → Pages → Custom domain → `yaknel.com`, y en tu proveedor de dominio apunta los registros DNS que indica GitHub. Marca *Enforce HTTPS*.

## Desarrollo local

```bash
npm install
cp .env.example .env.local   # rellena los valores
npm run dev                  # http://localhost:5173
npm test                     # tests
npm run lint && npm run typecheck
npm run build                # genera dist/
```

## Arquitectura

```
src/
  app/          providers, tema, router (rutas cargadas bajo demanda)
  components/   layout (header, menú móvil, footer) y UI compartida
  content/      datos tipados: lo único que hace falta editar para cambiar textos
  features/     newsletter, contact, workshops, shop (cada una con su lógica y estilos)
  lib/          utilidades puras y testeadas (fechas, urls, config)
  pages/        una página por ruta
```

- Contenido separado de la presentación, con tipos que avisan si falta un campo.
- Code splitting por ruta, CSS Modules y la API de estilos de Mantine.
- Accesibilidad: enlace "saltar al contenido", foco visible, `prefers-reduced-motion`, landmarks y labels.
- SEO: `<title>` y `<meta>` por página (React 19).
- Formulario de contacto con validación, honeypot anti-spam y sin mostrar tu correo.
- `404.html` = `index.html`, así las rutas funcionan en GitHub Pages.

## Otros materiales del repo
- `content/paginas/` textos de la web antigua (Somatics, Portfolio, Talleres, políticas…)
- `content/blog/` artículos largos
- `assets/imagenes-urls.txt` lista de imágenes de la web antigua; `./descargar-imagenes.sh` las descarga en `assets/img/`
