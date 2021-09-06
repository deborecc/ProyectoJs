//DOM

//Agrego un h2 al html
let contenedor=document.getElementById("contenedor")
let h2=document.createElement("h2");
h2.textContent="Tu comida elaborada con productos seleccionados"
contenedor.appendChild(h2)
h2.style.color="grey"

//Función que se genera una vez cargado el sitio 
const infoculta=document.querySelector("#info")
infoculta.style.display="none"

$(document).ready(function() {

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
  
  
//Ajax. Traigo información sobre el covid actual en la Argnetina
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
  


