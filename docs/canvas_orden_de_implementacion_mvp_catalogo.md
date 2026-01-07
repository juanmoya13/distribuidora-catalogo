# Canvas de Implementación – MVP Catálogo de Productos

Este documento describe el **orden correcto de implementación** del MVP, desglosado en etapas. Cada etapa incluye su **objetivo**, **requerimientos técnicos**, **requerimientos funcionales** y **Definition of Done**, alineado estrictamente con el análisis del proyecto.

---

## 1. Modelo de Datos (JSON)

### Objetivo
Definir la fuente de verdad del sistema mediante un modelo de datos simple, consistente y extensible que represente correctamente los productos del catálogo.

### Requerimientos Técnicos
- Archivo JSON estático
- Estructura clara y predecible
- Campos obligatorios definidos explícitamente
- Soporte para múltiples categorías por producto

### Requerimientos Funcionales
- Cada producto debe incluir:
  - Imagen (obligatoria)
  - Nombre
  - Precio (moneda fija)
  - Una o más categorías
- Las categorías no son jerárquicas

### Definition of Done
- Existe un archivo JSON válido
- Todos los productos cumplen el modelo definido
- El modelo permite agregar nuevos atributos sin romper compatibilidad

---

## 2. Capa de Acceso a Datos

### Objetivo
Centralizar la lectura y provisión de datos del catálogo desacoplando el origen de datos del resto de la aplicación.

### Requerimientos Técnicos
- Función o módulo único de acceso a productos
- Lectura desde archivo JSON
- Preparado para futuras fuentes (API, DB)

### Requerimientos Funcionales
- Proveer la lista completa de productos
- No aplicar lógica de presentación

### Definition of Done
- El catálogo se obtiene exclusivamente desde esta capa
- Ningún componente accede directamente al JSON

---

## 3. Lógica de Negocio del Catálogo

### Objetivo
Implementar el comportamiento central del MVP: orden, búsqueda y filtrado de productos.

### Requerimientos Técnicos
- Funciones puras y reutilizables
- Separación clara de UI

### Requerimientos Funcionales
- Orden alfabético de productos
- Búsqueda por nombre
- Filtro por categoría
- Combinación de búsqueda y filtro
- Detección de resultados vacíos

### Definition of Done
- Todas las combinaciones funcionan correctamente
- La lógica es independiente de la UI

---

## 4. Carga Parcial del Catálogo

### Objetivo
Mejorar la experiencia de navegación mostrando el catálogo de forma progresiva.

### Requerimientos Técnicos
- Control de cantidad de productos renderizados
- Incremento progresivo

### Requerimientos Funcionales
- Mostrar un subconjunto inicial de productos
- Permitir cargar más productos

### Definition of Done
- El catálogo no se renderiza completo inicialmente
- La navegación es fluida con 100–300 productos

---

## 5. UI Base del Catálogo

### Objetivo
Presentar visualmente el catálogo de forma clara, ordenada y legible.

### Requerimientos Técnicos
- Componentes reutilizables
- Layout responsivo

### Requerimientos Funcionales
- Visualización en formato de tarjetas
- Cada tarjeta muestra imagen, nombre y precio
- Grid claro y ordenado

### Definition of Done
- Todos los productos visibles cumplen el formato definido
- No existe información fuera del alcance del MVP

---

## 6. Controles de Interacción

### Objetivo
Permitir al usuario explorar el catálogo mediante búsqueda y filtros simples.

### Requerimientos Técnicos
- Inputs controlados
- Actualización reactiva del estado

### Requerimientos Funcionales
- Campo de búsqueda por nombre
- Selector de categoría
- Interacciones inmediatas

### Definition of Done
- Los controles modifican correctamente el listado
- No existen flujos complejos

---

## 7. Estados y Feedback Visual

### Objetivo
Asegurar una experiencia predecible y clara ante todos los estados posibles.

### Requerimientos Técnicos
- Manejo explícito de estados vacíos

### Requerimientos Funcionales
- Mostrar mensaje: "No se encontraron productos"
- Feedback visual inmediato

### Definition of Done
- El mensaje aparece solo cuando corresponde
- El comportamiento es consistente

---

## 8. Validación Final (Definition of Done del MVP)

### Objetivo
Confirmar que el MVP cumple exactamente con el alcance definido, sin funcionalidades extra.

### Requerimientos Técnicos
- Revisión integral del sistema

### Requerimientos Funcionales
- Cumplimiento total del alcance del MVP

### Definition of Done
- El catálogo es público
- Los productos cargan desde JSON
- Búsqueda y filtros funcionan
- Orden alfabético aplicado
- Carga parcial activa
- Mensaje sin resultados visible
- No hay funcionalidades fuera de alcance

