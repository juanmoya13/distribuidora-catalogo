# Reglas para la UI con Tailwind CSS

## Colores y Temas
- Usa colores primarios como `bg-teal-500` y `text-teal-500` para los encabezados y secciones principales.
- Utiliza colores secundarios como `bg-gray-100` y `text-gray-700` para fondos y textos secundarios.
- Asegúrate de mantener un contraste adecuado entre los elementos.

## Tipografía
- Usa clases como `font-sans`, `text-lg`, `text-xl`, y `font-bold` para los encabezados.
- Para los textos descriptivos, utiliza `text-sm` o `text-base` con `font-light`.

## Espaciado
- Utiliza `p-4`, `p-6`, `m-4`, y `m-6` para márgenes y rellenos consistentes.
- Usa `space-y-4` o `space-x-4` para separar elementos dentro de contenedores.

## Diseño de Contenedores
- Usa `container mx-auto` para centrar el contenido.
- Utiliza `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3` para las secciones de productos y recetas.

## Imágenes
- Usa `rounded-lg` para bordes redondeados en imágenes.
- Aplica `shadow-lg` para agregar profundidad a las imágenes.

## Botones
- Usa `bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600` para botones interactivos.
- Agrega `transition duration-300 ease-in-out` para animaciones suaves.

## Encabezados y Navegación
- Usa `flex items-center justify-between` para la barra de navegación.
- Aplica `space-x-4` para los enlaces de navegación.

## Cards
- Utiliza `bg-white shadow-md rounded-lg p-4` para los contenedores de productos y recetas.
- Usa `flex flex-col items-center` para centrar el contenido dentro de las tarjetas.

## Secciones
- Usa `bg-teal-500 text-white py-8` para encabezados de sección.
- Aplica `bg-gray-100 py-8` para secciones secundarias.

## Responsividad
- Usa clases como `sm:text-sm md:text-base lg:text-lg` para ajustar el tamaño de texto según el dispositivo.
- Utiliza `sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3` para ajustar el diseño de las cuadrículas.

## Animaciones
- Usa `hover:scale-105` para animaciones de hover en imágenes y botones.
- Aplica `transition-transform duration-300` para transiciones suaves.

## Iconos y Elementos Decorativos
- Usa `absolute` y `z-10` para posicionar elementos decorativos como imágenes flotantes.
- Aplica `rotate-6` o `-rotate-6` para darle un estilo dinámico a los elementos.

# Reglas para la UI con Tailwind CSS – Extensión Feature WhatsApp

Este documento **no reemplaza** las reglas existentes de UI.
Agrega **reglas complementarias específicas** necesarias para implementar correctamente la *Feature de Acceso Global a WhatsApp*, manteniendo consistencia visual, usabilidad y buenas prácticas.

---

## 1. Elementos Flotantes Globales

* Todo elemento flotante global debe:

  * Tener una única responsabilidad visual.
  * Estar desacoplado del layout del contenido principal.
  * No desplazar ni solapar información crítica del catálogo.

* Usar posicionamiento:

  * `fixed bottom-4 right-4`
  * `z-50` o superior para garantizar visibilidad.

---

## 2. Consistencia Visual con el Sistema Existente

* El acceso a WhatsApp debe respetar:

  * Paleta cromática existente.
  * Escala de sombras y bordes ya definidos.

* No introducir nuevos colores primarios.

* El verde característico de WhatsApp se utiliza **solo en el ícono**, no como color estructural del sistema.

---

## 3. Tamaño, Forma y Jerarquía

* El botón flotante debe:

  * Ser claramente reconocible como acción secundaria.
  * Mantener proporción circular o semicircular.
  * Tener un tamaño suficiente para interacción táctil (mobile first).

* No competir visualmente con CTAs principales del catálogo.

---

## 4. Interacciones y Feedback

* Estados permitidos:

  * Default
  * Hover (desktop)

* Estados no permitidos:

  * Loading
  * Disabled
  * Error

* Usar transiciones suaves ya definidas:

  * `transition-transform`
  * `duration-300`

---

## 5. Accesibilidad Básica

* El botón debe:

  * Ser navegable por teclado.
  * Incluir `aria-label` descriptivo.
  * Tener área de click amplia.

---

## 6. Responsividad

* El acceso debe:

  * Mantenerse visible en todas las resoluciones.
  * No tapar acciones críticas en mobile.
  * Ajustar spacing en pantallas pequeñas si es necesario.

---

## 7. No Interferencia con el Dominio

* El componente UI de WhatsApp:

  * No debe mostrar información del catálogo.
  * No debe variar según estado del filtro o búsqueda.
  * No debe cambiar de posición según la página.

---

## 8. Regla de Simplicidad

* Si una mejora visual no aporta claridad o reconocimiento inmediato del canal, **no se implementa**.
* El diseño prioriza reconocimiento y rapidez por sobre personalización.

