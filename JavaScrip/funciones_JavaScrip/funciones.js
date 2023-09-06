//funciones
/*
Una funcion es un bloque de codigo que realiza una tarea  especifica, cuando se le lllama
*Cada funcion de JavaScript es un objeto Funcion 
*/ 
function saludar () {
    console.log("Hola soy una funcion");
} 
saludar();

/** * Las funciones son simplemente objetos especiales con la capacidad adicional de ser invocados (llamados como funciones). Esto significa que puedes asignar funciones a variables, pasarlas como argumentos a otras funciones y devolver funciones desde otras funciones. Esto facilita la creación de funciones de orden superior, como funciones de devolución de llamada y funciones que generan otras funciones. */

//Declarar funciones

/*
*La palabra reservada function, que nos indica que estamos definiendo una funcion.
*El nombre de la funcion , dependiendo de la accion a realizar.
*Un par de parentesis () despues del nombre. Puede contener parametros. En este caso no tenemos ninguno.
*Seguido de un juego de llaves {} para cerra el bloque de codigo. 
*Dependiendo d elas intrucciones dentro del cuerpo de la funcion y del proposito de la misma, se determinasi la funcion retorna un valor.
 */

//llamamos una funcion y le vamos a almacenar un resultado 

function suma(a,b){
    return a+b;
}
var resultado = suma (5,3);   //Almacenar funcion en una variable
console.log(resultado);//funcion 
/*La funcion suma los argumentos (a y b) y devuelve la suma de estos dos valores, luego, llamamos a la fncion y almacenamos el resultado de la variable. */

//Funcion que muestra un mensaje en la consola
function saludar (nombre){
    console.log ("Hola" + nombre + "!")
}
//llamamos a la funcion saludar a alguien 
saludar ("Daniel")//Imprime el saludo 
/*
La funcion saludar toma un argumento (nombre) y muestra un mensaje en la consola. Aunque la funcion no devuelve un vaor explícitamente con return, realiza una accion (mostrar mensaje) cuendo se llama 
*/

//Hoisting
/*
Es fundamental en el entendiemiento de la forma en que se ejecuta nuestro codigo de JS, esto aplica tanto para variables como parte para funciones. Como tal, la traduccio de Hoisting es elevacion, a partir de aquí,  su entendimiento es mucho más intuitivo, lo que hace a grandes rasgos es "elevar" las funciones y variables declaradas dentro del código.
 *Yo puedo invocar una funcion antes de siquiera declararla
 */

 console.log(miVariable);//No da error, pero imprime 
 //"undefined"
 var miVariable= 10;
 //Scope = Alcance, hace referencia al alcance de una variable en nuestro codigo de JS 
 /*
 *Global: quiere decir que se puede utilizar o trabajar con una variable dentro de cualquier parte del codigo
 *var : no es tan recomendado, por el comportamiento de ñla variable y la poca adaptabilidad 
 *let: es preferible e incluso es mas segura de utilizar porque ademas de funcionar de manera global, tambien puede ser utilizada de manera local
 *const: se refiere, por su nombre tan intuitivo, a la palabra constante, esto quiere decir que su valor no puede ser reasignado
 */

 //Variable local
 function funcionConVariableLocal(){
    var mensaje = "Esta es una variableLocal";
    console.log (mensaje)
}
//funcionConVariableLocal ();
//var mensaje = "Hola";
//console.log(mensaje);

/* * En este ejemplo, la variable mensaje se declara dentro de la función funcionConVariableLocal. Es una variable local porque solo es accesible dentro del ámbito de esa función. Si intentamos acceder a ella fuera de la función, obtendremos un error. */ 

//Variable Global
var mensajeGlobal = "Esta es una Variable Global"

function funcionConVariableGlobal(){
    console.log(mensajeGlobal);
}
funcionConVariableGlobal();//la estamos llamando

/**En este ejemplo, la variable mensajeGlobal se declara fuera de cualquier función, lo que la convierte en una variable global. Esto significa que es accesible desde cualquier parte del código, tanto dentro como fuera de la función funcionConVariableGlobal. */






///////////////////////////////////////
////////////Funciones anónimas///////
/*
*Estas funciones pueden ser declaradas sin un nombre y luego asignadas a variables o pasarse como parametros en otras funciones
*La difeencia principal de estas funcioness es que se declaran sin un nombre

*/
//function(){
  //  console.log ("Hola nuevamente"); //funcion anonima
//}
const saludo = function (){
    console.log("Hola nuevamente");
}
saludo();




////////////////////
////Funciones flecha


/*
*Una forma mas conocida de definir funciones anonimas, Se le llama flecha debido a su sintaxis que utiliza (=>)
*Basicamente, se trata de remplazar la palabra function y añadir => antes de abrir nuestras llaves 
 */

const resta = (a,b) => a - b;
/*
*Esta funcion flecha es una forma mas corta de :
const suma = function (a,b){
    return a - b;
} */
console.log (resta(5,3));