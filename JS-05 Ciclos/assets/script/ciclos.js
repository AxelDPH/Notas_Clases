/*

Condiciones: alterar el orden natural del codigo
estructura de control: controlar la ejecucion del codigo



Ciclos  o bucles (loops)

Tambien conocidos como bucles, son estructuras de control que nos van a permitir ejecutar un bloque de codigo de forma repetida, hasta que se cumpla una condicion especifica

Es importante usar ciclos para automatizar tareas repetitivas

En java script existen los siguientes ciclos:

       -while
       -do while
       -for 



Iterar: proceso de repetir una secuencia de instrucciones 
Estructura de control: herramienta especial para crear algoritmos o programas mas dinamicos y flexibles.


*/

/* While: Ejecuta un bloque de codigo mientras se cumpla una condicion especifica. Este ciclo se repite mientras la condicion sea verdadera, y el bloque de codigo se ejecuta siempre y cuando la condicion se mantenga. la condicion se evoluciona antes de cada iteracion.

while (condicion){
    //codigo que se ejecuta
}


*/
/*
while (miCrushMeQuiere){
    console.log("Sere feliz");
}
*/

/*
Analogia: seguir una receta para preparar sopa


lista de ingredientes:
    -Zanahoria
    -Papas
    -Chayote
    -Limon 
    -Agua
    -Espinaca


Vamos a agregar los ingredientes a la olla mientras tengamos ingredientes disponibles 

paramos cuando ya no tengo ingredientes 
*/


//ejemplo de un consultorio dental 

let capacidadDePacientes = 40;
let paceintesEnConsultorio = 15;

while (paceintesEnConsultorio < capacidadDePacientes){
    console.log ("Seguimos dando servicio")
    paceintesEnConsultorio++;
}


/*
Do Wile (hacer mientras )


//Se jecuta la instruccion, mientras sea verdadero (pedir perdon por ir a la fiesta )



El bucle do while se diferencia del while ya que aqui se ejecuta la instruccion al menos una vez, y luego se pregunta para saber si se sigue ejcutando o no .



do{
    //codigo a ejecutar 

}while (condicion);

Analogia: cuando preparamos un pastel



*/

//Ejemplo de un consultorio dental 

var contadorPaciente = 0;

do{
    var nombre = prompt ("Ingresa el nombre del paciente");
    if (nombre){
        contadorPaciente ++;
    }
}while(contadorPaciente<5);

console.log("Numero total de pacientes: ", contadorPaciente);


/**
 For (para)


 Se utiliza cuando conocemos el numero exacto de iteraciones que vamos a realizar

Consiste de 3 partes fundamentales:

     -Inicializacion: se ejecuta antes de que el bucle comience y se usa para establecer una variable de control (variable de inicio)
     -condicion: es el detonante que verificamos antes de cada iteracion, para saber si se sigue ejecutando o no ( siempre y cuando sea verdadero)
     - expresion de iteracion (contador ): tiene la finalidad de modificar la variable de inicio y poder tener un punto de cierre.

     for (inicializacion; condicion; expresion de iteracion){
        //bloque de codigo a ejecutar 
     }

 */

     //crea un codigo que imprima los numeros del 0 al 4

     for (var valorInicial = 0; valorInicial<5; valorInicial++) {
        console.log(valorInicial);
     }


     //Version mas comercial 

     for (var i=0; i<5; i++){
        console.log(i);
     }


     //consultorio dental registro de citas con un for

     let cantidadDeCitasDiarioas = 5;

     for (let i=1; i<=cantidadDeCitasDiarioas; i++){
        var nombre = prompt ("ingrese el nombre del paciente + i ");

        console.log("paciente con cita " + i);
     }


