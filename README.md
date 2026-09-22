# Prisma • Abogacía Boutique (landing)

## Estructura del proyecto

```
nova-landing/
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

## Pendiente para vos

- [ ] **Logo real**: el isotipo de la estrella helicoidal en `index.html` (dentro de `.logo-prisma` y `.logo-prisma-footer`) es un SVG placeholder mío, no el diseño final. Reemplazalo por el que exportes de Figma — es un `<svg>` inline, así que podés pegar el path/código de Figma directo ahí.
- [ ] Reemplazar las imágenes de `img/` (retrato del hero, foto de equipo) por tus propias fotos o las exportadas de Figma.
- [ ] El hero (`_hero.scss`, clase `.retrato`) tiene el degradé azul/bronce tipo Uría Menéndez aplicado — falta que `retrato-institucional.png` sea una foto real (biblioteca jurídica o mapamundi) para ver el efecto completo.
- [ ] El email de contacto (`prisma.abogacia@gmail.com`) es un placeholder — cambialo por el real cuando lo tengas.
- [ ] Se sacó la tarjeta de "Derecho Privado" (civil/consumidor) de la grilla de 6 a 5 áreas, siguiendo la propuesta de "Prisma" que armaste. Si en realidad seguís atendiendo esos casos, avisame y la sumamos de vuelta como sexta tarjeta.
- [ ] Media queries para mobile/tablet (el layout está pensado a 1440px fijo, como el boceto de Figma).
