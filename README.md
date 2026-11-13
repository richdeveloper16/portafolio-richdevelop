# Developer Portfolio

Portafolio personal de desarrollo Full Stack, construido con Next.js, React y TypeScript. Incluye una presentación profesional y secciones de perfil, tecnologías, proyectos y contacto en desarrollo.

## Tecnologías

Las versiones indicadas corresponden a las dependencias declaradas en `package.json`.

| Tecnología | Versión | Uso |
| --- | --- | --- |
| Next.js | 16.4.6 | Framework web con App Router y componentes de servidor. |
| React y React DOM | 19.3.0 | Construcción y renderizado de la interfaz. |
| TypeScript | 5.x | Tipado estático del código. |
| Tailwind CSS | 4.3.3 | Estilos y diseño adaptable. |
| Turbopack | Integrado en Next.js | Compilación y procesamiento de CSS con `@tailwindcss/turbopack` 4.3.3. |
| Lucide React | ^1.72.0 | Iconos de la interfaz. |
| ESLint | 9.x | Análisis estático con `eslint-config-next` 16.4.6. |

El proyecto utiliza Cache Components y Partial Prefetching de Next.js. El footer se prerenderiza con caché y revalidación diaria para mostrar el año.

## Desarrollo local

Necesitas Node.js y npm compatibles con las dependencias del proyecto.

```bash
npm install
npm run dev
```

Abre [localhost:3000](http://localhost:3000) para ver el portafolio.

## Comandos

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo. |
| `npm run build` | Genera la compilación de producción. |
| `npm start` | Sirve la compilación de producción; requiere ejecutar el build antes. |
| `npm run lint` | Ejecuta ESLint. |
| `npx tsc --noEmit` | Comprueba los tipos sin generar archivos JavaScript. |

## Estructura

```text
src/
├── app/                  # Páginas, layout y estilos globales
│   └── projects/[slug]/   # Ruta de detalle de proyecto pendiente de contenido
├── components/
│   ├── layout/           # Header y footer
│   └── ui/               # Componentes de interfaz
└── features/
    ├── data/             # Archivos destinados a datos y navegación
    ├── hero/             # Presentación principal
    ├── lib/              # Utilidades
    └── types/            # Definiciones de tipos
```

La ruta `/projects/[slug]` devuelve actualmente una respuesta 404 mientras se implementa su contenido.

## Editar información e imágenes

El contenido se importa desde archivos JSON durante la compilación:

| Archivo | Contenido |
| --- | --- |
| `src/features/data/profile.json` | Nombre, presentación, perfil, contacto, redes y foto. |
| `src/features/data/skills.json` | Categorías de tecnologías y sus imágenes opcionales. |
| `src/features/data/experience.json` | Empresas, cargos, fechas, actividades y logos opcionales. |
| `src/features/data/education.json` | Estudios, instituciones y fechas de educación. |
| `src/features/data/projects.json` | Títulos, enlaces e imágenes de las tarjetas de proyectos. |

Para agregar una foto, guarda el archivo en `public/images/profile/ricardo.webp` y modifica el campo `image` de `profile.json`:

```json
{
  "src": "/images/profile/ricardo.webp",
  "alt": "Retrato de Ricardo Martínez Hernández"
}
```

Cada categoría de tecnologías y cada experiencia laboral admite el mismo objeto `image`. Usa rutas locales que empiecen con `/images/`; no incluyas `public` en la ruta. El texto `alt` debe describir la imagen; para logos decorativos puede quedar vacío. Si `src` está vacío, no se muestra una imagen ni se reserva espacio.

Los archivos de imagen se guardan en `public/images/`; el JSON contiene su ruta, no el archivo binario. No hay un formulario de subida de imágenes.

En desarrollo los cambios se recargan automáticamente. Para actualizar producción, ejecuta `npm run build` y vuelve a desplegar. Conserva la estructura del JSON y usa comillas dobles, sin comentarios ni comas al final.

## Estadísticas privadas de visitas

La integración opcional con Umami permite consultar las visitas desde su panel de administración. No muestra un contador público ni expone un endpoint para leer estadísticas en el portafolio.

1. Crea tu cuenta de Umami (o utiliza una instancia propia) y registra el dominio del portafolio.
2. En la configuración del sitio, abre **Tracking code**. Copia el valor `src` del script y el valor `data-website-id`.
3. Copia `.env.example` a `.env.local` y completa `UMAMI_SCRIPT_URL` y `UMAMI_WEBSITE_ID`. Configura esas mismas variables en tu servicio de hosting antes del build.
4. Ejecuta `npm run build` y despliega. Para verificar localmente el comportamiento de producción, ejecuta `npm start` después del build.
5. Visita el portafolio y consulta los datos iniciando sesión en Umami. Mantén desactivada la opción **Enable Share URL** para conservar el panel privado.

El seguimiento se omite en desarrollo y cuando falta cualquiera de las variables. El ID de seguimiento y la URL del script son públicos por diseño; no introduzcas contraseñas ni claves API en estas variables. Los bloqueadores de anuncios pueden impedir que se registren algunas visitas.

La integración queda preparada en código; la recopilación empieza después de configurar Umami y desplegar. Los cambios en las variables requieren un nuevo build.
