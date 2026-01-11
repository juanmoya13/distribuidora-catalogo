# OBLIGATORIO:
- Siempre debes leer la carpeta docs para entender el proyecto con su documentación.
- La documentación se debe seguir al pie de la letra.
## Reglas generales de arquitectura de software

### 1. Separación de responsabilidades
- Cada módulo, función o componente debe tener una única responsabilidad clara.
- La lógica de negocio debe estar separada de la capa de presentación.
- La infraestructura no debe filtrar detalles a la lógica de dominio.

---

### 2. Organización y límites arquitectónicos
- La estructura de carpetas debe reflejar capas o dominios, no detalles técnicos accidentales.
- Los límites entre módulos deben ser explícitos y respetados.
- No se permiten dependencias circulares entre capas.

---

### 3. Composición sobre complejidad
- Priorizar composición frente a herencia.
- Evitar abstracciones prematuras o innecesarias.
- Limitar la profundidad de anidación para reducir complejidad cognitiva.

---

### 4. Tamaño y enfoque del código
- Archivos y componentes deben ser pequeños y enfocados.
- Funciones extensas deben dividirse en unidades más simples.
- El código debe ser fácil de leer sin contexto adicional.

---

### 5. Tipado como contrato
- Los tipos e interfaces definen contratos estables entre módulos.
- El tipado debe ser estricto y expresivo.
- Los tipos deben separarse de la lógica de implementación.

---

### 6. Inmutabilidad y flujo de datos
- Preferir estructuras inmutables y funciones puras.
- El flujo de datos debe ser explícito y predecible.
- Evitar mutaciones implícitas o efectos colaterales ocultos.

---

### 7. Manejo explícito de errores
- Los errores deben manejarse de forma explícita y consistente.
- No se permiten fallos silenciosos.
- Los estados inválidos deben ser imposibles o claramente representados.

---

### 8. Validación en los bordes del sistema
- Toda entrada externa debe validarse.
- La validación debe ocurrir lo más cerca posible del origen del dato.
- No confiar en supuestos implícitos sobre datos externos.

---

### 9. Reutilización consciente
- Reutilizar comportamiento, no copiar estructuras.
- Extraer lógica común cuando exista duplicación semántica.
- Evitar acoplamientos innecesarios al reutilizar código.

---

### 10. Convenciones y consistencia
- Usar nombres semánticos y predecibles.
- Mantener convenciones uniformes de archivos, exports y dependencias.
- La consistencia es más importante que la preferencia personal.

---

### 11. Dependencias controladas
- Las dependencias externas deben estar justificadas.
- Evitar dependencias implícitas del entorno o runtime.
- Encapsular librerías externas detrás de interfaces propias.

---

### 12. Lógica de dominio aislada
- La lógica de negocio debe poder ejecutarse fuera del framework.
- El dominio no debe depender de APIs específicas de UI o plataforma.
- Facilitar testeo y evolución independiente del entorno.

---

### 13. Fronteras de ejecución claras
- Diferenciar claramente contextos de ejecución cuando existan.
- No mezclar APIs de distintos entornos sin un límite explícito.
- El código debe declarar sus restricciones de ejecución.

---

### 14. Data fetching y estado
- Centralizar estrategias de obtención y actualización de datos.
- Evitar duplicación de lógica de fetching.
- El estado debe tener una fuente de verdad clara.

---

### 15. Observabilidad y diagnóstico
- El código debe ser fácil de inspeccionar y depurar.
- Los errores deben incluir contexto suficiente.
- Facilitar el seguimiento del flujo de ejecución.

---

### 16. Evolución y mantenibilidad
- El diseño debe facilitar cambios futuros.
- Minimizar el impacto de modificaciones locales.
- Priorizar claridad y mantenibilidad sobre micro-optimizaciones.

---

### 17. Alineación con el framework
- Usar el framework como una herramienta, no como el dominio.
- Respetar su modelo mental sin filtrar detalles al core del sistema.
- Evitar soluciones que contradigan sus abstracciones principales.

---

### 18. Gobernanza del código
- Las reglas de arquitectura deben estar documentadas y versionadas.
- Todo código nuevo debe cumplir las reglas existentes.
- La arquitectura es un contrato vivo, no un documento estático.

# Reglas Generales de Arquitectura – Extensión Feature WhatsApp

Este documento **extiende** las reglas generales de arquitectura existentes.
No modifica ni elimina reglas previas; agrega **criterios específicos** necesarios para integrar correctamente la *Feature de Acceso Global a WhatsApp*.

---

## 1. Features Transversales

* Las features transversales deben:

  * Montarse en un único punto global (layout raíz).
  * No depender de páginas concretas.
  * No conocer el dominio principal.

* No se permite lógica transversal dispersa en múltiples capas.

---

## 2. Aislamiento de Dominio

* La feature WhatsApp:

  * No debe importar tipos, lógica ni constantes del catálogo.
  * No debe reaccionar a estados del dominio principal.

* Cualquier contextualización futura debe agregarse mediante contratos explícitos.

---

## 3. Lógica Pura y Reutilizable

* La construcción de la URL de WhatsApp debe:

  * Ser una función pura.
  * Vivir fuera del componente UI.
  * No acceder a APIs del navegador directamente.

---

## 4. Configuración Centralizada

* Datos como:

  * número de WhatsApp
  * mensaje por defecto

Deben definirse como constantes configurables y no como literales en la UI.

---

## 5. Dependencia del Entorno

* La feature:

  * No debe asumir plataforma (mobile / desktop).
  * No debe ramificar lógica según entorno.

* El comportamiento depende exclusivamente del manejador externo (WhatsApp).

---

## 6. Renderizado y Ciclo de Vida

* El componente:

  * Debe ser compatible con SSG.
  * No debe depender de efectos de montaje para funcionar.
  * No debe generar renders innecesarios.

---

## 7. Manejo de Errores

* No se implementa manejo de errores visual.
* Cualquier error técnico debe:

  * Fallar de forma visible en desarrollo.
  * No romper la navegación del usuario.

---

## 8. Evolución Controlada

* Nuevas capacidades (tracking, multi-número, contexto):

  * Deben implementarse como extensiones.
  * Nunca como modificaciones del contrato base.

---

## 9. Regla de Bajo Impacto

* Ninguna feature transversal puede:

  * Modificar flujos principales.
  * Introducir dependencias globales.
  * Afectar performance del dominio core.

---

## 10. Consistencia con el Proyecto

* La feature debe seguir:

  * Naming conventions existentes.
  * Organización por features.
  * Filosofía de simplicidad del MVP.

---

## 11. Regla de No Escalamiento Prematuro

* No se implementan abstracciones para casos no requeridos.
* El diseño debe ser fácilmente entendible por un desarrollador nuevo.

---

## 12. Cumplimiento Obligatorio

* Toda implementación de la feature WhatsApp debe cumplir:

  * Reglas generales de arquitectura.
  * Reglas específicas de esta extensión.

El incumplimiento invalida la implementación.

