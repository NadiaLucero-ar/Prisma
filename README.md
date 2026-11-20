# Prisma • Abogacía Boutique (landing)

## Estructura del proyecto

```
prisma-landing/
├── index.html
├── globals.css          ← reset + reglas globales (sin Sass)
├── css/
│   └── style.css        ← generado por Sass, NO editar a mano
├── scss/
│   ├── _variables.scss  ← colores, tipografías, radios
│   ├── _mixins.scss     ← boton(), titulo-serif(), eyebrow()
│   ├── _base.scss
│   ├── _nav.scss
│   ├── _hero.scss
│   ├── _servicios.scss
│   ├── _estudio.scss
│   ├── _confianza.scss
│   ├── _contacto.scss
│   └── main.scss        ← punto de entrada, solo @use de partials
├── js/
│   └── main.js          ← validación del formulario y envío (mailto)
└── img/                 ← poné acá tus fotos y SVG del boceto
```

**Regla de oro**: nunca edites `css/style.css` a mano — se pisa cada vez que compilás. Todo cambio de estilo va en `scss/`.

## Cómo compilar en VS Code

**Opción A — extensión "Live Sass Compiler" (más simple, un clic):**
1. Instalá la extensión "Live Sass Compiler" de Glenn Marks en VS Code.
2. Abrí este proyecto en VS Code.
3. Click en "Watch Sass" abajo a la derecha en la barra de estado.
4. Cada vez que guardes un archivo en `scss/`, se regenera `css/style.css` solo.

Si la extensión pregunta dónde guardar el output, apuntala a `css/style.css` (podés configurarlo en `.vscode/settings.json` con la clave `liveSassCompile.settings.formats`).

**Opción B — línea de comandos:**
```bash
npm install -g sass
sass scss/main.scss css/style.css --watch
```

## Pendientes

- [ ] Reemplazar las imágenes de `img/` (retrato del hero, foto de equipo) por propias fotos o las exportadas de Figma.
- [ ] El email de contacto (`prisma.abogacia@gmail.com`) es un placeholder — cambiarlo por el real.
- [ ] Se sacó la tarjeta de "Derecho Privado" (civil/consumidor) de la grilla de 6 a 5 áreas, siguiendo la propuesta de "Prisma" que arme. 
- [ ] Media queries para mobile/tablet (el layout está pensado a 1440px fijo, como el boceto de Figma).

- [ ] **Formulario de consulta**: hoy arma un correo (mailto) a `EMAIL_DESTINO` en `js/main.js`. Cuando esté la API (`prisma-api`), reemplazar por un `fetch` POST.
- [x] Bootstrap 5.3 por CDN (navbar, carrusel, collapse, modal y formulario); layout responsive.
