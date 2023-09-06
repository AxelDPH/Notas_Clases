console.log("hola mundo");



/** Flujo de control
 

Cuando hablamos de flujo de control hablamos del orden en el que se ejecutan las instrucciones de nuestro progema (arriba/abajo, izq/der). Estas instrucciones pueden ser una funcion, un console.log, un ciclo, etc.

la importancia que tiene el control de flujo radica en la posibilidad de poder ejecutar cosas o instrucciones dependiendo de una condicional (un elemento o instruccion detonante)



condicionales

    las condicionales son palabras reservadas que nos permiten evaluar si una condicion se cumple o no, bajo ciertos criterios (estipulados por el programador).
    las respuestas o salidas esperadas siempre partiran de un true o un false 


Tengo la camisa limpia?
si:voy a la fiesta
no: me quedo en casa
 


Tengo una variable
si: ejecuto la linea 57 de mi codigo
no: ejecuto la linea 80 de mi codigo





condicionla if (si)

If nos sirve para validar si una condicion se cumple o no. Si se cumple, entonces ejecutamos un bloque de codigo que esta dentro del if . Si np se cumple, entonces no hacemos nada 
Nota: Es la condicional mas sencilla, pero la mas limitante porque solo nos da una opcion.



if (condicion){
    //bloque de codigo que se ejecuta si la condicion es verdadera (se cumple)
}
 */


//Ejemplo: Felipe va a ir a una fiesta y necesita tener una camisa favorita limpia para poder ir 

if (comisaLimpia = true){//siempre tiene que ser true para que ejecute el codigo
    console.log("felipe va a la fiesta")
}


/*
else (de otro modo, de lo contrario, si no)



if (condicion detonante){
    //bloque de condigo que se ejecuta si la condicion es verdadera
} else{
    //bloque de codigo que se ejecuta si la condicion es false
}

*/


if (camisaLimpia = false){
    console.log("Felipe va a la fiesta ");

} else console.log("Felipe se queda en su casa hacer la lloracion");//false 




/*
else if 


Esta condicion nos ayuda con mas opciones y mas detonantes, para tener muchas posibilidades en el mismo codigo. para lograr esto, vamos a unir el else con el if.

if (condicion detonante){
    //bloque de codigo si la condicion es verdadera
} else if (condicion detonante 2){
    //bloque de codigo si la condicion 1 es falsa y la condicion 2 es verdadera
} else {
    //bloque de codigo si las condiciones son falsas
}



*/

/*Ejemplo 2: felipe tiene hambre, quiere chilaquiles verdes



if (hambre = true ){
    console.log("Felipe va a comer");
} else if (chilaquilesVerdes = true){
    console.log("Felipe come chilaquiles");
} else {
    console.log("Felipe no come y se pone tristes");
}
*/

//Ejemplo 3: Escribe un programa que me muestre 3 mensajes diferentes. El primer mensaje se muestra si son las 13:00 hrs y debra imprimir "vamos a descanso". El segundo mensaje se muestra si son las 14:30 hrs y debera imprimir "vamos a comer". El tercer mensaje se muestra si no se cumple nada de lo anterior y debera imprimir "lo siento mi ciela, seguimos programando"




// Prompt es una forma de ingresar adtos y poder hacer uso de ellos

//alert ("Hola Generation");


let hora = prompt("Hola dame un numero");


//let hora = 17; antes del prompt

if (hora == 13){
    console.log("vamos a descanso");
} else if (hora == 14){
    console.log("vamos a comer");
} else {
    console.log("lo siento mi ciela, seguimos programando");
}



/*
Switch (Cambiar o intercambiar / Segun el caso )

Esta condicion nos permite hacer multipples opereciones y tomar decisiones en funcion de la opcion deseada (estado de la variable)

Evalue una expresion comparando el valor de una variable con la expresion o caso y ejecuta las declaraciones asociadas con ese caso, asi como los casos que siguen.

Elementos principales del switch: un valor a evaluar, un detonante para cada caso, una salida para cada caso y una salida en general


expresion con un valor 

switch (expresion){
    caso 1:
    //bloque de codigo que se ejecuta si la opcion seleccionada es igual a 1
    break;
     caso 2:
    //bloque de codigo que se ejecuta si la opcion seleccionada es igual a 2
    break;
     caso 3:
    //bloque de codigo que se ejecuta si la opcion seleccionada es igual a 3
    break;

    default:
        // bloque de codigo que se ejecuta si ninguna opcion coincide 
}

*/





//Elevador Switch
let pisoSwitchOriginal = prompt("A que piso vas?");
console.log(typeof(pisoSwitchOriginal));
pisoSwitch = parseInt(pisoSwitchOriginal);
switch (pisoSwitch){
    case 1:
    console.log("llegaste a piso 1");
    break;
    case 2:
    console.log("llegaste a piso 2");
    break;
    case 3:
    console.log("llegaste a piso 3");
    break;
    case 4:
    console.log("llegaste a piso 4");
    break;
    case 5:
    console.log("llegaste a piso 5");
    break;

    default:
        console.log("opcion no valida")
}





//Fubciones aplicables a un consultorio dental 

// Funcion calcular costo de una consulta (condicionales)


let tipoServicio;
let tiempoConsulta;
let emergencia;
let promocion;
let clienteFrecuente;
let costo;

function calcularCostoConsulta(tipoServicio, tiempoConsulta, emergencia, promocion, clienteFrecuente){
    tipoServicio = "Extraccion";
    tiempoConsulta = 120;
    emergencia = true;
    promocion = .10;
    clienteFrecuente = true;
    costo = 5000;
    promocionClienteFrecuente = .10;


    //Calcular el costo total (antes de validar si es cliente frecuente )
    let costoTotal = costo - promocion;

    //condicional para saber si agrego otra promocion por ser cliente frecuente 

    if (clienteFrecuente == true);

}


//Un ejemplo mas sencillo
function calcularCostoConsultaDos (duracionMinutos, costoPorMinuto, clienteFrecuente ){
    let costoTotal = duracionMinutos * costoPorMinuto

    if (clienteFrecuente){
        costoTotalConDescuento = costoTotal * .9;
    }

    return costoTotalConDescuento;
}

console.log(calcularCostoConsultaDos(45, 15, true));

//console.log("El costo total de la consulta que duro" + duracionMinutos + )






//EJERCICIOS CONSULTORIO   05/09/2023


function mayorEdad(edad) {
    if (edad >= 60) {
        console.log("Bienvenido, descuento por persona de la 3era edad!");
    } else if (edad <= 18) {
        console.log("Es necesario ser mayor de edad para consultar, por favor venir acompañado de un tutor. ");
    }  else {
        console.log("Bienvenido!")
    }
}
//////////////////////

function tratamiento (alergia){
    if (alergia == 1){
        console.log("Contestar el formulario de alergias");
    } else {
        console.log("Omitir formulario de alergias");
    }
}

let edad = 25;



function condicion(){
    let opcionServicio = parseInt(prompt("¿Que tipo de tratamiento prefieres? \n 1. Evaluación y planificación de diseño de sonrisa (Gratis) \n 2. Limpieza dental \n 3. Extracción simple"));

    switch (opcionServicio){
        case 1:
            let edad1 = parseInt(prompt("¿Cuantos años tienes?"));
            mayorEdad(edad1);
            let alergia1 = parseInt(prompt("¿Cuentas con alguna alergia? \n 1. Si \n 2. No"));
            tratamiento(alergia1);
            break;

        case 2:
            let edad2 = parseInt(prompt("¿Cuantos años tienes?"));
            mayorEdad(edad2);
            let alergia2 = parseInt(prompt("¿Cuentas con alguna alergia? \n 1. Si \n 2. No"));
            tratamiento(alergia2);
            break;

        case 3:
            let edad3 = parseInt(prompt("¿Cuantos años tienes?"));
            mayorEdad(edad3);
            let alergia3 = parseInt(prompt("¿Cuentas con alguna alergia? \n 1. Si \n 2. No"));
            tratamiento(alergia3);
            break;

        default:
            console.log("ERROR: No seleccionaste ninguna opcion");
    }

}

condicion();