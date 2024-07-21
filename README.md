![tailwind-nextjs-banner](/public/static/images/social-banner.png)

# Blog DC

Este es un fork del repositorio [tailwind-nextjs-starter-blog](https://github.com/timlrx/tailwind-nextjs-starter-blog).

## Guía rápida

1. Clonar el repositorio

```bash
git clone https://github.com/agustinmejia/blog-dc
```

2. Personalizar `siteMetadata.js` (Datos del sitio).
3. Personalizar `authors/default.md` (autor por defecto).
4. Modificar `projectsData.ts`.
5. Modificar `headerNavLinks.ts` para personalizar los links de navegación.

## Instalación

```bash
npm i
```

## Desarrollo

```bash
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000)

Editar la plantilla en el directorio `app` o le contenido en el directorio `data`.

## Configuración avanzada

`data/siteMetadata.js` - contiene la mayor parte de la información relacionada con el sitio que debe modificarse según las necesidades del usuario.

`data/authors/default.md` - información de autor predeterminada (obligatoria). Se pueden agregar autores adicionales como archivos en `data/authors`.

`data/projectsData.js` - datos utilizados para generar una tarjeta con estilo en la página de proyectos.

`data/headerNavLinks.js` - links de navegación.

`data/logo.svg` - reemplácelo con su propio logotipo.

`data/blog` - directorio donde se almacenan las entradas del blog.

`public/static` - archivos estáticos.

`tailwind.config.js` y `css/tailwind.css` - configuración de tailwind y de estilo que se puede modificar para cambiar la apariencia general del sitio.

`css/prism.css` - controla los estilos asociados con los bloques de código. Siéntete libre de personalizarlo y usar tu tema prismjs preferido ej. [tema prism](https://github.com/PrismJS/prism-themes).

`contentlayer.config.ts` - configuración para Contentlayer, incluida la definición de fuentes de contenido y complementos MDX utilizados. Ver [documentación Contentlayer](https://www.contentlayer.dev/docs/getting-started) para más información.

`layouts` - plantillas principales utilizadas en las páginas:

- Existen 3 plantillas de posts disponibles: `PostLayout`, `PostSimple` y `PostBanner`. `PostLayout` es el diseño predeterminado de 2 columnas con información meta y de autor. `PostSimple` es una versión simplificada de `PostLayout`, mientras `PostBanner` presenta una imagen de banner.
- Hay 2 diseños de listado de blogs: `ListLayout`, el diseño utilizado en la versión 1 de la plantilla con una barra de búsqueda y `ListLayoutWithTags`, utilizado actualmente en la versión 2, que omite la barra de búsqueda pero incluye una barra lateral con información sobre las etiquetas.

`app` - páginas a las que dirigirse. Lee la [dcumentación de Next.js](https://nextjs.org/docs/app) para más información.

`next.config.js` - configuración relacionada con Next.js. Debe adaptar la Política de seguridad de contenido si desea cargar scripts, imágenes, etc. desde otros dominios.

## Post

El contenido se modela usando [Contentlayer](https://www.contentlayer.dev/), que le permite definir su propio esquema de contenido y usarlo para generar objetos de contenido escritos. Ver [documentación de Contentlayer](https://www.contentlayer.dev/docs/getting-started) para más información.

### Frontmatter

Frontmatter follows [Hugo's standards](https://gohugo.io/content-management/front-matter/).

Please refer to `contentlayer.config.ts` for an up to date list of supported fields. The following fields are supported:

```
title (required)
date (required)
tags (optional)
lastmod (optional)
draft (optional)
summary (optional)
images (optional)
authors (optional list which should correspond to the file names in `data/authors`. Uses `default` if none is specified)
layout (optional list which should correspond to the file names in `data/layouts`)
canonicalUrl (optional, canonical url for the post for SEO)
```

Here's an example of a post's frontmatter:

```
---
title: 'Introducing Tailwind Nexjs Starter Blog'
date: '2021-01-12'
lastmod: '2021-01-18'
tags: ['next-js', 'tailwind', 'guide']
draft: false
summary: 'Looking for a performant, out of the box template, with all the best in web technology to support your blogging needs? Checkout the Tailwind Nextjs Starter Blog template.'
images: ['/static/images/canada/mountains.jpg', '/static/images/canada/toronto.jpg']
authors: ['default', 'sparrowhawk']
layout: PostLayout
canonicalUrl: https://tailwind-nextjs-starter-blog.vercel.app/blog/introducing-tailwind-nextjs-starter-blog
---
```

## Despliegue

### Desarrollo

```bash
npm run build
```

### Producción

```bash
# Usando pm2
pm2 start npm --name "blog-dc" -- start
```

NOTA: para lanzar en producción debe editar el puerto en el archivo `package.json` en la `línea 6`.

## Licence

[MIT](https://github.com/timlrx/tailwind-nextjs-starter-blog/blob/main/LICENSE) © [Timothy Lin](https://www.timlrx.com)
