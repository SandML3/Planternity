# Planternity

Plantas.
Muy bonitas, puede que sí, pero... poco se habla de su naturaleza caprichosa.
Algunas son como ese cliente de bar que pide el café con un dedo y tres cuartos de café boliviano, una cucharada de azúcar no refinada de caña, leche de unicornio de la tierra de media y un par de lágrimas de angel.

Estar al día de todos los requerimientos de cada una de las plantas resulta muy complicado, a no ser que una vaya por ahí con enorme libro manuscrito, sucio, trillado y lleno de marcapáginas.
Puede que así descrito suene hasta romántico, pero en absoluto.

Por suerte la tecnología viene a echarnos una mano, y tras decenas de vidas vegetales perdidas surgió la idea de crear una aplicación web que nos permita tener un pequeño inventario de las plantas que tenemos en casa junto con su información más relevante.

El paso definitivo para terminar de convertir mi casa, ahora sí que sí, en una auténtica jungla.

## Presentación de la idea.

**Planternity** es una aplicación web concebida para ayudar en el cuidado de plantas domésticas.
El objetivo es que el usuario pueda realizar las siguientes acciones:

    - *Coleccionar* sus plantas en una lista, quizás separada por estancias.
    - Cada planta se mostrará como una imagen junto con su nombre común y su nombre científico.
    - Cambiar la foto por defecto por una foto de su propia planta si así lo desea.
    - Aquellas que resulten tóxicas para niños o mascotas se mostrarán en el listado acompañadas de un icono que lo indique.
    - Clickar en cada una de estas plantas para ver la información más relevante de ésta (intervalos de riego, cualidades del sustrato óptimo, requerimientos de luz, etc...).
    - Introducir una fecha de último riego, de forma que la aplicación pueda basarse en la información de la planta en cuestión para establecer una fecha orientativa del próximo reigo.
    - Compartir los eventos que considere más importantes con google calendar, de forma que pueda configurar avisos si lo considera oportuno.
    - Filtrar sus plantas por género, nombre, toxicidad y requerimientos de luz y agua.
    - Consultar una sección de contenido estático con información relativa a las enfermedades más comunes de las plantas domésticas y posibles soluciones.

Una vez implementadas estas funcionalidades, podría plantearse incluir la posibilidad reconocimiento de imágenes, de forma que el usuario pueda saber el nombre de su planta a través de una foto, así como medir la lumnosidad de una estancia concreta a partir de una foto de la misma.

## Objetivos personales.

El objetivo de este proyecto es afianzar e incrementar mis conocimientos como web developer en los siguientes campos:

    1. Maquetación Web: HTML semántico y CSS (SASS) sobrio y con algunas animaciones para mejorar la experiencia del usuario.
    2. JavaScript y React para la interactividad de las secciones dinámicas de la aplicación web.
    3. Llamadas a API.
    4. Potenciar las habilidades backend mediante el uso de node JS, Express JS y SQL para la creación de una base de datos propia con la información de cada planta.
    5. Depurar la autoorganización y el desglose de metas relativamente complejas en hitos de menor embergadura que resulten más asequibles.

## Organización.

### Sprint 1:

**Requisitos:**
[] Diseño del layout principal formato mobile.
[] Diseño y/o búsqueda del material gráfico necesario.
[] Elección de paleta de colores.
[] Primera aproximación de a la versión responsive.

**Duración estimada:** 15h.
**Prototipado:**

<!-- Insertar imagen del esquema iniciar de la página -->

**Feedback:**
Para valorar:
*Interfaz intuitiva.
*Responsive adecuado.
\*Legibilidad.

### Sprint 2:

**Requisitos:**
[] Crear una base de datos con información de 5 o 6 plantas, suficiente para tener material para maquetar los listados, y los detalles de casa planta.
[] Crear y configurar la API.
[] Implementar la función de filtrado sobre la lista de plantas.
[] Maquetar detalles de la planta.

**Duración estimada:** 20h.

**Feedback:**
Para valorar:
*Correcto funcionamiento de los filtros.
*Funcionamiento del servidor.
\*Peticiones a la API.

### Sprint 3:

**Requisitos:**
[] Estimar eventos de riego.
[] Compartir eventos con Google Calendar.

**Duración estimada:** 20h.

**Feedback:**
Para valorar:
*Sugerencias de próximos eventos (riego, fertilización...etc)
*Eventos en Google Calendar.
