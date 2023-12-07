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
function createBtns (){
    document.querySelector('.gallery-new-container').innerHTML +=`
    <!-- BUTTON VR Y 3D DESKTOP -->
    <div class="buttons-mudi hidden-xs hidden-sm">
      <!-- BUTTON AR -->
      <a type="button" data-toggle="modal" data-target="#vrMudi">
        <img class="img-responsive img-interaction" loading="lazy"
          src="https://media.aws.alkosto.com/ymarketingcolcomercio/Alkosto/2022/mudi/ar-img.svg"
          alt="Ver producto en realidad aumentada" style="height:80px !important"/>
      </a>
      <!-- BUTTON 3D -->
      <a type="button" data-toggle="modal" data-target="#3dMudi">
        <img class="img-responsive img-interaction" loading="lazy"
          src="https://media.aws.alkosto.com/ymarketingcolcomercio/Alkosto/2022/mudi/3d-img.svg" alt="Ver producto en 3D"  style="height:80px !important"/>
      </a>
    </div>

    <!-- BUTTON VR Y 3D MOBILE -->
    <div class="buttons-mudimobile hidden-lg hidden-md">
      <!-- BUTTON AR -->
      <a type="button" data-toggle="modal" data-target="#vrMudimobile">
        <img class="img-responsive img-interaction" loading="lazy"
          src="https://media.aws.alkosto.com/ymarketingcolcomercio/Alkosto/2022/mudi/ar-img.svg"
          alt="Ver producto en realidad aumentada"  style="height:75px !important" />
      </a>
      <!-- BUTTON 3D -->
      <a type="button" data-toggle="modal" data-target="#3dMudimobile">
        <img class="img-responsive img-interaction" loading="lazy"
          src="https://media.aws.alkosto.com/ymarketingcolcomercio/Alkosto/2022/mudi/3d-img.svg" alt="Ver producto en 3D" style="height:75px !important"  />
      </a>
    </div>`;
};

/** Se crean los Modales AR & 3D en versión DESK y MOBILE */
function createModals(){
    document.body.innerHTML +=`
    <!-- MODAL CODE VR Y 3D DESKTOP -->
    <div class="info-desktop hidden-xs hidden-sm">
      <!-- Modal VR -->
      <div class="modal fade js-modalExtendedWarranty" id="vrMudi" tabindex="-1" role="dialog" aria-labelledby="VR"
        aria-hidden="true" data-keyboard="false">
        <div class="modal-dialog modal-dialog__fullScreen modal-mudi">
          <div class="modal-content modal-ktronix">
            <div class="modal-header mHeader-ktr">
              <header class="cart-pop-up__header">
                <div class="sucess-message sucess-message-ktronix">
                  Ver el producto en realidad aumentada
                </div>
              </header>
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
            </div>
            <div class="modal-body warrantyOverlayBody">
              <div class="container container-mudi">
                <div class="col-md-6 border-container">
                  <p class="modal-text">
                    Sigue estos sencillos pasos para ver el producto en realidad aumentada:
                  </p>
                  <div class="infodetails">
                    <div class="icondetail">
                      <i class="alk-icon-celular"></i>
                    </div>
                    <div class="infotext">
                      <p class="textdetail"><strong class="colortext">Ubica tu teléfono:</strong> apunta tu teléfono al piso
                        o a una superficie plana para ver el producto</p>
                    </div>
                  </div>
                  <div class="infodetails">
                    <div class="icondetail">
                      <i class="alk-icon-inicio-sesion"></i>
                    </div>
                    <div class="infotext">
                      <p class="textdetail"><strong class="colortext">Interactúa para visualizar:</strong> desplaza tu dedo
                        en la pantalla para rotar y acomodar la imagen.</p>
                    </div>
                  </div>
                  <div class="infodetails">
                    <div class="icondetail">
                      <i class="alk-icon-conoce-mas"></i>
                    </div>
                    <div class="infotext">
                      <p class="textdetail"><strong class="colortext">Detalla el producto:</strong> aumenta la imagen y
                        controla el zoom arrastrando dos dedos en la pantalla de adentro hacia afuera.</p>
                    </div>
                  </div>
                  <div class="infodetails">
                    <div class="icondetail">
                      <i class="alk-icon-click"></i>
                    </div>
                    <div class="infotext">
                      <p class="textdetail"><strong class="colortext">Reestablece la imagen:</strong> presiona dos veces la
                        pantalla de tu teléfono sobre el producto para volver al tamaño original.</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <p class="modal-text">
                    Escanea el siguiente <strong class="colortext">código QR</strong> para ver el producto en realidad
                    aumentada.
                  </p>
                  <iframe class="img-responsive qrcode" loading="lazy" frameborder="0"
                    src="https://viewer.mudi.com.co/v1/qr/?id=111&sku=${skuNumber}_ALK"
                    alt="Ver producto en realidad aumentada"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Modal 3D-->
      <div class="modal fade js-modalExtendedWarranty" id="3dMudi" mudi="3dContainer" tabindex="-1" role="dialog"
        aria-labelledby="3D" aria-hidden="true" data-keyboard="false">
        <div class="modal-dialog modal-dialog__fullScreen modal-mudi">
          <div class="modal-content modal-ktronix">
            <div class="modal-header mHeader-ktr">
              <header class="cart-pop-up__header">
                <div class="sucess-message sucess-message-ktronix">
                  Ver el producto en 3D
                </div>
              </header>
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
            </div>
            <div class="modal-body warrantyOverlayBody">
              <div class="container container-mudi">
                <iframe loading="lazy" width="100%" height="400"
                  src="https://viewer.mudi.com.co/v1/web/?id=111&sku=${skuNumber}_ALK" frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="">
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- FIN MODAL CODE VR Y 3D DESKTOP -->
    <!-- ------------------------------ -->
    <!-- MODAL CODE VR Y 3D MOBILE -->
    <div class="info-desktop hidden-md hidden-lg">
      <!-- Modal VR -->
      <div class="modal fade right-to-left-modal js-modalExtendedWarranty in" id="vrMudimobile">
        <div class="modal-dialog modal-dialog__fullScreen modal-mudi">
          <div class="modal-content modal-ktronix">
            <div class="modal-header mHeader-ktr">
              <header class="cart-pop-up__header">
                <div class="sucess-message sucess-message-ktronix">
                  Ver el producto en realidad aumentada
                </div>
              </header>
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
            </div>
            <div class="modal-body warrantyOverlayBody">
              <div class="container container-mudi">
                <div class="infodetails-mobile">
                  <p class="modal-text">
                    Sigue estos sencillos pasos para ver el producto en realidad aumentada:
                  </p>
                </div>
                <div class="infodetails">
                  <div class="icondetail">
                    <i class="alk-icon-celular"></i>
                  </div>
                  <div class="infotext">
                    <p class="textdetail"><strong class="colortext">Ubica tu teléfono:</strong> apunta tu teléfono al piso
                      o a una superficie plana para ver el producto</p>
                  </div>
                </div>
                <div class="infodetails">
                  <div class="icondetail">
                    <i class="alk-icon-inicio-sesion"></i>
                  </div>
                  <div class="infotext">
                    <p class="textdetail"><strong class="colortext">Interactúa para visualizar:</strong> desplaza tu dedo
                      en la pantalla para rotar y acomodar la imagen.</p>
                  </div>
                </div>
                <div class="infodetails">
                  <div class="icondetail">
                    <i class="alk-icon-conoce-mas"></i>
                  </div>
                  <div class="infotext">
                    <p class="textdetail"><strong class="colortext">Detalla el producto:</strong> aumenta la imagen y
                      controla el zoom arrastrando dos dedos en la pantalla de adentro hacia afuera.</p>
                  </div>
                </div>
                <div class="infodetails">
                  <div class="icondetail">
                    <i class="alk-icon-click"></i>
                  </div>
                  <div class="infotext">
                    <p class="textdetail"><strong class="colortext">Reestablece la imagen:</strong> presiona dos veces la
                      pantalla de tu teléfono sobre el producto para volver al tamaño original.</p>
                  </div>
                </div>
                <div class="infodetails-mobile">
                  <p class="modal-text">
                    Haz clic en el siguiente botón para vivir la experiencia
                  </p>
                  <a class="button-primary cta-mudi" type="button"
                    href="https://viewer.mudi.com.co/v1/ar/?id=111&sku=${skuNumber}_ALK" target="_blank">Empezar</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Modal 3D-->
      <div class="modal fade right-to-left-modal js-modalExtendedWarranty in" id="3dMudimobile">
        <div class="modal-dialog modal-dialog__fullScreen modal-mudi">
          <div class="modal-content modal-ktronix">
            <div class="modal-header mHeader-ktr">
              <header class="cart-pop-up__header">
                <div class="sucess-message sucess-message-ktronix">
                  Ver el producto en 3D
                </div>
              </header>
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
            </div>
            <div class="modal-body warrantyOverlayBody">
              <div class="container container-mudi">
                <iframe loading="lazy" width="100%" height="500"
                  src="https://viewer.mudi.com.co/v1/web/?id=111&sku=${skuNumber}_ALK" frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="">
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- FIN MODAL CODE VR Y 3D MOBILE -->`;
};

/** Se crean los estilos para los elementos*/
function createStyles(){
    let styleDoc = document.createElement('STYLE');
    styleDoc.innerHTML +=
    `
    div.zoomContainer {
        display: none;
    }

    .gallery-new-container{
        position:relative;
    }

    .buttons-mudi {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-end;
        width: 100%;
        max-width: 630px;
        margin-top: 20px;
    }

    .buttons-mudimobile {
        display: flex;
        justify-content: space-evenly;
        align-items: flex-end;
        align-content: flex-end;
        margin-top: 20px;
        z-index:1;
        position:relative;
    }

    .modal-mudi {
        top: 6%;
        margin: 0 auto !important;
        height: 100%;
    }

    .modal-content {
        border-top-left-radius: 8px !important;
        border-top-right-radius: 8px !important;
    }

    .container-mudi {
        width: 100%;
        max-width: 860px;
    }

    .border-container {
        border-right: 1px solid #e8e8e8;
        padding: 0 20px 0 0;
    }

    .infodetails {
        display: flex;
        max-width: 97%;
        margin: 12px auto;
        align-items: center;
    }

    .infodetails-mobile {
        padding: 10px 0;
    }

    .infodetails-mobile p {
        text-align: center !important;
    }

    .icondetail {
        margin-right: 10px;
    }

    .icondetail i {
        text-align: center;
        margin: 0 auto;
        font-size: 30px;
        background: #f1f1f1;
        padding: 10px;
        color: #1A458C;
        border-radius: 4px;
    }

    .modal-text,
    .textdetail {
        color: #444444;
        line-height: 1.3em;
    }

    .colortext {
        color: #1A458C;
    }

    .qrcode {
        text-align: center;
        margin: 0 auto;
        width: 100%;
        max-width: 300px;
        height: 300px;
    }

    .img-interaction {
        width: 100%;
        height: 75px;
    }

    @media screen and (min-width:550px) {
        .buttons-mudi {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-end;
            width: 190px;
            position: absolute;
            top: 0;
            right: 0;
            z-index: 10;
        }
    }

    @media screen and (min-width:1000px) {
        .modal-mudi {
            top: 20%;
            margin: 0 auto !important;
            height: 100%;
        }

        #vrMudi {
            backdrop-filter: blur(5px);
        }

        [mudi="3dContainer"] {
            backdrop-filter: blur(5px);
        }
    }

    @media screen and (max-width:1023px) {
        .new-container__main-product__pdp-gallery-wrapper .image-gallery__stamps.js-gallery-image-stamps {
            transform: translateY(-65px);
        }
    }
    `;

    document.head.appendChild(styleDoc);
};

