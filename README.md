# ISFT N° 195

Portal web institucional del **Instituto Superior de Formación Técnica N° 195** de Lima, partido de Zárate.

> 🚧 **Sitio en construcción.**  
> Este repositorio contiene la base del nuevo portal institucional del ISFT N° 195 desarrollado con Next.js, TypeScript y Tailwind CSS.

---

## 🚀 Tecnologías

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
- **Estilos**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Plataforma de Despliegue**: [Vercel](https://vercel.com/)

---

## 💻 Desarrollo Local

Para iniciar el servidor de desarrollo local:

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

---

## 📦 Compilación y Producción

Para validar tipos y compilar el proyecto para producción:

```bash
# Comprobar linting
npm run lint

# Generar compilación optimizada
npm run build

# Iniciar servidor de producción local
npm run start
```

---

## 🌐 Despliegue en Vercel

Este proyecto está configurado para despliegue automático continuo con **Vercel**:
1. Conectar el repositorio de GitHub (`atdotslash/isft195.edu.ar`) en Vercel.
2. Vercel detecta automáticamente el framework **Next.js**.
3. Cada push a la rama `main` dispara automáticamente el proceso de construcción y publicación en producción.
