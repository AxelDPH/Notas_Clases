alert ("hola mundo");
/*
este 
es un 
comentario multiline
*/
/*
var frasco = "pastillas";
var frasco = "pasitas";
var frasco = "shampo";

console.log(frasco);
*/

/*Tipos de datos primitivos y no primitivos

string
number
boolean
undefined
null
symbol
object (no es primitivo)


*/

/*
//string es una cadena de texto, que siempre debe ir entre comillas simplres o dobles
var vaso = "leche";

//number no lleva comillas y se refiere a un numero con el cúal podemos hacer operaciones

var edad = 32;

//Boolean solamente tiene dos salidas que es true or false 
var cuentasPremium = false;

//undefined es un tipo de dato que existe pero que no esta definido o inicializado 
var proximaCita = 20;

//null es algo que tiene definido el valor que llevara pero que no sabemos si lo llevara o no 
*/


//String
var nombrePaciente = "Juan Alberto";
var nombreDoctor = "Dr. Alfonso Lopez Valdez";
var numeroTel = "5521432299"

var Telefono = parseInt (numeroTel);
console.log(Telefono);
console.log(typeof(Telefono));



//number
var edadPaciente = 24;
var capacidadPacientesPorDoctor = 15;

var numeroDePacientes = capacidadPacientesPorDoctor.toString ();
console.log(numeroDePacientes);
console.log(typeof(numeroDePacientes));

/*
//boolean
var requiereAcompanante = edadPaciente < 18;
var doctorDisponible = False;

//undefined
var telefonoOpcional;
var citaUrgente;

//null
var apellidosPaciente = null;
var correoElectronico = null;
*/


/*

//ejemplo para saber que tipo de dato tenemos 
var edad = "31";
var peso = 66;

console.log(typeof(edad));

//typeof es una palabra reservada que nos ayuda a saber que tipo de dato tenemos

//  var es una variable con alcance global (tiene mayor alcance)
//let es una variable con alcance local (solo se utiliza dentro de un bloque de codigo)


// const es una constante, es decir que es una variable no cambia 


//cambiar una variable number a una variable string
var pesoCadena = peso.toString();   //Aqui hace el cambio 
console.log (pesoCadena);   //aqui imprime el valor de la variable
console.log(typeof(pesoCadena));  //aqui imprime que tipo de dato tenemos para ver si si se hizo el cambio 



//cambiar una variable string a variable number
var edadNumero = parseInt(edad);
console.log (edadNumero);
console.log (typeof(edadNumero))
*/


