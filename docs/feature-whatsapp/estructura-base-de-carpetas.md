src/
├── app/
│ ├── layout.tsx # Layout global (monta WhatsAppAccess)
│ ├── page.tsx # Página principal (Catálogo)
│ ├── globals.css
│ └── not-found.tsx
│
├── components/
│ ├── atoms/
│ │ ├── Button/
│ │ ├── Input/
│ │ └── Text/
│ │
│ ├── molecules/
│ │ ├── SearchInput/
│ │ └── CategoryItem/
│ │
│ ├── organisms/
│ │ ├── ProductCard/
│ │ ├── ProductGrid/
│ │ ├── CategoryFilter/
│ │ └── WhatsAppAccess/ # Ícono flotante + redirección
│ │ ├── WhatsAppAccess.tsx
│ │ └── WhatsAppAccess.types.ts
│
├── features/
│ ├── catalog/
│ │ ├── CatalogPage.tsx
│ │ ├── catalog.logic.ts
│ │ ├── catalog.types.ts
│ │ └── catalog.constants.ts
│ │
│ └── whatsapp/ # Feature aislada y transversal
│ ├── whatsapp.constants.ts
│ └── whatsapp.logic.ts # Construcción de URL y encoding
│
├── data/
│ └── products.json
│
├── lib/
│ ├── formatters.ts
│ └── sorters.ts
│
├── hooks/
│ └── useCatalog.ts
│
├── styles/
│ └── variables.css
│
├── types/
│ └── index.ts
│
└── utils/
└── filters.ts