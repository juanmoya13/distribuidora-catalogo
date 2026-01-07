src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                # Página principal (Catálogo)
│   ├── globals.css
│   │
│   └── not-found.tsx           # 404 estático
│
├── components/
│   ├── atoms/
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   └── Button.types.ts
│   │   │
│   │   ├── Input/
│   │   │   ├── Input.tsx
│   │   │   └── Input.types.ts
│   │   │
│   │   ├── Text/
│   │   │   └── Text.tsx
│   │
│   ├── molecules/
│   │   ├── SearchInput/
│   │   │   ├── SearchInput.tsx
│   │   │   └── SearchInput.types.ts
│   │   │
│   │   ├── CategoryItem/
│   │   │   └── CategoryItem.tsx
│   │
│   ├── organisms/
│   │   ├── ProductCard/
│   │   │   ├── ProductCard.tsx
│   │   │   └── ProductCard.types.ts
│   │   │
│   │   ├── ProductGrid/
│   │   │   └── ProductGrid.tsx
│   │   │
│   │   └── CategoryFilter/
│   │       └── CategoryFilter.tsx
│
├── features/
│   └── catalog/
│       ├── CatalogPage.tsx     # Contenedor principal del catálogo
│       ├── catalog.logic.ts    # Búsqueda, filtros, orden, paginado
│       ├── catalog.types.ts    # Tipos del dominio catálogo
│       └── catalog.constants.ts
│
├── data/
│   └── products.json           # Fuente de datos del MVP
│
├── lib/
│   ├── formatters.ts           # Formateo de precio, texto, etc.
│   └── sorters.ts              # Funciones de orden
│
├── hooks/
│   └── useCatalog.ts           # Hook que orquesta estado del catálogo
│
├── styles/
│   └── variables.css
│
├── types/
│   └── index.ts                # Tipos compartidos
│
└── utils/
    └── filters.ts              # Helpers puros y reutilizables

