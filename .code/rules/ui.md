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