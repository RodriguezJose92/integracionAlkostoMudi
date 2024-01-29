/_ codigo integración Mudi _/
Integración de Mudi 3D & AR Commerce

Este script facilita la integración de las funcionalidades de Mudi 3D & AR Commerce en un sitio web en línea. Mudi ofrece experiencias inmersivas como realidad aumentada (AR) y visualización de productos en 3D para mejorar la interacción del usuario con los productos.

Cómo utilizar:
Incluir el Script:

Copia el script proporcionado e inclúyelo en la página de detalles del producto (PDP) de tu sitio web.
Inicialización:

Llama a la función MudiExperience con el nombre como parámetro para inicializar la experiencia de Mudi.
Ejemplo: MudiExperience('nombre de tu tienda');
Funcionalidad:

El script obtiene el SKU (Stock Keeping Unit) del producto desde la página.
Realiza una solicitud al servidor de Mudi para obtener datos del producto.
Si el producto existe en la base de datos de Mudi, crea dinámicamente botones y modales para experiencias de AR y 3D.
La función eventsDataLayer envía datos relevantes a Google Tag Manager (GTM) para seguimiento y análisis.
Eventos Rastreados:

Visualización de botones Mudi: Se activa cuando el usuario ve los botones de Mudi.
Intención de compra Mudi: Se activa cuando el usuario hace clic en el botón "Agregar al carrito".
click BTN QR Mudi: Se activa cuando el usuario hace clic en el botón QR para AR en escritorio.
click BTN 3D Mudi: Se activa cuando el usuario hace clic en el botón 3D en escritorio o móvil.
click BTN AR Mudi: Se activa cuando el usuario hace clic en el botón AR en móvil.
Diseño Responsivo:

El script está diseñado para funcionar sin problemas tanto en escritorio como en dispositivos móviles.
Modales y botones están optimizados para diferentes tamaños de pantalla.
Estilo:

Se inyectan estilos personalizados dinámicamente para mejorar el atractivo visual y el diseño de los elementos de Mudi.
Requisitos:
Token API de Mudi: Asegúrate de tener un token API de Mudi válido, que se utiliza para la comunicación con el servidor.
Google Tag Manager (GTM): El script depende de GTM para el seguimiento de eventos. Asegúrate de tener implementado GTM en tu sitio web.
Notas:
El script verifica errores, como un token API o SKU nulo, y los registra en la consola.
Si un producto no existe en la base de datos de Mudi, se registra una advertencia y la experiencia de Mudi no se inicializa.
Descargo de responsabilidad:
Asegúrate de tener los permisos y acuerdos necesarios con Mudi 3D & AR Commerce antes de implementar este script en tu sitio web. Pueden ser necesarios ajustes según tu implementación y requisitos específicos.

Siéntete libre de personalizar el script aún más según la estructura y el diseño específicos de tu sitio web.
