# Portafolio Personal — Carlos Merino

Portafolio web profesional desarrollado con **React 19**, **Vite** y **Tailwind CSS v4**, diseñado para presentar mi trayectoria, proyectos destacados, stack tecnológico y certificaciones como Desarrollador de Software Jr.

🌐 **Demo en vivo:** [https://cyberking23.github.io/PortafolioPersonal/](https://cyberking23.github.io/PortafolioPersonal/)

---

## ✨ Características y Secciones

- **Hero & Presentación:** Resumen profesional, indicadores clave de experiencia y descarga directa de CV en PDF.
- **Proyectos Destacados:** Galería interactiva con previsualizaciones y enlaces directos a despliegues en producción:
  - [Clon de Disney+](https://cyberking23.github.io/React-DisneyClone/)
  - [Clon de Spotify](https://cyberking23.github.io/React-SpotifyClone/)
- **Stack Técnico:** Organización categorizada de tecnologías de Front-End, Back-End, Bases de Datos y Herramientas DevOps/Infraestructura.
- **Validaciones Técnicas:** Carrusel interactivo con previsualización integrada de certificados en PDF.
- **Diseño Responsivo:** Interfaz moderna en modo oscuro (`Dark UI`) adaptable a dispositivos móviles, tablets y escritorio.

---

## 🛠️ Tecnologías Utilizadas

- **Front-End:** React 19, JavaScript (ES6+), HTML5, CSS3
- **Estilos:** Tailwind CSS v4, Flowbite React
- **Bundler & Entorno:** Vite 8, Node.js
- **Contenerización:** Docker & Docker Compose
- **Despliegue:** GitHub Pages (compilación estática en `/docs`)

---

## 📂 Estructura del Proyecto

```text
├── docs/                  # Build de producción para GitHub Pages
├── public/                # Recursos estáticos (CV, certificados PDF, imágenes)
│   ├── Certificaciones/
│   ├── Docs/
│   └── img/
├── src/
│   ├── Components/
│   │   ├── CarruselProyectos.jsx
│   │   └── Certificaciones.jsx
│   ├── App.jsx            # Componente principal y layout del portafolio
│   ├── main.jsx           # Punto de entrada de React
│   └── index.css          # Configuración de estilos y Tailwind CSS
├── Dockerfile             # Configuración multi-stage (dev / build / prod)
├── compose.yml            # Orquestación local con Docker Compose
└── vite.config.js         # Configuración de Vite y ruta base
```

---

## 🚀 Instalación y Uso Local

### 1. Clonar el repositorio

```bash
git clone https://github.com/Cyberking23/PortafolioPersonal.git
cd PortafolioPersonal
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Iniciar servidor de desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173/PortafolioPersonal/`.

### 4. Compilar para producción

```bash
npm run build
```

Los archivos optimizados se generarán automáticamente dentro de la carpeta `docs/` lista para publicarse en GitHub Pages.

---

## 🐳 Ejecución con Docker

El proyecto incluye soporte para contenedores mediante Docker Compose:

```bash
docker compose up --build
```

El entorno de desarrollo con *Hot Reload* estará disponible en `http://localhost:8080/PortafolioPersonal/`.

---

## 📬 Contacto

- **Autor:** Carlos Merino — *Técnico en Ingeniería en Ciencias de la Computación*
- **GitHub:** [@Cyberking23](https://github.com/Cyberking23)
- **Correo:** [merinoventura123@gmail.com](mailto:merinoventura123@gmail.com)
