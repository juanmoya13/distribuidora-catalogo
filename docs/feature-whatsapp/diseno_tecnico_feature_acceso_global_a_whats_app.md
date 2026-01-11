# Diseño Técnico – Feature Acceso Global a WhatsApp

## 1. Objetivo del Diseño Técnico

Definir las decisiones técnicas necesarias para **agregar un acceso global a WhatsApp** dentro del catálogo de productos, respetando la arquitectura existente del MVP, reutilizando **convenciones ya utilizadas** y manteniendo un bajo nivel de acoplamiento.

El diseño prioriza simplicidad, claridad y coherencia con el producto actual, sin introducir complejidad innecesaria ni dependencias externas.

---

## 2. Alcance Técnico de la Feature

### Incluido

- Incorporación de un **acceso visual global** a WhatsApp.
- Componente visible en **todas las páginas actuales y futuras**.
- Redirección directa a WhatsApp Web o App.
- Mensaje predeterminado en español.
- Mensaje editable por el usuario antes del envío.
- Uso de un **único número oficial**.

### Excluido

- Backend o lógica del lado del servidor.
- Estado global o persistente.
- Tracking, métricas o analíticas.
- Contextualización por producto o categoría.
- Gestión de mensajes dentro de la aplicación.

---

## 3. Decisiones de Arquitectura

### 3.1 Enfoque General

La feature se implementa como un **componente transversal**, desacoplado del dominio del catálogo.

- No modifica flujos existentes.
- No introduce nuevas capas.
- No altera la estrategia de renderizado (SSG).

### 3.2 Integración con la App

- El acceso a WhatsApp se monta una sola vez.
- Vive en un **layout global**, siguiendo el mismo criterio que otros elementos persistentes.
- No depende de páginas específicas.

---

## 4. Ubicación Técnica y Convenciones

Se respetan las **convenciones ya utilizadas en el proyecto**:

- Componentes reutilizables y con responsabilidad única.
- Naming claro y consistente.
- Separación entre UI y lógica.

### Clasificación del Componente

- Tipo: **Organismo / Componente Global**
- Responsabilidad: acceso visual + redirección externa

La feature no introduce nuevos patrones arquitectónicos.

---

## 5. Configuración Técnica

### Datos necesarios

- Número de WhatsApp (string)
- Mensaje predeterminado (string)

### Decisiones

- Valores definidos como **constantes configurables**.
- No hardcodeados directamente en la UI.
- Preparados para futura externalización (env / config), sin implementarla ahora.

---

## 6. Flujo Técnico de Interacción

1. El usuario visualiza el ícono flotante.
2. Realiza click sobre el acceso.
3. Se construye la URL de WhatsApp utilizando:
   - número oficial
   - mensaje predeterminado
4. El mensaje se envía como texto precompletado.
5. El navegador redirige a WhatsApp (web o app).
6. El usuario puede editar el mensaje antes de enviarlo.

No existen confirmaciones intermedias ni validaciones adicionales.

---

## 7. Consideraciones Cross-Platform

- Uso de URL universal de WhatsApp (compatible con desktop y mobile).
- En desktop: apertura de WhatsApp Web.
- En mobile: apertura de la app instalada.

El comportamiento depende del entorno del usuario, sin lógica condicional adicional.

---

## 8. Estados de UI

Estados contemplados:

- Estado visible (default).

Estados no contemplados:

- Loading.
- Error.
- Disabled.

La simplicidad del flujo hace innecesarios otros estados.

---

## 9. Impacto en Performance y Renderizado

- No afecta el build estático (SSG).
- No introduce renders adicionales innecesarios.
- No depende de efectos ni listeners globales.
- Costo de performance despreciable.

---

## 10. Restricciones y Convenciones Técnicas

- No usar librerías externas.
- No agregar estado global.
- No modificar lógica del catálogo.
- No romper Atomic Design.
- Mantener bajo acoplamiento.

---

## 11. Consideraciones de Evolución Futura

El diseño permite incorporar, sin refactor mayor:

- Múltiples números de contacto.
- Mensajes dinámicos.
- Contexto por producto.
- Tracking de clicks.

Estas evoluciones no forman parte de la implementación actual.

---

## 12. Definition of Done – Diseño Técnico

El diseño técnico de la feature se considera completo cuando:

- El acceso a WhatsApp está definido como componente global.
- La integración respeta la arquitectura del MVP.
- Las convenciones existentes se mantienen.
- No se introduce complejidad innecesaria.
- El diseño no bloquea futuras evoluciones.

