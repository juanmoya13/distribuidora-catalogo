# Canvas de Análisis – MVP Catálogo de Productos

## 1. Objetivo del Producto

Desarrollar un **catálogo de productos público, simple y eficiente**, que permita a cualquier usuario visualizar productos de forma clara y rápida, facilitando la búsqueda por nombre y el filtrado por categorías. El MVP debe resolver exclusivamente la necesidad de **exhibición y exploración del catálogo**, sentando una base sólida para futuras evoluciones sin necesidad de rehacer el diseño conceptual.

---

## 2. Usuarios

### Usuario Final (Visitante)
- Accede libremente al catálogo (sin autenticación)
- Navega, busca y filtra productos
- Consume información de forma pasiva (solo lectura)

### Administrador del Contenido (Propietario)
- Mantiene y edita manualmente el archivo JSON
- Define productos y categorías
- No interactúa mediante interfaz gráfica

---

## 3. Alcance del MVP

### Incluido
- Visualización pública del catálogo
- Visualización de productos mediante tarjetas
- Búsqueda por nombre de producto
- Filtro por categorías predefinidas
- Combinación de búsqueda + filtro
- Carga de datos desde un archivo JSON
- Orden alfabético de productos
- Carga parcial del catálogo para una navegación fluida
- Mensaje informativo cuando no hay resultados

### Excluido (Fuera de Alcance)
- Autenticación de usuarios
- Vista de detalle del producto
- Carrito de compras
- Pagos o pedidos
- Gestión de stock
- Ordenamientos alternativos
- Edición de productos desde la UI
- Roles o permisos
- Métricas, analíticas o SEO avanzado

---

## 4. Modelo Conceptual de Producto

### Producto
Cada producto debe contener obligatoriamente:
- Imagen
- Nombre
- Precio (moneda fija)
- Una o más categorías

Notas clave:
- Un producto puede pertenecer a múltiples categorías
- Las categorías no son jerárquicas
- La imagen es obligatoria

---

## 5. Requerimientos Funcionales

1. El sistema debe mostrar un listado de productos en formato de tarjetas.
2. Cada tarjeta debe incluir imagen, nombre y precio.
3. El sistema debe permitir buscar productos por nombre.
4. El sistema debe permitir filtrar productos por una categoría.
5. El sistema debe permitir combinar búsqueda por nombre y filtro por categoría.
6. Los productos deben mostrarse ordenados alfabéticamente.
7. El catálogo debe mostrarse de forma parcial para facilitar la navegación.
8. Si no existen productos que coincidan con los criterios, debe mostrarse el mensaje: "No se encontraron productos".
9. Todos los productos deben cargarse desde un archivo JSON.

---

## 6. Requerimientos No Funcionales

- El sistema debe ser de solo lectura para el usuario final.
- El acceso al catálogo debe ser público y sin restricciones.
- El archivo JSON debe ser lo más simple posible.
- La estructura debe permitir evolución futura sin romper el modelo actual.
- La experiencia de navegación debe ser clara y fluida.
- El comportamiento del catálogo debe ser predecible y consistente.

---

## 7. Experiencia de Usuario (UX Mínimo Aceptable)

- Visualización clara y ordenada del catálogo.
- Interacciones simples e inmediatas.
- Feedback visual ante búsquedas sin resultados.
- Sin flujos complejos ni pantallas adicionales.

---

## 8. Supuestos y Restricciones

- El catálogo inicial tendrá entre 100 y 300 productos.
- Las categorías están definidas previamente.
- El mantenimiento del catálogo lo realiza una sola persona.
- No se requiere soporte multi-idioma ni multi-moneda en el MVP.

---

## 9. Evolución Futura (No implementado, pero considerado)

- Incorporación de vista de detalle del producto.
- Nuevos filtros (precio, etiquetas, disponibilidad).
- Integración con pedidos o carrito.
- Panel de administración.
- SEO y analíticas.

Estas funcionalidades **no forman parte del MVP**, pero el análisis actual evita decisiones que impidan su implementación futura.

---

## 10. Definition of Done (MVP)

El MVP se considera completo cuando:
- El catálogo es accesible públicamente.
- Los productos se cargan correctamente desde el JSON.
- Se muestran tarjetas con imagen, nombre y precio.
- Funciona la búsqueda por nombre.
- Funciona el filtro por categoría.
- Búsqueda y filtro pueden combinarse.
- Los productos se muestran ordenados alfabéticamente.
- El catálogo se muestra de forma parcial.
- Se muestra un mensaje claro cuando no hay resultados.
- No existen funcionalidades fuera del alcance definido.

