---
title: 'Navegación y rutas en React'
pubDate: 2024-06-08
description: 'Aprende a configurar rutas y navegación en una aplicación React usando React Router.'
author: 'Desarrollador Frontend'
image:
    url: 'https://media.dev.to/cdn-cgi/image/width=1600,height=900,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fbohilxedfl6ijlltfyeq.png'
    alt: 'Logotipo de React Router.'
tags: ["react", "react router", "navegación", "javascript"]
---

React Router es una biblioteca estándar para manejar rutas en aplicaciones React. A continuación, aprenderás cómo configurarlo en tu proyecto.

## Paso 1: Instala React Router

Primero, instala React Router en tu proyecto:

```bash
npm install react-router-dom
```

## Paso 2: Configura las rutas

Crea un archivo `App.js` y configura tus rutas básicas:

```jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
}

export default App;
```

## Paso 3: Crea los componentes de las páginas

Crea los componentes `Home.js` y `About.js`:

```jsx
// Home.js
import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>Inicio</h1>
    </div>
  );
}

export default Home;

// About.js
import React from 'react';

const About = () => {
  return (
    <div>
      <h1>Acerca de</h1>
    </div>
  );
}

export default About;
```

## Paso 4: Navega entre las páginas

Añade enlaces para navegar entre las páginas:

```jsx
// App.js (actualizado)
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/about">Acerca de</Link>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
}

export default App;
```

¡Listo! Ahora tienes una aplicación React con navegación básica.
