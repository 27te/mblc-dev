---
title: 'Como crear un componente en React'
pubDate: 2024-06-08
description: 'Una guía paso a paso para crear componentes reutilizables en React.'
author: 'Desarrollador React'
image:
    url: '/img/react-logo.webp'
    alt: 'Logotipo de React.'
tags: ["react", "componentes", "javascript"]
---

Los componentes son la base de cualquier aplicación de React. En esta guía, aprenderás cómo crear un componente sencillo y reutilizable en React.

## Paso 1: Configura tu proyecto

Primero, asegúrate de tener Node.js y npm instalados. Luego, crea un nuevo proyecto de React:

```bash
npx create-react-app mi-componente
cd mi-componente
npm start
```

## Paso 2: Crea el componente

Dentro de la carpeta `src`, crea un nuevo archivo llamado `MiComponente.js`:

```jsx
import React from 'react';

const MiComponente = () => {
  return (
    <div>
      <h1>Hola, soy un componente!</h1>
    </div>
  );
}

export default MiComponente;
```

## Paso 3: Usa el componente

Ahora, importa y usa tu componente en `App.js`:

```jsx
import React from 'react';
import MiComponente from './MiComponente';

function App() {
  return (
    <div className="App">
      <MiComponente />
    </div>
  );
}

export default App;
```

## Paso 4: Ejecuta tu aplicación

Ejecuta tu aplicación con `npm start` y deberías ver tu nuevo componente en el navegador.

¡Felicidades! Has creado tu primer componente en React.
