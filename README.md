# 🚀 StoreHQ SWAPI Explorer

Una SPA en **React**, **Redux Toolkit** y **Tailwind CSS** que consume la [Star Wars API (SWAPI)](https://swapi.dev/), con listados, paginación y vistas de detalle para personajes, planetas y películas de Star Wars.

---

## 🔧 Instalación

Clona el repositorio e instala todas las dependencias:


- **Repositorio GitHub:**  
  https://github.com/tu-usuario/storehq-swapi

- **Demo en línea (Vercel):**  
  https://storehq-swapi.vercel.app

git clone https://github.com/DixonBm03/storehq-swapi.git
cd storehq-swapi
npm install
▶️ Ejecución en Desarrollo
npm start
Abre tu navegador en http://localhost:3000

Hot-reload: cada cambio en src/ se refleja automáticamente.

📦 Build de Producción
npm run build
Genera el directorio build/ optimizado, listo para desplegar en cualquier servidor estático.

📁 Estructura del Proyecto
storehq-swapi/
├── public/                    # Archivos estáticos (index.html, íconos, manifest.json)
├── src/
│   ├── api/
│   │   └── api.js             # Instancia Axios configurada a SWAPI
│   ├── components/            # UI genéricos
│   │   ├── Navbar.js          # Menú tipo “tabs”
│   │   └── Pagination.js      # Botones anterior/siguiente
│   ├── features/              # Carpetas por dominio + Redux slices
│   │   ├── people/
│   │   │   ├── peopleSlice.js
│   │   │   ├── PeopleList.js
│   │   │   └── PersonDetail.js
│   │   ├── planets/
│   │   │   ├── planetsSlice.js
│   │   │   ├── PlanetsList.js
│   │   │   └── PlanetDetail.js
│   │   └── films/
│   │       ├── filmsSlice.js
│   │       └── FilmsList.js
│   ├── store/
│   │   └── index.js           # Configuración Redux Toolkit store
│   ├── App.tsx                # Layout principal + React Router v6
│   ├── index.css              # Tailwind directives + fondo degradado
│   └── index.tsx              # Entrada ReactDOM + <Provider>
├── craco.config.js            # CRACO + PostCSS (Tailwind) config
├── tailwind.config.js         # Rutas de contenido para purgar
├── postcss.config.js          # Plugins PostCSS
├── package.json
└── README.md
⚙️ Decisiones Técnicas
Create React App + CRACO
Integra Tailwind CSS v4 sin ejectar.

Tailwind CSS v4
Clases utilitarias, mobile-first y altamente personalizable.

Redux Toolkit
createSlice + createAsyncThunk para manejo sencillo de estado y peticiones asíncronas (paginación incluida).

React Router v6
Rutas declarativas con <Routes> y <Navigate>.

Axios
Cliente HTTP con baseURL apuntando a la SWAPI.

Temática visual
Fondo oscuro degradado, acentos ámbar/amarillo, tarjetas centradas y espaciadas para buen contraste y legibilidad.