

//Trabajo en base a productos comestibles , en dónde se le solicitara al usuario que ingrese el producto que desea, y la cantidad.
// En base a su elección se le asignará el valor por cantidad.

const sabores = []; //Array en donde se almacenará los sabores elegidos del producto
let sabor = 0; //Se almacena dentro del arreglo
const producto = prompt("Ingrese el producto que desea comprar \n -Pizza \n -Empanada \n -Tarta"); console.log("Producto: " + producto); //Solicitamos al usuario ingresar el producto 
let cantidad = parseInt(prompt("Ingrese la cantidad de dicho producto")); console.log("Cantidad: " + cantidad); //Solicitamos que ingrese la cantidad



//Clase de productos//

class Productos {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
  suma() {
    this.precio = this.precio * cantidad;
    console.log("Su total a pagar es $" + this.precio);

  }
  
  reproducir(){
    alert("Producto: "+this.nombre+"  Precio por c/u $: "+this.precio);
  }
}

//Creo los productos a partir del constructor

const producto1=new Productos("Tarta", "100");
const producto2=new Productos("Empanada", "50");
const producto3=new Productos("Pizza", "150");



//Función que a partir del producto que ingresa el usario , le pedirá el sabor por cada uno y le sumará el total del valor .


function eleccion(a, b) {

  switch (a) {

    case "empanada":
      
      producto2.reproducir(); //Muestro el producto con sus atributos 

      for (let index = 1; index <= b; index++) {

        let sabor = prompt("Escriba el sabor de su empanada N° " + index);
        sabores.push(sabor); //Asignamos "sabor" al array sabores

      }

      console.log("Los sabores de su empanada son :  \n " + sabores.join("\n"));
      console.log(producto2.suma()); //Llamo a la función suma con el producto que corresponde
      break;

    case "pizza":
      
      producto3.reproducir();

      for (let index = 1; index <= b; index++) {

        let sabor = prompt("Escriba el sabor de su Pizza N° " + index);
        sabores.push(sabor);

      }

      console.log("Los sabores de su pizza son : \n " + sabores.join("\n"));
      console.log(producto3.suma());
      break;

    case "tarta":
      
      producto1.reproducir();

      for (let index = 1; index <= b; index++) {

        let sabor = prompt("Escriba el sabor de su Tarta N° " + index);
        sabores.push(sabor);

      }

      console.log("Los sabores de su tarta son : \n " + sabores.join("\n"));
      console.log(producto1.suma());
      break;


    //Si el usuario ingresa un producto que no es válido
    default:
      return console.log("Producto no válido");
      break;

  }
}

eleccion(producto, cantidad); // Paso por parametro los valores ingresados por el usario a la función










