const propiedadesJSON = [
  {
    name: "Casa de campo",
    description: "Un lugar ideal para descansar de la ciudad",
    src:
      "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
    rooms: 2,
    m: 170
  },
  {
    name: "Casa de playa",
    description: "Despierta tus días oyendo el oceano",
    src:
      "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
    rooms: 2,
    m: 130
  },
  {
    name: "Casa en el centro",
    description: "Ten cerca de ti todo lo que necesitas",
    src:
      "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    rooms: 1,
    m: 80
  },
  {
    name: "Casa rodante",
    description: "Conviertete en un nómada del mundo sin salir de tu casa",
    src:
      "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    rooms: 1,
    m: 6
  },
  {
    name: "Departamento",
    description: "Desde las alturas todo se ve mejor",
    src:
      "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
    rooms: 3,
    m: 200
  },
  {
    name: "Mansión",
    description: "Vive una vida lujosa en la mansión de tus sueños ",
    src:
      "https://st3.idealista.com/news/archivos/styles/fullwidth_xl_2x/public/2020-06/im-191825.jpg?VersionId=NuBIHITYezEYY6xQ60uHlXGNE4TPHP8C&itok=VSdE29sq",
    rooms: 5,
    m: 500
  }
];

// Defino constantes con los elementos del DOM que voy a manipular.

const boton = document.getElementById('boton');
const totalPropiedades = document.getElementById('total');
const tarjetaPropiedad = document.querySelector('.propiedades');

// Función para guardar la información que se sustituirá en el HTML

function tarjetasHTML(atributo) {
  return (`
              <div class="propiedad">  
                <div class="img" style="background-image: url(${atributo.src})"></div>
                <section>
                    <h5>${atributo.name}</h5>
                    <div class="d-flex justify-content-between">
                        <p>Cuartos: ${atributo.rooms}</p>
                        <p>Metros: ${atributo.m}</p>
                    </div>
                    <p class="my-3">${atributo.description}</p>
                    <button class="btn btn-info ">Ver más</button>
                </section>
              </div>`  
  )
    ;
};

// Función para recorrer el arreglo y crear la pantalla principal, sustituyendo elementos del html

function pantallaPrincipal() {
  let html = "";
  for (let propiedad of propiedadesJSON) {
    html += tarjetasHTML(propiedad);
  }
  tarjetaPropiedad.innerHTML = html;
  totalPropiedades.innerHTML = propiedadesJSON.length;
}

// Función para filtrar la busqueda del usuario

function busqueda() {
  let cuartos = document.getElementById('cuartos').value;
  let minMetros = document.getElementById('minimo').value;
  let maxMetros = document.getElementById('maximo').value;
  let total = 0;
  let html = "";
  if (cuartos == 0 || minMetros == 0 || maxMetros == 0) { //Validando que el usuario rellene todos los campos con numero diferentes a cero.
    alert("* Faltan campos por llenar, verifique e intente nuevamente. \n\* Los valores deben ser mayores a cero.");
    return;
  }
  for (const propiedad of propiedadesJSON) { // ciclo que recorre el array y muestra solo los objetos que cumplen con las condiciones del if
    if (propiedad.rooms >= cuartos && propiedad.m >= minMetros && propiedad.m <= maxMetros) {
      html += tarjetasHTML(propiedad);
      total ++;
    }
  }

  if(total==0){ // condición para indicar al usuario que la busqueda no obtuvo resultados
    alert("No existen propiedades que cumplan con tu criterio de busqueda.")
    return (pantallaPrincipal());
  }

  tarjetaPropiedad.innerHTML=html;
  totalPropiedades.innerHTML=total;
}

pantallaPrincipal();
boton.addEventListener('click', busqueda);
