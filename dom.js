//CLASE DOM

//Agrego un h2 al html
let contenedor=document.getElementById("contenedor")
let h2=document.createElement("h2");
h2.textContent="Tu comida elaborada con productos seleccionados"
contenedor.appendChild(h2)
h2.style.color="grey"







//Clase de productos//

class Productos {
    constructor(nombre, precio) {
      this.nombre = nombre;
      this.precio = precio;
    }
    
  }
  
  //Creo los productos a partir del constructor y los almaceno en un array
  
  let producto=[];

  producto.push(new Productos("Tarta", "100"));
  producto.push(new Productos("Empanada", "50"));
  producto.push(new Productos("Pizza", "150"));


  // producto.forEach(producto=>{

  //   $("#intro").append( `
  //     <p>${producto.nombre}</p>
  //     <p>$${producto.precio}</p>`);
  
  // })
  
//Recorro mis productos/objetos y los muestro en el html, incorporandolos al body



//let intro= document.getElementById("intro")

// producto.forEach(producto=>{

//   let lista = document.createElement("div")

//   let p1=document.createElement("p")
//   p1.textContent= `${producto.nombre}`
//   p1.style.fontSize="12px"
//   let p2=document.createElement("p")
//   p2.textContent=`${producto.precio}`
//   p2.style.fontSize="12px"
//     lista.appendChild(p1)
//     lista.appendChild(p2)

//     intro.appendChild(lista)
// })

//Función que se genera una vez cargado el sitio 
const infoculta=document.querySelector("#info")
infoculta.style.display="none"

$(document).ready(function() {
  console.log('El DOM esta listo');

  $("#stock").click(function(){
     $("#info").fadeIn();
  })

});

const verMenos=document.querySelector("#stock_no")
verMenos.style.display="none"

$(document).ready(function(){

$("#stock").click(function(){

  $("#stock_no").fadeIn();

})

$("#stock_no").click(function(){
 $("#info").fadeOut();
 $("#stock_no").fadeOut();
})
})

$(".pic").mouseenter(function(){
    $(".pic").animate({width:"40%"},"slow",function(){
      $(".pic").animate({width:"30%"},"slow");
    })
  })
  
  
//Clase de Ajax. Traigo información sobre el covid actual en la Argnetina
const miUrl = "https://covid-api.mmediagroup.fr/v1/cases?country=Argentina"

$.get(miUrl,function(resultado,estado){

    if(estado==="success"){
        $("#covid").append(
            `<div>Casos confirmados:  ${resultado.All.confirmed}</div>
            <div>Población total :  ${resultado.All.population}</div>
            <div>Muertes :  ${resultado.All.deaths}</div>`
            
        )
    }
}


)
  


