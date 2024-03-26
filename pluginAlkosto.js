/** Codigo integración Mudi */

/** Tomamos el valor del SKU de la PDP */
let skuNumber = document.querySelector('.js-ean-pdp').innerHTML;

/** Se hace la petición al servidor Mudi */
async function serverData ({
    token = undefined,
    sku = undefined
  }) {
  
    // Errores
    if (token == null) { console.error('Error Mudi: Token Api Null') ;  return }
    if ( sku == null)  { console.error('Error Mudi: SKU Null') ;  return}
  
    // Respuesta positiva 
    let contentBody = { "skus": [`${sku}_ALK`] }
  
    const req = await fetch ('https://mudiview.mudi.com.co:7443/product/getProductsUrl' , {
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
        'tokenapi':token
      },
      body: JSON.stringify(contentBody)
    })
  
    const jsonResponse = await req.json();
    const finalResponse = jsonResponse.data[0];
  
    return finalResponse;
  
};

/** Si la respuesta es positiva se crean los botones */
function createBtns (url3D , urlAR , urlQR){
  const div = document.createElement('DIV');
  div.classList.add('MudiContainerBtns');
  div.id = 'containerMudiBtns';

  div.innerHTML=`
  <a type="button" id="mudiBtnAr" class="btnMudiARAlk">
       
    <div class="circle-btn">
      <span class="alk-icon-ar-view"></span>
    </div>

   <div class="sect-blue">
    <p>Ver producto en mi espacio<span class="alk-icon-derecha"></span></p>
   </div>

  </a>
  
  <a type="button" id="mudiBtn3D" class="btnMudi3DAlk">
    <div class="circle-btn">
       <span class="alk-icon-3d-view"></span>
    </div>

    <div class="sect-blue">
      <p>Activar interacción en 3D<span class="alk-icon-derecha"></span></p>
    </div>
  </a>`;

  div.querySelector('#mudiBtn3D').addEventListener('click',()=>createModal3D(url3D));
  div.querySelector('#mudiBtnAr').addEventListener('click',()=>createModalAR(urlAR,urlQR));
  
  document.querySelector('.container_new-gallery').appendChild(div);
};

/** Creación del ModalAR */
function createModalAR(urlAR,urlQR){
  const div = document.createElement('DIV');
  div.classList.add('overlayARMudi');
  div.innerHTML=`
  <div class="containerPrincipalMudiModal">

    <div class="headercontainterPrincipalMudiModal">
      <h3 class="headercontainter title"> Ver el producto en realidad aumentada </h3>
      <div class="headercontainterButtonOut"></div>
    </div>
    <hr class="separatorMudi"></hr>

    <section class="principalContentMudi">

      <div class="stepsBystepsMudi">
        <p>Sigue estos sencillos pasos para ver el producto en realidad aumentada:</p>

        <div class="iconInformationMudi">

          <div class="information">
            <div class="iconAlkMudi iconOne"></div>
            <p class="detailInformationMudi">
              <b class="detailStrongMudi">Ubica tu teléfono:</b> apunta tu teléfono al piso o a una superficie plana para ver el producto.
            </p>
          </div>
          <div class="information">
            <div class="iconAlkMudi iconTwo"></div>
            <p class="detailInformationMudi">
              <b class="detailStrongMudi">Interactúa para visualizar:</b> desplaza tu dedo en la pantalla para rotar y acomodar la imagen.
            </p>
          </div>
          <div class="information">
            <div class="iconAlkMudi iconThree"></div>
            <p class="detailInformationMudi">
              <b class="detailStrongMudi">Detalla el producto:</b> aumenta la imagen y controla el zoom arrastrando dos dedos en la pantalla de adentro hacia afuera.
            </p>
          </div>
          <div class="information">
            <div class="iconAlkMudi iconFour"></div>
            <p class="detailInformationMudi">
              <b class="detailStrongMudi">Reestablece la imagen:</b> presiona dos veces la pantalla de tu teléfono sobre el producto para volver al tamaño original.
            </p>
          </div>

          <div class="ARMudiContainer">
            <p class="ARMudiContainerText"> Haz clic en el siguiente botón para vivir la experiencia</p>
            <a href="${urlAR
            }" target="_BLANK" class="ARMUDIContainerInnit">Empezar</a>
          </div>

        </div>

      </div>


      <div class="containerPrincipalQR">
        <p>Escanea el siguiente <b class="detailStrongMudi" >código QR</b> para ver el producto en realidad aumentada.</p>
        <img src="${urlQR}" class="codeMudiQR"></img>
      </div>

    </section>

  </div>
  `;

  document.body.setAttribute('mudiBlock','block');

  div.querySelector('.headercontainterButtonOut').addEventListener('click',()=>{
    document.querySelector('.overlayARMudi').remove();
    document.body.setAttribute('mudiBlock','blank');
  })

  document.body.appendChild(div);
};

/** Crreación del Modal3D */
function createModal3D(url3D){
  const div = document.createElement('DIV');
  div.classList.add('overlay3DModalMudi');
  div.id="overlayModalMudi3D";
  div.innerHTML=`
  <div class="containerPrincipalMudi3D">

    <div class="headerModal3D">
      <h3 class="headerModal3DTitle">Ver el producto en 3D</h3>
      <div class="headercontainterButtonOut"></div>
    </div>
    <hr class="separatorMudi"></hr>

    <section class="contentPrincipalModelMudi">
      <iframe src="${url3D}" class="modelMudi3DAlk"></iframe>
    </section>

  </div>
  `;

  document.body.setAttribute('mudiBlock','block');

  div.querySelector('.headercontainterButtonOut').addEventListener('click',()=>{
    document.querySelector('#overlayModalMudi3D').remove();
    document.body.setAttribute('mudiBlock','blank');
  });

  document.body.appendChild(div);
  
}

/** Se crean los estilos para los elementos*/
function createStyles(companyName){

    let urlStyles ;
    switch(companyName){
      case 'Alkosto':
        urlStyles ='https://cdn.jsdelivr.net/gh/RodriguezJose92/integracionAlkostoMudi@latest/index.css';
        break;
      case 'Ktronix':
        urlStyles = 'https://cdn.jsdelivr.net/gh/RodriguezJose92/integracionAlkostoMudi@latest/index.css';
        break;
      case 'Alkomprar': 
        urlStyles = 'https://cdn.jsdelivr.net/gh/RodriguezJose92/integracionAlkostoMudi@latest/indexAlk.css';
        break;
      default : 
        urlStyles ='https://cdn.jsdelivr.net/gh/RodriguezJose92/integracionAlkostoMudi@latest/index.css'
    }

    const link = document.createElement('LINK');
    link.id='mudiStylesAlk';
    link.type="text/css"
    link.href=urlStyles;
    link.rel="stylesheet"

    document.head.appendChild(link);
};

/** Envío de Data por medio del dataLayer */
function eventsDataLayer(company){

  let OSdevice;

  if(navigator.userAgent.includes('Android')) OSdevice='Android';
  else if ( navigator.userAgent.includes('iPhone') || navigator.userAgent.includes('iPad')) OSdevice="IOS";
  else OSdevice='computador'

  /** Evento de visualización */
  dataLayer.push({
      'event':'Visualización de botones Mudi',
      'valorMudi':1,
      'sku':skuNumber,
      'categoria': document.querySelectorAll('.breadcrumb-alkosto li a')[1] ? document.querySelectorAll('.breadcrumb-alkosto li a')[1].innerHTML :'null',
      'subcategoria':document.querySelectorAll('.breadcrumb-alkosto li a')[2] ? document.querySelectorAll('.breadcrumb-alkosto li a')[2].innerHTML :'null',
      'seccion': document.querySelectorAll('.breadcrumb-alkosto li a')[3] ? document.querySelectorAll('.breadcrumb-alkosto li a')[3].innerHTML :'null',
      'retail':company
  });

  /** Envío de click para medir intención de compra */
  document.getElementById('addToCartButton').addEventListener('click',()=>{
      dataLayer.push({
          'event':'Intención de compra Mudi',
          'valorMudi':1,
          'sku':skuNumber,
          'categoria': document.querySelectorAll('.breadcrumb-alkosto li a')[1] ? document.querySelectorAll('.breadcrumb-alkosto li a')[1].innerHTML :'null',
          'subcategoria':document.querySelectorAll('.breadcrumb-alkosto li a')[2] ? document.querySelectorAll('.breadcrumb-alkosto li a')[2].innerHTML :'null',
          'seccion': document.querySelectorAll('.breadcrumb-alkosto li a')[3] ? document.querySelectorAll('.breadcrumb-alkosto li a')[3].innerHTML :'null',
          'retail':company
      });
  },false);

  /** Envío de interacción AR Desk */
  document.querySelector('#mudiBtnAr').addEventListener('click',()=>{
      dataLayer.push({
          'event':'click BTN AR Mudi',
          'dispositivo':OSdevice,
          'valorMudi':1,
          'sku':skuNumber,
          'categoria': document.querySelectorAll('.breadcrumb-alkosto li a')[1] ? document.querySelectorAll('.breadcrumb-alkosto li a')[1].innerHTML :'null',
          'subcategoria':document.querySelectorAll('.breadcrumb-alkosto li a')[2] ? document.querySelectorAll('.breadcrumb-alkosto li a')[2].innerHTML :'null',
          'seccion': document.querySelectorAll('.breadcrumb-alkosto li a')[3] ? document.querySelectorAll('.breadcrumb-alkosto li a')[3].innerHTML :'null',
          'retail':company
      });
  },false);

  /** Envío de interacción 3D Desk */
  document.querySelector('#mudiBtn3D').addEventListener('click',()=>{
      dataLayer.push({
          'event':'click BTN 3D Mudi',
          'dispositivo':OSdevice,
          'valorMudi':1,
          'sku':skuNumber,
          'categoria': document.querySelectorAll('.breadcrumb-alkosto li a')[1] ? document.querySelectorAll('.breadcrumb-alkosto li a')[1].innerHTML :'null',
          'subcategoria':document.querySelectorAll('.breadcrumb-alkosto li a')[2] ? document.querySelectorAll('.breadcrumb-alkosto li a')[2].innerHTML :'null',
          'seccion': document.querySelectorAll('.breadcrumb-alkosto li a')[3] ? document.querySelectorAll('.breadcrumb-alkosto li a')[3].innerHTML :'null',
          'retail':company
      });
  },false);

};

// function Main
const MudiExperience = async(companyName) => {
  const responseServer = await serverData({token:'BxC9UYtJENQgD5RjDt2A',sku:skuNumber});
  if(!responseServer) return console.warn(`El producto identificado con SKU: "%c${skuNumber}%c" en la base de datos de Mudi, no existe.\n Revise bien los parámetros de construcción; Si está seguro de que el producto cuenta con la tecnología comuníquese con el equipo técnico de Mudi 3D&AR Commerce\n Gracias!`, 'color: red; font-weight: bold;', 'color: initial;');
  else{ createStyles(companyName); createBtns(responseServer.URL_WEB, responseServer.URL_AR,responseServer.URL_QR); eventsDataLayer(companyName) };
};