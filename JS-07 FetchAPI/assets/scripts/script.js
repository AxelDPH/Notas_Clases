/*

Retomando las 
-APIs internas (API DOM, LocalStorage, Drag and Drog): Son todas aquellas APIs que vienen por default en el navegador.

-APIs externas: (Google Maps, FakeStore Api, API Paypal, etc): Son todas aquelllas que tenemos que utilizar de provedores externos.

Ejemplo de la licuadora, donde la licuadora es el cliente, el enchufe es la API y el recurso que se solicita es la electricidad.

Ventajas de utilizar APIs


   -Reestructurar y organizar los sistemas de forma que sean mas sencillos de usar
   -Permiten que los sistemas sean mas robustos
   -Reducen los costos de mantenimiento
   -Permiten que los sistemas sean escalables 



 */


 /*

 Asincronia 

 Por defecto, JS se comporta de una forma sincrona (de arriba hacia abajo, de izquierda a derecha), es decir, utilizamos JS de una forma autobloqueante (si hay error, lo que esta despues de ese eror no se ejecuta)
  */


 //Ejemplo de una operecion sincronica 

//  console.log("Inicia mi operacion sincrona");

//  function dosSincronica(){
//     console.log("Dos");
//  }

//  function unoSincronico(){
//     console.log("Uno");
//     dosSincronico();
//     console.log("Tres");
//  }

//  unoSincronico();
//  console.log("Finaliza mi operacion sincronica");


 //Los casos donde me conviene tener operciones sincronas , son (lectura de arrays, uso de algunos metodos de arrays, condicionales, ciclos, ejecucion de funciones "normales").


 /*


 Asincronia

 Es la capacidad que tiene JS para poder ejecutar funciones que no dependan de otras. Esto nos ayuda a ejecutar ciertos bloques de codigo sin tener que esperar a que termine su ejecucion, para ejecutar otras lineas de codigo. (dejar la carne en ele asador mientras preparo otras cosas en el ejemplo de la cerne asada ) 

  */


 //Ejemplo de JavaScript Asincrono

//  console.log("Inicia mi operacion asincrona");
//  function dosAsync(){
//     console.log("Uno")
//     setTimeout(function(){   //setTime para ejecutar esta funcion despues de 3 segundos  
//         console.log("Dos");
//     }, 3000);
//  }

//  function unoAsync(){
//     dosAsync();
//     console.log("Tres");
//  }

//  unoAsync();
//  console.log("Finaliza mi operacion asincronica")



 /*
 
 Mecanismos para manejar la asincronia 

 Para controlar la asincronia en JS, podemos usar algunos de estos mecanismos 

      -callback: La forma mas clasica de manejar la asincronia, Se le conoce como (llamada de vuelta), basicamente es pasar una funcion como parametro de otra funcion, y se ejecutan una vez que se cumpla la condicion esperada.

      //Metodo .map de los arrays 

      -promesa: son objetos que representan un valor al momento de conectar con el servidor. Como su nombre lo indica una promesa es algo que no sabemos si se va acumplir o no, pero al menos necesitamos saber que hacemos si se cumple o si no se cumple. La ventaja que tienen las promesas, es que si no se anidan, en una sola funcion podemos manejar ambas situaciones.


      Las promesas tienen 3 estados posibles:


         -pending: estado inicial, cuando se crea la promesa, Aqui aun no hay resultados.
         - fullfiled: cuando la operacion asincrona se resulve son exito (resolve)
         - rejected: cuanod la operacion asincrona falla (reject)


      -promesas
      aync/await
 
 */

/*
      //Funcion especial para consumir APIs y manejar promesas

      //instruccion de la conexion a mi servidor 
      fetch("https://fakestoreapi.com/products/1")


      //dos escenarios (obtengo respuesta o no obtengo respuesta)
      .then(datos => { //cuando la promesa se resulve ejecuto esta funcion 
        console.log(datos)
        return datos.json();   //convertir la respuesta 
        

      })

      .catch(error =>{
        console.log("Error, no encontramos el producto");
        console.log(error.message);

          if(error = "Error, no encontramos el producto"){
            console.log("Elige otro producto");
          }
      })
   */


      /*
      Sintaxis del fetch (con promesa)
      
      fetch (url a consumir )
         .then (response=> response.text())  //manejo la respuesta 
         .then (datos=> console.log(datos))  //manejo el dato

         .catch(error => console.log(error));


      */


        //Asigno el fetch a una variable
        const conexion = fetch("https://fakestoreapi.com/products/1");
        //Imprimo la variable (para ver el objeto completo)
        console.log("Este es mi objeto promesa: ", conexion);
        //Referencia a mi fetch para poder usar sus métodos
        conexion
        .then(  //usar el método then para manejar la respuesta (lo relleno con la respuesta)
        function(resultado) {
            console.log("Dentro de esta funcion que maneja la respuesta, encontraras: ", resultado);
            return resultado.json();    //.json() solo vive dentro de las promesas
          }
         )
         .then(  //uso el método then para manejar el producto (lo relleno con info del producto)
        function(producto) {
            console.log("Información del producto: ", producto);
        }
    )
        .catch( //uso el método catch para manejar el error (lo relleno con un error para que la caja no regrese vacía)
        function(error) {
            console.log("Error", error);
        }
    )


let respuestaServidor =  "Felipe de Jesus Maqueda Gonzalez, 31, 2, 1"; //texto plano

//producto como respuesta de un servidor en formato plano (texto)
let productoServidor = {
    "id":17,"title":"Rain Jacket Women Windbreaker Striped Climbing Raincoats","price":39.99,"description":"Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.","category":"women's clothing","image":"https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg","rating":{"rate":3.8,"count":679}
}

//producto como objeto JSON
let productoJSON = {
    id:17,
    title:"Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    price:39.99,
    description:"Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    category:"women's clothing",
    image:"https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    rating:{
        rate:3.8,
        count:679
    }
}

//Revisar información de un objeto con texto plano
console.log(productoServidor.price);

//Revisar información de un objeto tipo JSON
console.log(productoJSON.price);

//


//Objeto JSON que voy a mandar a un servidor
let paciente = {
    nombre: "Felipe",
    edad: 31,
    estatus: "Registrado"
}
console.log(paciente);

//Necesito convertirlo a una cadena de texto para que el servidor lo lea
let pacienteStringify = JSON.stringify(paciente);
//Mandamos al servidor
console.log(pacienteStringify);

//Recibimos del servidor
let pacienteServidor = '{"nombre":"Felipe","edad":31,"estatus":"Registrado"}';
//Necesito convertirlo a un objeto JSON
let pacienteParseado = JSON.parse(pacienteServidor);
console.log(pacienteParseado);

//Si mando un JSON al servidor, tengo que convertirlo con "stringify"
//Si recibo un string del servidor, tengo que convertirlo con "parse"



//Metodo POST para enviar un nuevo producto a nuestra BD de la FakeStoreAPI

fetch('https://fakestoreapi.com/products',{  //endpoint
            method:"POST",   //especificar el tipo de metodo
            body:JSON.stringify(    //instrucciones para serializar el cuerpo de mi solicitud (para la interpretacion del servidor)
                {
                    title: 'Sopa Maruchan Habanero',
                    price: 15.5,
                    description: 'Deliciosa sopa maruchan',
                    image: 'https://media.justo.mx/products/041789001956.jpg',
                    category: 'Sopas Instantaneas'
                }
            )
        })
            .then(res=>res.json())   //metodo para la respuesta (saber que mi producto llego con bien al servidor)
            .then(json=>console.log(json)) //impresion en consola para revisar la info


           /* fetch('https://fakestoreapi.com/products',{ //endpoint
            method:"PUT", //especificar el tipo de metodo
            body:JSON.stringify( //instruccion para serializar el cuerpo de mi solicitud (para la interpretacion del servidor)
                {
                    id: 1,
                    title: inputTitulo.value,
                    price: inputPrecio.value,
                    description: inputDescripcion.value,
                    image: inputImagen.value,
                    category: inputCategoria.value
                }
            )
        })
            .then(res=>res.json()) //metodo para la respuesta (saber que mi producto llego con bien al servidor)
            .then(json=>console.log(json))//impresion en consola para revisar la info */