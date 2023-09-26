/*


API de almacenamiento web

No spermite almacenar informacion en nuestro navegador, de dos formas:

   -Local (persistencia de los datos)
   -Sesion (los datos son volatiles)


Tanto el almacenamiento local como el de sesion, proporcionan un area privada para tratar sus datos, esto quiere decir que otros sitios web no pueden acceder a los datos que almacenamos.
 

*/

/*

Almacenamiento Local (localStorage)


La informacion que pongamos en un almacenamiento local se guarda indefinidiamente hasta que sea eliminada por codigo o borrada del navegador.

Casos de uso: articulos de un carrito de compras, guardamos un perfil de configuracion, historial de uso.

*/

//Guardando mi primer dato en localStorage
//LocalStorage.setItem(key, value)

localStorage.setItem("Nombre", "Felipe");
localStorage.setItem("Apellido", "Maqueda");
localStorage.setItem("Edad", "31");

//Guardando un carrito de compras
let carritoComprasFelipe = ["Sabritones", "CocaCola", "Chicles", "Tortillas"];

localStorage.setItem("CarritoCompras", 
carritoComprasFelipe);

//obtener informacion almacenada en mi localStorage

//localSrorage.getItem(key);
let apellido = localStorage.getItem("Apellido");
console.log(apellido);

//recuperando carrrito de compras
let carrito = localStorage.getItem("CarritoCompras");
console.log(carrito);


//borrar un elemento del localStorage
//localStorage.removeItem(key)

localStorage.removeItem("CarritoCompras");



//conocer el largo o longitud del localStorage
//localStorage.length

let longitudLocalStorage = localStorage.length;
console.log(longitudLocalStorage);

localStorage.getItem("apellido", "Gonzalez");
