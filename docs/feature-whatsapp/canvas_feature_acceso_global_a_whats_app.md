# Canvas – Feature Acceso Global a WhatsApp

## 1. Objetivo

Incorporar un acceso global, visible y persistente a WhatsApp que permita a cualquier usuario iniciar una conversación directa con la distribuidora de forma inmediata, reduciendo la fricción de contacto y favoreciendo la conversión del interés generado por el catálogo en consultas comerciales.

---

## 2. Requerimientos Funcionales

- Mostrar un ícono flotante de WhatsApp claramente identificable.
- El acceso debe ser global: visible en todas las páginas actuales y futuras de la aplicación.
- El ícono debe estar disponible tanto en desktop como en mobile.
- Al hacer clic, el usuario debe ser redirigido directamente a WhatsApp (Web o App).
- El chat debe abrirse con un mensaje predeterminado en español.
- El mensaje debe ser editable por el usuario antes de enviarlo.
- Utilizar un único número oficial de WhatsApp de la distribuidora.
- El acceso no debe requerir autenticación ni login.

**Fuera de alcance explícito:**
- Gestión de mensajes dentro de la aplicación.
- Validación del envío del mensaje.
- Métricas, tracking o analíticas.
- Contextualización por producto o categoría.
- Múltiples números de contacto.

---

## 3. Requerimientos Técnicos

- Implementación como componente global y transversal a la aplicación.
- Integración en el layout principal, montado una sola vez.
- Bajo acoplamiento con el dominio del catálogo.
- No modificar flujos existentes del MVP.
- No introducir backend ni lógica del lado del servidor.
- No utilizar estado global ni librerías externas.
- Mantener la estrategia de renderizado existente (SSG).
- Uso de la URL universal de WhatsApp para compatibilidad cross-platform.
- Configuración del número y mensaje como constantes configurables (no hardcodeadas en la UI).
- Respeto estricto de las convenciones y patrones ya utilizados en el proyecto (Atomic Design, separación UI/lógica).

---

## 4. Definition of Done

La feature de Acceso Global a WhatsApp se considera finalizada cuando:

- El ícono flotante de WhatsApp es visible de forma consistente en todas las páginas.
- La redirección a WhatsApp funciona correctamente en desktop y mobile.
- El mensaje predeterminado en español se carga correctamente y es editable por el usuario.
- Se utiliza un único número oficial configurado de forma centralizada.
- La implementación no introduce dependencias externas ni estado global.
- No se altera el comportamiento ni la arquitectura del MVP.
- El componente respeta las convenciones técnicas y de diseño existentes.
- La solución no bloquea evoluciones futuras (mensajes dinámicos, contexto por producto, tracking).

