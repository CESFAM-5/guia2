# CESFAM N°5 — Guía de Autoconsulta
## Documento de Especificaciones del Proyecto

**Última actualización:** Marzo 2026  
**Repositorio:** GitHub Pages (archivoscesfam5-lang)  
**Archivo principal:** `index.html`  
**Estado:** En desarrollo activo — migración de contenidos en curso

---

## 1. Descripción general

Aplicación web móvil publicada en GitHub Pages que reemplaza y mejora la navegación de la Guía de Autoconsulta del CESFAM N°5, actualmente alojada en Google Sites. Diseñada para ser usada principalmente desde smartphones por pacientes del centro de salud.

**URL pública:** `https://archivoscesfam5-lang.github.io/guia-autoconsulta-cesfam5/` *(verificar nombre exacto del repositorio)*

**Tecnología:** HTML + CSS + JavaScript puro. Sin frameworks, sin servidor, sin base de datos. Todo en un solo archivo `index.html`. Costo de operación: $0.

---

## 2. Arquitectura general

La app es un **Single Page Application (SPA)** — una sola página HTML que simula navegación sin recargar. Tres vistas principales accesibles desde pestañas fijas en el header:

- **Buscar** — buscador semántico local (sin API, sin costo)
- **Índice A–Z** — índice alfabético completo con dos tipos de entradas
- **Estado** — estado en tiempo real de los servicios del CESFAM

Adicionalmente: páginas de contenido interno para cada tema migrado, accesibles desde Buscar e Índice A–Z.

---

## 3. Diseño visual

### Fuente
**Plus Jakarta Sans** (Google Fonts) — pesos 300, 400, 500, 600. Similar a Aptos de Microsoft Word. Aplicada en toda la app sin excepción.

### Paleta de colores
```
--verde:        #1a6b4a  (color principal, header, botones)
--verde-claro:  #e6f4ee  (fondos de chips, iconos, highlights)
--verde-medio:  #2d8f63  (hover, links activos)
--texto:        #1a1a1a  (texto principal)
--texto-suave:  #5a5a5a  (texto secundario, metadatos)
--borde:        #dde8e3  (bordes de tarjetas)
--fondo:        #f7faf8  (fondo de página)
--blanco:       #ffffff  (fondo de tarjetas)
```

### Logo
Imagen PNG del logo oficial del CESFAM N°5 incrustada en base64 directamente en el HTML. Fondo blanco, sobre recuadro blanco redondeado en el header.

### Header
- Logo (52×52px) + título "CESFAM N°5" (22px, semibold) + subtítulo "GUÍA DE AUTOCONSULTA" (11px, uppercase)
- Fondo verde oscuro
- Pestañas de navegación en banda inferior del header con indicador activo (línea blanca inferior)
- Header fijo (sticky), altura calculada dinámicamente con JS para ajustar el contenido

---

## 4. Vista: Buscar

### Pantalla inicial
- Ícono de búsqueda + título "¿En qué te podemos ayudar?"
- Texto explicativo
- Grid de chips de consultas frecuentes (botones rápidos con emoji)
- Barra de búsqueda fija en la parte inferior de la pantalla (siempre visible)

### Chips de consultas frecuentes (estado actual)
- 🩺 Sacar hora al médico
- 💊 Retirar medicamentos
- 🤰 Embarazo y matrona
- 💉 Vacunas
- 🔬 Exámenes
- 🚨 Urgencias
- 🦷 Dentista
- 📄 Certificados
- 👶 Control niño sano
- 🧠 Salud mental
- 🗺️ Red de salud (abre mapa)

### Motor de búsqueda
- Búsqueda semántica local, sin API, sin internet requerido
- Normaliza texto (minúsculas, sin tildes, sin caracteres especiales)
- Puntaje por coincidencia: nombre del tema (10pts), tags (5pts), categoría (2pts)
- Bonus por coincidencia exacta de frase (+20pts) y palabras únicas (+3pts cada una)
- Muestra máximo 8 resultados ordenados por relevancia
- Debounce de 200ms para no buscar en cada keystroke

### Resultados
- Botón "Volver al inicio" prominente encima de los resultados
- Header con texto de búsqueda y contador de resultados
- Tarjetas de resultado: ícono de categoría + nombre + categoría + palabras relacionadas + flecha
- Ícono distinto por categoría: Profesional, Servicio, Programa, Examen, Trámite, Información
- Al tocar: si el tema está migrado → abre página interna. Si no → abre Google Sites en nueva pestaña

### Navegación
- Botón atrás del navegador funciona (history.pushState)
- Al tocar pestaña "Buscar" desde otra pestaña → regresa al inicio (limpia búsqueda)
- Botón ✕ en barra de búsqueda → regresa al inicio

---

## 5. Vista: Índice A–Z

### Estructura del índice
Dos tipos de entradas, visualmente diferenciadas:

**Tipo 1 — Entrada directa** (tema con página propia):
- Tarjeta blanca con borde, nombre del tema, flecha →
- Al tocar: abre página interna (si migrado) o Google Sites

**Tipo 2 — Entrada de redirección** (término popular → tema oficial):
- Estilo diferente: texto en cursiva, color más suave, ícono de redirección →
- Ejemplos: "Aborto" → IVE, "Remedios" → Farmacia, "Alcoholismo" → Salud Mental
- Al tocar: va directamente al tema destino

**Tipo 3 — Entrada expandible** (agrupa múltiples subtemas):
- Ejemplo: "Programa Nacional de Salud" → despliega lista de subprogramas
- Cada subprograma es link individual al tema correspondiente

### Navegación por letras
- Banda de botones de letras (A-Z) en la parte superior
- Letras con contenido: botón sólido verde
- Letras sin contenido: borde punteado, color tenue, no clickeable
- Al tocar letra → scroll suave a esa sección

### Datos del índice
La base de datos de temas está en el array `TEMAS` dentro del JS del `index.html`. Cada tema tiene:
```javascript
{
  letra: "A",
  nombre: "Adolescentes y Jóvenes",
  url: "/a/adolescentes-y-jóvenes",        // ruta en Google Sites
  categoria: "Programa",
  tags: "palabras clave para búsqueda",
  migrado: false                             // true cuando tiene página interna
}
```

---

## 6. Vista: Estado

### Servicios y horarios (estado actual)
| Servicio | Horario | Lógica |
|---|---|---|
| CESFAM N°5 — Atención general | Lun-Vie 08:00-20:00 / Sáb 08:00-14:00 | Automático por hora |
| SOME — Sacar y anular horas | Lun-Vie 08:00-20:00 / Sáb 08:00-14:00 | Automático por hora |
| Farmacia | Lun-Vie 08:00-18:00 / Sáb 08:00-13:00 | Automático por hora |
| Laboratorio / Toma de muestras | Lun-Vie 08:00-11:00 | Automático por hora |
| Vacunatorio | Lun-Vie 08:30-16:30 / Sin hora previa | Automático por hora |
| Bodega de Alimentos | Lun-Vie (consultar en mesón) | Automático por día |
| SAMU — Urgencias | Todos los días 24h | Siempre abierto |

**Nota:** El CESFAM N°5 NO tiene SAPU propio. Para urgencias fuera de horario: SAMU 131.

### Banner de emergencias
- Fondo amarillo claro con ícono de advertencia
- Dos botones en la misma línea:
  - 🔴 "Llamar al 131" → `href="tel:131"` — texto e ícono en blanco forzado con `!important`
  - 🟢 "SAPUs cercanos" → abre modal con mapa Google My Maps

### Hora actual
Muestra hora y día en tiempo real usando el reloj del dispositivo del usuario.

---

## 7. Mapa integrado

**Google My Maps:** `https://www.google.com/maps/d/embed?mid=1dgJqn6sC6GM9k_E7qDXLVAuB32H_ric`

Se abre como modal (panel deslizable desde abajo, 75% de pantalla). El iframe carga solo cuando se abre (lazy loading). Se cierra con botón ✕ o tocando fuera del panel.

Accesible desde:
- Chip "🗺️ Red de salud" en pantalla inicial de Buscar
- Botón "SAPUs cercanos" en banner de emergencias (Estado)

**Requisito:** El mapa debe estar configurado como público en Google My Maps.

---

## 8. Páginas de contenido interno

### Estado actual
En construcción. Migración en curso desde Google Sites, en orden alfabético desde la A.

### Estructura de cada página
```
[Header con botón Volver + nombre del índice]
[Badge de categoría]
[Título del tema]
[Fecha de actualización]
[Barra de navegación por anclaje: Descripción | Prestaciones | Requisitos | Acceder | Saber+]
[Contenido completo — texto íntegro, sin truncar]
[Links internos como tarjetas (solo si destino está migrado)]
[Links externos con ícono de "abre en nueva pestaña"]
```

### Reglas de links internos
- Si el tema destino está migrado (`migrado: true`): aparece como tarjeta verde con nombre, descripción y flecha
- Si el tema destino NO está migrado: el link no aparece (no se rompe nada, simplemente no se muestra)
- Nunca mostrar links rotos ni redirigir a Google Sites desde páginas internas

### Navegación desde páginas internas
- Botón "Volver" en header → regresa a donde estaba (Buscar o Índice)
- Barra de anclaje → scroll suave a la sección correspondiente
- Links entre temas → abre la página interna del tema destino (si migrado)

---

## 9. Sistema de componentes reutilizables

**Propósito:** Datos que aparecen en múltiples páginas se definen una sola vez. Al cambiar el dato central, se actualiza automáticamente en todos los lugares donde aparece.

### Componentes por definir (pendiente — fase posterior a migración)
Roles y datos que se repiten entre temas:
- Nombres de profesionales por cargo y sector
- Teléfonos de contacto
- Horarios (ya implementados en Estado)
- Nombres de jefaturas

### Estructura propuesta
```javascript
const DIRECTORIO = {
  // Roles — cada uno independiente aunque hoy los ocupe la misma persona
  trabajadoraSocialRojo: "Nombre Apellido",
  trabajadoraSocialVerde: "Nombre Apellido",
  trabajadoraSocialLila: "Nombre Apellido",
  encargadaGenero: "Nombre Apellido",
  encargadaAdolescentes: "Nombre Apellido",
  directora: "Nombre Apellido",
  // ... etc
}
```

**Importante:** Cada rol es independiente. Cambiar un cargo no afecta a otros aunque sean ocupados por la misma persona.

---

## 10. Panel de administración

**Estado:** Pendiente — se construye al finalizar la migración de contenidos.

**Propósito:** Permitir que la directora u otro funcionario actualice contenidos sin necesidad de conocer código, GitHub ni Claude.

**Formato:** Archivo `admin.html` separado en el mismo repositorio, protegido con contraseña.

**Funciones:**
- Editar texto de cualquier tema migrado
- Actualizar directorio de roles y personas
- Actualizar horarios de servicios
- Ver estado de migración (qué temas están migrados y cuáles no)

**Documento de entrega:** Al finalizar el proyecto se entregará a la dirección del CESFAM un documento de instrucciones simples para usar el panel de administración, sin jerga técnica.

---

## 11. Plan de migración de contenidos

### Estrategia
- Orden: alfabético desde la A
- Contenido: íntegro, sin recortar (decisión editorial deliberada)
- Formato: texto corrido con secciones ancladas, sin acordeones
- Fuente: páginas de Google Sites leídas directamente por Claude vía URL

### Estado de migración
| Letra | Temas | Estado |
|---|---|---|
| A | 11 temas | ⏳ Pendiente |
| B | 2 temas | ⏳ Pendiente |
| C | 13 temas | ⏳ Pendiente |
| D | 3 temas | ⏳ Pendiente |
| E | 11 temas | ⏳ Pendiente |
| F | 3 temas | ⏳ Pendiente |
| G | 2 temas | ⏳ Pendiente |
| H | 3 temas | ⏳ Pendiente |
| I | 10 temas | ⏳ Pendiente |
| J | 1 tema | ⏳ Pendiente |
| K | 1 tema | ⏳ Pendiente |
| L | 3 temas | ⏳ Pendiente |
| M | 5 temas | ⏳ Pendiente |
| N | 3 temas | ⏳ Pendiente |
| O | 3 temas | ⏳ Pendiente |
| P | 9 temas | ⏳ Pendiente |
| R | 3 temas | ⏳ Pendiente |
| S | 4 temas | ⏳ Pendiente |
| T | 8 temas | ⏳ Pendiente |
| U | 2 temas | ⏳ Pendiente |
| V | 4 temas | ⏳ Pendiente |

### Índice con redirecciones (pendiente mapeo completo)
Las entradas de redirección del índice original de Google Sites deben ser mapeadas letra por letra. Captura de la letra A ya obtenida. Resto pendiente.

---

## 12. Reglas editoriales del índice

### Tipos de entradas
1. **Entrada directa:** Tema con página propia. Nombre en estilo normal.
2. **Entrada de redirección:** Término popular → tema oficial. Nombre en cursiva + flecha + nombre del destino.
3. **Entrada expandible:** Agrupa múltiples subtemas bajo un concepto paraguas.

### Ejemplo de entrada expandible (letra P)
"Programa Nacional de Salud" → despliega:
- de la Infancia
- Integral Adolescentes y Jóvenes
- Salud Sexual y Reproductiva
- Salud Cardiovascular
- Salud Mental
- Salud Bucal
- Participación Ciudadana en Salud
- Adulto Mayor Autovalente
- Apoyo a la Identidad de Género, PAIG
- Salud y Pueblos Indígenas PESPI

"Programa Nacional de Inmunizaciones, PNI" → entrada directa separada

---

## 13. Cómo retomar el proyecto en una nueva sesión

1. Abre una nueva conversación con Claude
2. Pega este documento completo al inicio del mensaje
3. Describe lo que quieres hacer a continuación
4. Claude quedará completamente al día

### Para actualizar este documento
- Edítalo directamente en GitHub (botón del lápiz en el archivo)
- O pídele a Claude en cada sesión que agregue las decisiones nuevas

---

## 14. Historial de decisiones importantes

| Fecha | Decisión |
|---|---|
| Mar 2026 | App web independiente en GitHub Pages (no widget de Google Sites) |
| Mar 2026 | Sin chatbot con API — buscador semántico local gratuito |
| Mar 2026 | Fuente: Plus Jakarta Sans (similar a Aptos) |
| Mar 2026 | Logo base64 incrustado en HTML (un solo archivo) |
| Mar 2026 | Texto íntegro en páginas de contenido, sin truncar ni acordeones |
| Mar 2026 | Links internos: solo visibles si el tema destino está migrado |
| Mar 2026 | Componentes por rol (no por persona) para datos que se repiten |
| Mar 2026 | Panel de administración: se construye al finalizar migración |
| Mar 2026 | Migración en orden alfabético desde la A |
| Mar 2026 | CESFAM N°5 no tiene SAPU — eliminado de la sección Estado |
