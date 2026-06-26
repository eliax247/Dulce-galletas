# 🍪 Dulce Galletas - Modern Website

**Un sitio web moderno y responsive para tu negocio de galletas artesanales.**

## ✨ Características

- ⚛️ **React 18** - Framework moderno
- ⚡ **Vite** - Herramienta de desarrollo ultra-rápida
- 🎨 **Tailwind CSS** - Diseño moderno y responsive
- 🎬 **Framer Motion** - Animaciones suaves
- 🧭 **React Router** - Navegación entre páginas
- 📱 **Diseño Mobile-First** - Optimizado para todos los dispositivos
- ♿ **Accesibilidad** - Cumple con estándares WCAG

## 🚀 Quick Start

### Instalación

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

### Producción

```bash
npm run build
npm run preview
```

## 📁 Estructura del Proyecto

```
├── src/
│   ├── components/        # Componentes reutilizables
│   ├── pages/            # Páginas principales
│   ├── App.jsx           # Componente raíz
│   ├── main.jsx          # Punto de entrada
│   └── index.css         # Estilos globales
├── public/               # Activos estáticos
├── index.html            # HTML principal
├── vite.config.js        # Configuración de Vite
├── tailwind.config.js    # Configuración de Tailwind
└── package.json          # Dependencias
```

## 🎨 Personalización

### Colores

Edita `tailwind.config.js` para cambiar los colores de la marca:

```js
colors: {
  'dulce': {
    50: '#fff7f2',
    500: '#d96d5f',
    600: '#c85a4b',
    // ...
  }
}
```

### Contenido

- **Home**: `src/pages/Home.jsx`
- **Recetas**: `src/pages/Recipes.jsx`
- **Nosotros**: `src/pages/About.jsx`
- **Contacto**: `src/pages/Contact.jsx`

## 🌐 Despliegue

### GitHub Pages

1. Agrega a `vite.config.js`:
```js
export default {
  base: '/Dulce-galletas/',
  // ...
}
```

2. Deploy:
```bash
npm run build
```

3. Sube la carpeta `dist/` a GitHub Pages

### Vercel

```bash
npm i -g vercel
vercel
```

## 📦 Dependencias

- **react** - Librería UI
- **react-dom** - Rendering de React
- **react-router-dom** - Enrutamiento
- **framer-motion** - Animaciones
- **lucide-react** - Iconos
- **tailwindcss** - Utilidades CSS

## 🛠️ Scripts

```bash
npm run dev      # Inicia servidor de desarrollo
npm run build    # Construye para producción
npm run preview  # Previsualiza build de producción
npm run lint     # Verifica el código
```

## 📞 Contacto

¿Preguntas o sugerencias? ¡Contáctanos!

📧 info@dulcegalletas.com
📱 +1 (555) 123-4567

---

**© 2026 Dulce Galletas. Hecho con ❤️**
