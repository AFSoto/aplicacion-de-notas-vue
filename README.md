# Aplicación de Notas

Aplicación fullstack de gestión de notas construida con **Vue 3** en el frontend y **Laravel 12** en el backend. Permite crear notas, marcarlas como completadas y visualizarlas con un diseño moderno y responsivo.

---

## Tecnologías

### Frontend
| Tecnología | Versión | Propósito |
|---|---|---|
| Vue 3 | Latest | Framework UI con Composition API |
| Vue Router 5 | Latest | Navegación SPA |
| Pinia 3 | Latest | Gestión de estado global |
| Tailwind CSS v4 | Latest | Estilos utilitarios |
| Vite 8 | Latest | Bundler y servidor de desarrollo |

### Backend
| Tecnología | Versión | Propósito |
|---|---|---|
| Laravel | 12 | Framework PHP |
| SQLite | — | Base de datos (archivo local) |
| Laravel Sanctum | — | Instalado (auth futura) |

---

## Estructura del Proyecto

```
aplicacion-de-notas-vue/
├── src/                        # Código frontend (Vue)
│   ├── main.js                 # Punto de entrada, inicializa Pinia y Router
│   ├── App.vue                 # Componente raíz
│   ├── assets/
│   │   ├── main.css            # Variables de tema y paleta de colores
│   │   └── base.css            # Estilos base globales
│   ├── router/
│   │   └── index.js            # Definición de rutas
│   ├── stores/
│   │   └── notes.js            # Store de Pinia (estado de notas)
│   ├── views/
│   │   ├── HomeView.vue        # Página de inicio con presentación
│   │   └── NotasView.vue       # Página principal de notas
│   └── components/
│       ├── TheHeader.vue       # Barra de navegación
│       ├── CreateNote.vue      # Formulario para crear notas
│       └── NoteCart.vue        # Tarjeta individual de nota
├── backend/                    # Código backend (Laravel)
│   ├── routes/
│   │   └── api.php             # Definición de endpoints REST
│   ├── app/
│   │   ├── Http/Controllers/
│   │   │   └── NoteController.php  # Lógica de la API
│   │   └── Models/
│   │       └── Note.php            # Modelo Eloquent
│   └── database/
│       └── migrations/             # Esquema de base de datos
├── index.html
├── vite.config.js
└── package.json
```

---

## Cómo Funciona

### Flujo General

```
Usuario → Vue (NotasView) → Pinia Store → Fetch API → Laravel API → SQLite
```

1. El usuario abre `/notas`
2. `NotasView.vue` llama a `getNotes()` del store en `onMounted`
3. El store hace un `fetch` GET a `http://127.0.0.1:8000/api/notes`
4. Laravel devuelve las notas ordenadas de más reciente a más antigua
5. La lista se renderiza con un componente `NoteCart` por cada nota

### Crear una Nota

1. El usuario escribe en el formulario fijo en la parte inferior (`CreateNote.vue`)
2. Al enviar, se llama a `addNote(title)` del store
3. El store hace un `fetch` POST con el título al backend
4. Laravel valida el campo, crea el registro y devuelve HTTP 201
5. El store actualiza la lista localmente

### Marcar como Completada

- Cada `NoteCart.vue` tiene un checkbox vinculado a `note.completed` con `v-model`
- Al marcar, cambia el estilo visualmente (tachado + color gris)
- **Nota:** este cambio es local (no se sincroniza con el backend actualmente)

---

## API REST

Base URL: `http://127.0.0.1:8000/api`

| Método | Endpoint | Descripción | Body |
|---|---|---|---|
| `GET` | `/notes` | Retorna todas las notas (más recientes primero) | — |
| `POST` | `/notes` | Crea una nueva nota | `{ "title": "string" }` |

### Ejemplo de respuesta GET `/notes`

```json
[
  {
    "id": 1,
    "title": "Comprar leche",
    "completed": false,
    "created_at": "2026-04-19T17:14:54.000000Z",
    "updated_at": "2026-04-19T17:14:54.000000Z"
  }
]
```

### Ejemplo de body POST `/notes`

```json
{
  "title": "Mi nueva nota"
}
```

---

## Esquema de Base de Datos

```sql
CREATE TABLE notes (
  id         BIGINT PRIMARY KEY AUTO_INCREMENT,
  title      VARCHAR(255) NOT NULL,
  completed  BOOLEAN DEFAULT false,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);
```

---

## Estado Global (Pinia)

El store `useNoteStore` en [src/stores/notes.js](src/stores/notes.js) maneja:

| Estado | Tipo | Descripción |
|---|---|---|
| `notes` | `Array` | Lista de notas del backend |
| `loading` | `Boolean` | Indica si se están cargando notas |
| `error` | `Boolean` | Indica si hubo error en la petición |

| Acción | Descripción |
|---|---|
| `getNotes()` | Obtiene todas las notas del backend |
| `addNote(title)` | Crea una nota nueva vía POST |

---

## Rutas del Frontend

| Ruta | Vista | Descripción |
|---|---|---|
| `/` | `HomeView.vue` | Página de inicio con características |
| `/notas` | `NotasView.vue` | Gestión de notas |

---

## Instalación y Puesta en Marcha

### Requisitos
- Node.js 18+
- PHP 8.2+
- Composer

### 1. Clonar el repositorio

```bash
git clone <url-del-repositorio>
cd aplicacion-de-notas-vue
```

### 2. Configurar el Backend (Laravel)

```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve
```

El servidor backend quedará en `http://127.0.0.1:8000`.

### 3. Configurar el Frontend (Vue)

En otra terminal, desde la raíz del proyecto:

```bash
npm install
npm run dev
```

El servidor frontend quedará en `http://localhost:5173`.

### 4. Abrir la aplicación

Navega a `http://localhost:5173` en tu navegador.

---

## Scripts Disponibles

### Frontend

```bash
npm run dev       # Servidor de desarrollo con HMR
npm run build     # Build de producción
npm run lint      # Linting con ESLint + Oxlint
npm run format    # Formateo con Prettier
```

### Backend

```bash
php artisan serve          # Servidor de desarrollo
php artisan migrate        # Ejecutar migraciones
php artisan migrate:fresh  # Resetear base de datos
```

---

## Características

- Crear notas con título
- Visualizar contador de notas guardadas
- Marcar notas como completadas (efecto visual de tachado)
- Estado de carga con skeleton mientras se obtienen datos
- Manejo de errores con alerta visual
- Estado vacío cuando no hay notas
- Diseño responsivo (mobile-first)
- Efecto glassmorphism y gradientes en UI

---

## Limitaciones Actuales

- El estado "completado" no se persiste en el backend (solo es visual/local)
- La edición del título tampoco se guarda (no hay endpoint `PUT/PATCH`)
- No hay endpoint de eliminación de notas
- Sin autenticación: todas las notas son públicas y compartidas
- La URL del backend está hardcodeada en el store

---

## Mejoras Futuras

- Agregar endpoints `PATCH /notes/:id` y `DELETE /notes/:id`
- Sincronizar el estado "completado" con el backend
- Implementar autenticación con Laravel Sanctum
- Mover la URL base a variables de entorno (`.env`)
- Agregar filtros por estado (todas / activas / completadas)
