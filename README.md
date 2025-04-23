# API Dragon Ball

Una aplicación web desarrollada con React y Vite que consume una API relacionada con Dragon Ball. Permite explorar personajes organizados por género, así como acceder a detalles individuales y una sección informativa.

## Descripción

Este proyecto ofrece una experiencia interactiva basada en el universo de Dragon Ball. Cuenta con navegación dinámica entre páginas dedicadas a personajes masculinos, femeninos, vista general, detalle por personaje y una página "Acerca de".

## Tecnologías utilizadas

- React
- Vite
- JavaScript
- CSS

## Estructura del proyecto

```
src/
├── assets/                      # Recursos estáticos
├── Components/                 # Componentes reutilizables
│   ├── Card/
│   │   ├── card.css
│   │   └── card.jsx
│   ├── Footer/
│   │   ├── Footer.css
│   │   └── Footer.jsx
│   ├── Header/
│   │   ├── header.css
│   │   └── header.jsx
│   └── NavBar/
│       ├── NavBar.css
│       └── NavBar.jsx
├── Pages/                      # Páginas principales
│   ├── AcercaDePage/
│   │   ├── AcercaDePage.css
│   │   └── AcercaDePage.jsx
│   ├── FemeninoPage/
│   │   ├── FemeninoPage.css
│   │   └── FemeninoPage.jsx
│   ├── HomePage/
│   │   ├── HomePage.css
│   │   └── HomePage.jsx
│   ├── MasculinoPage/
│   │   ├── MasculinoPage.css
│   │   └── MasculinoPage.jsx
│   │── NotFoundPage/
│   │   ├── NotFoundPage.css
│   │   └── NotFoundPage.jsx
│   │
│   └── PersonajePage/
│       ├── PersonajePage.css
│       └── PersonajePage.jsx
├── App.css                      # Estilos globales
├── App.jsx                      # Componente principal
└── main.jsx                     # Punto de entrada

Imagenes en la carpeta Public
```

## Instalación y uso

1. Clona el repositorio:
   ```bash
   git clone https://github.com/Alexupp/DragonBall.git
   cd Api_dragonball
   ```

2. Instala las dependencias:
   ```bash
   npm install
   npm i react-router-dom
   npm install @mui/material @emotion/react @emotion/styled
   npm install @mui/icons-material
   npm install framer-motion
   npm install react-icons

   ```

3. Ejecuta el proyecto:
   ```bash
   npm run dev
   
   ```

4. Abre en el navegador:
   ```
   http://localhost:5173/

   ```

## Funcionalidades

- Navegación SPA con React Router (opcional si se usa)
- Página de inicio con bienvenida
- Páginas separadas por género (masculino/femenino)
- Detalles individuales de personajes
- Página "Acerca de"
- Componentes reutilizables (Navbar, Footer, Card)

## Accesibilidad

- Etiquetas semánticas
- Texto alternativo en imágenes
- Buen contraste visual
- Navegación clara y coherente

## Autor

Creado por Alexander Pérez Correa. Proyecto académico.
