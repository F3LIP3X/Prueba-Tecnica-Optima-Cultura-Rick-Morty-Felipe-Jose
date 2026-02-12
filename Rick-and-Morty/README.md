# Prueba Técnica: Frontend Developer (Vue.js + Nuxt + Pinia) Felipe Jose Toledano Escudero

## Setup

Requisitos:

- Node 18 o superior.

Instalar dependencias:

```bash
# npm

npm install

npm i

```

## Development Server

Cuando se instalen las dependecias el servidor se abrira en el puerto `http://localhost:3000` "Cuidado por que si hay otra instancia ya en el 3000 puede ser 3001":

```bash
# npm
npm run dev

```

El proyecto se encuentrá organizado de la siguente manera:

## Estructura del Proyecto

```
* Rick-and-Morty/

>app>assets          # Recursos estáticos (imágenes, estilos)

>app>components      # Componentes Vue reutilizables

>app>composables     # Funciones reutilizables (composables)

>app>middleware      # Middleware para lógica de autenticación y validación

>app>pages           # Páginas de la aplicación (enrutamiento automático)

>app>stores          # Lógica de almacenamiento global con Pinia

>public              # Archivos públicos estáticos

>nuxt.config.ts      # Configuración de Nuxt

>tailwind.config.ts  # Configuración de Tailwind

```

## Variables de Entorno

No se requieren variables de entorno para ejecutar el proyecto en local.

## Arquitectura y Decisiones Relevantes

- Sobre la arquitectura no quise usar algo más específico como una arquitectura hexagonal, porque para un proyecto tan pequeño y donde no se especifica decidí usar lo más básico y funcional que es Nuxt 3 para un enrutamiento rápido y separar ficheros acorde a sus usos.

- Pinia como store global para auth y favoritos hechos en TypeScript.

- Creación de componentes reutilizables mediante templates.

- Composables para encapsular la lógica de funcional (fetch de personajes, validaciones) y reutilizarla en componentes.

- Middleware de autenticación para proteger rutas privadas y proteger las rutas, si no hay token en las cookies cualquiera de las interfaces sin ella volverá al login.

- Tailwind + SCSS, use esta combinación para agilizar el proyecto y usar componentes de páginas como UI Verse y desempeñar mayor tiempo en la lógica funcional.
