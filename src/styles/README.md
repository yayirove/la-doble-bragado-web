# La Doble Bragado Web

Sitio oficial de **La Doble Bragado**, una de las competencias ciclísticas más importantes de Argentina. Este proyecto es desarrollado en [Astro](https://astro.build/) y desplegado automáticamente con Netlify.

## 🏁 Estructura del sitio

- **Inicio**: imagen hero fullscreen con contador y noticias integradas.
- **Historia**: reseña de la competencia con material de archivo.
- **Etapas**: recorrido de las 5 etapas (en construcción).
- **Equipos**: presentación con fotos por equipo.
- **Multimedia**: sección en desarrollo para galería y videos.
- **Colaboración**: sponsors, donaciones y suscripciones.

## ⚙️ Stack

- [Astro](https://astro.build/)  
- HTML / CSS  
- JavaScript (solo para el contador)
- Deploy: [Netlify](https://www.netlify.com/)

## 🚀 Deploy automático

El sitio se despliega automáticamente cuando se hace un `git push` a la rama `main` en GitHub.  
Netlify reconstruye y actualiza el sitio sin intervención manual.

## 📦 Scripts

```bash
# Instalar dependencias
npm install

# Servidor local
npm run dev

# Compilar para producción
npm run build

/public
  └── assets
      └── hero-nueva.jpg
      └── ganadores/
      └── js/contador.js

/src
  └── pages/
      └── index.astro
      └── historia.astro
  └── layouts/
      └── layout.astro
  └── styles/
      └── global.css


---

