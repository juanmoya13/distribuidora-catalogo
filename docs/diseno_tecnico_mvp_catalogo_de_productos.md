# Diseño Técnico – MVP Catálogo de Productos

## 1. Objetivo del Diseño Técnico

Definir las decisiones técnicas necesarias para implementar el MVP del **Catálogo de Productos** de forma simple, predecible y alineada con buenas prácticas, utilizando **Next.js** como framework frontend y **Static Site Generation (SSG)** como estrategia de renderizado.

Este documento traduce los requerimientos funcionales y no funcionales del análisis del MVP en una arquitectura técnica concreta, evitando sobre–ingeniería y dejando habilitada la evolución futura del producto.

---

## 2. Arquitectura General de la Aplicación

### 2.1 Tipo de aplicación

- Aplicación web pública
- Solo lectura
- Sin autenticación
- Sin backend dinámico
- Fuente de datos estática (archivo JSON)

### 2.2 Framework y enfoque

- **Next.js** (App Router)
- React como librería base
- Renderizado estático (SSG)

### 2.3 Capas de la aplicación

La arquitectura se organiza en capas claramente diferenciadas:

1. **Capa de Datos**  
   Archivo JSON estático que contiene el catálogo completo de productos.

2. **Capa de Lógica de Presentación**  
   Funciones puras responsables de:
   - ordenar productos
   - filtrar por nombre
   - filtrar por categoría
   - combinar criterios
   - manejar carga parcial

3. **Capa de UI (Componentes React)**  
   Componentes construidos bajo el enfoque de **Atomic Design**.

---

## 3. Estrategia de Renderizado (SSG)

### 3.1 Decisión

Se utilizará **Static Site Generation (SSG)** para generar el catálogo en tiempo de build.

### 3.2 Justificación

- Los datos no cambian dinámicamente
- No existe personalización por usuario
- Máximo rendimiento
- Simplicidad de despliegue
- Ideal para catálogos públicos

### 3.3 Implicancias técnicas

- El archivo JSON se carga en el servidor durante el build
- El HTML inicial se entrega ya renderizado
- La interacción (búsqueda, filtros) ocurre del lado del cliente

---

## 4. Modelo de Datos Técnico (JSON)

### 4.1 Estructura del producto

Cada producto del catálogo tendrá la siguiente estructura:

- `id`: string único
- `nombre`: string
- `precio`: number (moneda fija)
- `categoria`: string
- `image`: string (ruta relativa al asset)

### 4.2 Ejemplo

```json
{
  "id": "1",
  "nombre": "Paleta Cagnoli",
  "precio": 45999,
  "categoria": "paletas y jamones cocidos",
  "image": "paleta-cagnoli.webp"
}
```

### 4.3 Decisiones de diseño

- Se utiliza una categoría como string para máxima simplicidad
- La estructura permite evolución futura (múltiples categorías, tags, etc.)
- El JSON actúa como contrato de datos

---

## 5. Flujo de Datos del Catálogo

### 5.1 Flujo general

1. Next.js importa el archivo JSON en build time
2. Los productos se normalizan y ordenan alfabéticamente
3. El dataset se pasa al componente contenedor del catálogo
4. El estado local controla:
   - búsqueda
   - categoría seleccionada
   - cantidad de productos visibles
5. La UI se renderiza según los criterios activos

### 5.2 Principios

- El dataset original nunca se muta
- Todas las transformaciones son funciones puras
- Un único punto de entrada de datos

---

## 6. Arquitectura de Componentes (Atomic Design)

### 6.1 Átomos

Componentes básicos, sin lógica de negocio:

- Button
- Input
- Text
- Image
- Badge

### 6.2 Moléculas

Combinación de átomos:

- SearchInput
- CategoryItem
- ProductPrice

### 6.3 Organismos

Componentes con mayor responsabilidad visual:

- ProductCard
- ProductGrid
- CategoryFilter

### 6.4 Templates / Pages

- CatalogPage (contenedor principal)

Responsabilidades:
- cargar datos
- manejar estado
- orquestar componentes

---

## 7. Manejo de Estado

### 7.1 Estrategia

- Estado local con `useState`
- Sin estado global
- Sin librerías externas

### 7.2 Estados principales

- `searchTerm`
- `selectedCategory`
- `visibleCount`

Esta decisión prioriza simplicidad y claridad.

---

## 8. Carga Parcial del Catálogo

### 8.1 Estrategia

- Render inicial con una cantidad limitada de productos
- Botón "Ver más" para cargar incrementos

### 8.2 Comportamiento

- Al cambiar búsqueda o categoría:
  - se reinicia el contador
- Evita renders pesados
- Mejora experiencia de navegación

---

## 9. Manejo de Estados de UI

Estados contemplados:

- Estado inicial (catálogo cargado)
- Estado con resultados
- Estado sin resultados

Mensaje estándar:

> "No se encontraron productos"

---

## 10. Convenciones Técnicas

- Componentes pequeños y reutilizables
- Una responsabilidad por componente
- Lógica desacoplada de la UI
- Naming claro y consistente

---

## 11. Consideraciones de Evolución Futura

Este diseño permite incorporar sin refactor mayor:

- Vista de detalle de producto
- Nuevos filtros
- Backend dinámico
- Panel de administración
- SEO avanzado

---

## 12. Definition of Done – Diseño Técnico

El diseño técnico se considera completo cuando:

- Todas las decisiones técnicas están documentadas
- La arquitectura respeta simplicidad y buenas prácticas
- El diseño no bloquea la evolución futura
- Existe una guía clara para la implementación

