
//Genero mi clase constructora de producto

class Productos {
    constructor(nombre, precio) {
      this.nombre = nombre;
      this.precio = precio;
    }
    
  }

const producto1=new Productos("Tarta", "100") //Los identifico 
const producto2=new Productos("Empanada", "50")
const producto3=new Productos("Pizza", "150")

const productos=[]

productos.push(producto1)
productos.push(producto2)
productos.push(producto3)

console.log(productos) 

//Constante para almacenar los valores en el LocalStorage
const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };

guardarLocal("listaProductos", JSON.stringify(productos)); //Guardo mi Array completo , pasando los objetos

const span=document.getElementById("span")
      let contador=0 //contador para la suma
      let contador2=0  //contador para la resta
      
      const btnAumentar=document.querySelector(".btn")
      btnAumentar.addEventListener("click",respuestaClick)
      

      function respuestaClick(){
         

          btnDisminuir.style.display="block" //Aparece el botón para disminuir la cantidad una vez que se selecciona el producto
          console.log("me diste click")
          contador ++ //incrementa 
          span.textContent=contador
          let suma= (producto2.precio)*contador  //tomo el valor de mi producto en el array y lo multiplico por cantidad
          const precioFinal=document.getElementById("span2")
          precioFinal.textContent=suma  //paso mi resultado final
          console.log(suma) 
          guardarLocal("TotalPagar",suma) //Guardo en el LocalStorage
          guardarLocal("Cantidad",contador)
         
        
         
          
      }
      
      const precioFinal=document.getElementById("span2")
      precioFinal.textContent=localStorage.getItem("TotalPagar")
      //Genero una condición para que el contador y su cantidad permanezcan siempre que sea distinto a 0
      if(contador=>0){
        span.textContent=localStorage.getItem("Cantidad")
      }


      const btnDisminuir=document.querySelector(".disminuir")
      btnDisminuir.addEventListener("click",respuestaClick2)
      btnDisminuir.style.display="none" //oculto el botón
      

      const noDisponible=document.querySelector(".noDis")
      noDisponible.addEventListener("click",mensaje)

      function mensaje(){
        const alerta=  document.querySelector(".card-text1")
        alerta.innerHTML=("!Lo sentimos, producto no disponible!")
        alerta.style.color="black"
        

      }

      //Botón para quitar elementos que se detiene cuando llega a 0
      function respuestaClick2(){
       
        if(contador>=1){
            contador--
            span.textContent=contador
            let resta= (producto2.precio)*contador  //tomo el valor de mi producto en el array
            const restaFinal=document.getElementById("span2")
            restaFinal.textContent=resta //disminuye el total a pagar
            console.log(resta) //prueba
            guardarLocal("TotalPagar",resta) //Guardo en el LocalStorage
            guardarLocal("Cantidad",contador)
        }

      }

      
      