flowchart TD
    A[Usuario accede al sitio] --> B[Next.js sirve página estática SSG]
    B --> C[Cargar catálogo desde JSON]
    C --> D[Ordenar productos alfabéticamente]
    D --> E[Renderizar catálogo inicial - carga parcial]

    E --> F{Usuario interactúa}

    F -->|Buscar por nombre| G[Actualizar termino de busqueda]
    F -->|Filtrar por categoria| H[Actualizar categoria seleccionada]
    F -->|Ver mas productos| I[Incrementar cantidad visible]

    G --> J[Aplicar busqueda y filtro]
    H --> J
    I --> K[Renderizar mas productos]

    J --> L{Hay resultados}

    L -->|Si| M[Renderizar productos filtrados]
    L -->|No| N[Mostrar mensaje No se encontraron productos]

    M --> F
    N --> F
    K --> F

