# 🗂 Sistema de Punto de Venta (PDV)

## 🦙 🇵🇪 **La Choza - Para Perú**

Este repositorio contiene el código fuente para el desarrollo de mi aplicación de web para un sistema de punto de venta diseñado para pequeñas tiendas en Perú, construido utilizando _**npm create vite@latest**_. La nueva tecnología utilizada está diseñada para la simplicidad, el rendimiento y la facilidad de gestión de contenido para el desarrollo y mantenimiento futuro.

### [![Netlify Status](https://api.netlify.com/api/v1/badges/b4ca35f8-4c9e-428a-a262-5e7bf554b6f9/deploy-status)](https://app.netlify.com/sites/la-choza-pdv/deploys) [Dev Server](https://en-es-dictionary.netlify.app/)

## 🛠️ **Resumen de la Tecnología Utilizada**  
[![Mis Habilidades](https://skillicons.dev/icons?i=js,html,css)](https://skillicons.dev)

### 📘 **Frontend**

- **ReactJS**: Para construir una interfaz de usuario dinámica, receptiva y basada en componentes.

- **SASS**: Para estilizar con facilidad las clases de CSS, manteniendo un diseño limpio y consistente para UI/UX.

### 📖 **Backend y Gestión de Recursos**

- **NodeJS/Express & MongoDB/localStorage**: Para almacenar imágenes, direcciones de correo electrónico y otros datos críticos como registros estructurados.

## ❓ **¿Por qué esta tecnología? (MERN)**

### **1. ReactJS & SASS/SCSS**

- Asegura la modularidad y la reutilización de componentes de código para facilitar futuras actualizaciones.

- SASS/SCSS se integra perfectamente en los componentes de React, permitiendo un diseño y UI/UX consistente.

- Es mejor para proyectos más grandes con muchos estilos, asegurando coherencia y un mejor control en comparación con `styled-components`, que puede ser sobrescrito o no cargarse correctamente cuando los componentes cambian.

### **2. NodeJS/Express & MongoDB/localStorage**

- Permite almacenar datos en formato JSON.

- Garantiza una recuperación de datos rápida y confiable, almacenando en caché la información una vez visitada por primera vez.

---

# 🗂 Configuración del Proyecto  

### **Requisitos Previos**

- Tener instalado Node.js y npm.

- Crear una aplicación de React _con_ Vite.

- Seguir este artículo de [freecodecamp.org](https://www.freecodecamp.org/news/how-to-create-a-react-app-in-2024/#:~:text=Create%20React%20App%20has%20been,new%20React%20project%20in%202024.).

- Ejecutar el comando:  
  ```sh
  npm create vite@latest

### React + Vite
- Actualmente, hay dos complementos oficiales disponibles:

	- @vitejs/plugin-react utiliza Babel para Fast Refresh.

	- @vitejs/plugin-react-swc utiliza SWC para Fast Refresh.

# 🛠️ 🐛 Progreso/Bugs

### Feat: Connected SCSS files correctly w/ @use & @forward, not @import

<img width="283" alt="Image" src="https://github.com/user-attachments/assets/168f8f89-d03e-4cdc-86e3-10c4f684c57c" />

### Feat: Installed **_npm install prop-types_** to import prop-types to fix warning message
REF: https://www.npmjs.com/package/prop-types

```jsx
import './Logo.scss'
import LogoImg from '../../assets/images/logo.png';
import PropTypes from 'prop-types'; // import prop-types to fix warning message

function Logo(props) {
  return (
    <section>
        <img src={LogoImg} alt='Logo de La Choza' />
        <h1 className='logo-font'>{props.logoHeader}</h1>
    </section>
  )
}

Logo.propTypes = { // works like TypeScript
    logoHeader: PropTypes.string.isRequired
};

export default Logo
```

### Feat: Huge UI/UX update // added React Routers

<img width="600" alt="Image" src="https://github.com/user-attachments/assets/fc1e2eb5-64a6-4874-91b6-5b5852c5094b" />

### Feat: Dashboard UI updated

<img width="1431" alt="Image" src="https://github.com/user-attachments/assets/76eb1814-41f9-438a-b2bd-7a91a36b3af8" />

# 📊 Milestones (In English)

### 📌 Milestone #1: **Project Planning & Design** 
- [x] Decide on the **topic and theme** for the project
- [ ] Create a **Wireframe Prototype** using Figma
- [x] Create **Deadlines**
    - Milestone 1: 02/10/2025
    - Milestone 2: 02/17/2025
    - Milestone 3: 02/24/2025
    - Milestone 4: 03/02/2025

### 🚀 Milestone #2: **Development & Setup** 
- [x] Setup and initialize the project
- [x] Set up **GitHub Repository**
- [x] Write an initial **README.md** file
- [ ] Research and select a **free API** that returns JSON data
- [ ] SCSS/SASS setup
- [ ] Backend
    - NodeJS/Express
    - MongoDB/localStorage

### 🛠️ Milestone #3: **Functional Prototype** 
- [ ] Components/Structure
- [ ] Use of (2) libraries

### 🎨 Milestone #4: **Final Touches & Deployment** 
- [ ] Working application
- [ ] Ready for **Production**


