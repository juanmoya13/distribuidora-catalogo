flowchart TD
A[Usuario accede al sitio] --> B[Next.js sirve página estática SSG]
B --> C[Cargar catálogo desde JSON]
C --> D[Ordenar productos alfabéticamente]
D --> E[Renderizar catálogo inicial - carga parcial]


%% Feature WhatsApp
B --> W[Renderizar acceso global a WhatsApp]


E --> F{Usuario interactúa}


F -->|Buscar por nombre| G[Actualizar término de búsqueda]
F -->|Filtrar por categoría| H[Actualizar categoría seleccionada]
F -->|Ver más productos| I[Incrementar cantidad visible]
F -->|Click en WhatsApp| WA[Construir URL de WhatsApp]


G --> J[Aplicar búsqueda y filtro]
H --> J
I --> K[Renderizar más productos]


J --> L{Hay resultados}


L -->|Sí| M[Renderizar productos filtrados]
L -->|No| N[Mostrar mensaje: No se encontraron productos]


WA --> WB[Redirigir a WhatsApp Web / App]


M --> F
N --> F
K --> F