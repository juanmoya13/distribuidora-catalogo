# Análisis de Feature – Acceso a WhatsApp

## 1. Contexto general
Esta feature se desarrolla **posterior a la finalización del MVP**, como una funcionalidad incremental. No modifica el core del producto ni sus flujos principales, sino que agrega un **canal de contacto directo** entre el usuario y la distribuidora.

El MVP ya cumple su objetivo principal (catálogo y navegación). Esta feature apunta a **optimizar la conversión de interés en contacto comercial**.

---

## 2. Objetivo de la feature

### Objetivo principal
Permitir que cualquier usuario pueda **iniciar una conversación por WhatsApp con la distribuidora**, de forma inmediata, mediante un acceso visual claro y persistente.

### Objetivos secundarios
- Reducir fricción en el contacto
- Evitar formularios o pasos intermedios
- Aprovechar un canal familiar para el usuario
- Centralizar consultas en un único número oficial

---

## 3. Alcance funcional

### La feature incluye
- Un **ícono de WhatsApp flotante**
- Visibilidad **global** (presente en todas las páginas actuales y futuras)
- Disponibilidad en **desktop y mobile**
- Redirección directa al chat de WhatsApp
- Mensaje predeterminado **en español**
- Mensaje **genérico**
- Mensaje **editable por el usuario antes del envío**
- Uso de un **único número oficial** de la distribuidora
- Acceso sin necesidad de login

### La feature NO incluye
- Gestión de mensajes dentro de la aplicación
- Validación de envío del mensaje
- Métricas o tracking de uso
- Contexto por producto o categoría
- Automatización de respuestas
- Configuración multi-número

---

## 4. Usuarios involucrados

### Usuario final
- Navega el catálogo
- Desea realizar una consulta
- Espera inmediatez
- Reconoce el ícono de WhatsApp como canal de contacto

### Distribuidora
- Recibe consultas en un único canal
- Espera mensajes con intención clara
- No requiere segmentación ni trazabilidad en esta etapa

---

## 5. Experiencia de usuario (UX) – nivel conceptual

1. El usuario navega la aplicación
2. Visualiza el ícono flotante de WhatsApp en la esquina inferior derecha
3. Hace clic sobre el ícono
4. Es redirigido directamente a WhatsApp (web o app)
5. El chat se abre con un mensaje genérico precompletado
6. El usuario puede editar el mensaje antes de enviarlo

No existen confirmaciones intermedias ni mensajes explicativos adicionales.

---

## 6. Decisiones de diseño relevantes

- **Acceso global**: se diseña como un componente transversal a la aplicación
- **Flotante**: asegura visibilidad constante sin interferir con el contenido
- **Mensaje genérico**: reduce complejidad y dependencias con el catálogo
- **Editable por el usuario**: mejora naturalidad del contacto
- **Redirección directa**: prioriza velocidad sobre control

---

## 7. Suposiciones validadas

- Existe un único número de WhatsApp
- El número es personal pero oficial
- El idioma es español
- El usuario no necesita autenticación
- No se requiere medición de uso
- No se espera escalabilidad funcional inmediata

---

## 8. Riesgos y limitaciones

- Mensajes poco claros por parte del usuario
- Saturación del canal de WhatsApp
- Falta de información contextual en las consultas
- Dependencia total de un canal externo

Estos riesgos son **aceptables** dado el bajo costo y bajo impacto estructural de la feature.

---

## 9. Criterios de éxito (a nivel análisis)

La feature se considera exitosa si:
- El usuario puede identificar fácilmente el canal de contacto
- La redirección funciona de forma consistente
- El acceso se mantiene visible en futuras páginas
- No interfiere con la navegación del catálogo

---

## 10. Impacto en el producto

- Feature **transversal**
- Bajo acoplamiento con el MVP
- Alta percepción de valor para el usuario
- Bajo costo cognitivo y funcional

---

## 11. Próxima etapa

Con este análisis completo, el siguiente paso natural es:
- Definir **requerimientos funcionales detallados**
- Establecer **criterios de aceptación (Definition of Done)**
- Luego avanzar a **diseño técnico e implementación**

Este análisis deja completamente cerrado el **alcance funcional y de usuario** de la feature.

