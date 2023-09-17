console.log("Estoy aqui");



/*
Operador 

Un elemento que nos permite realizar una operacion entre dos o mas elementos

-Operador aritmetico (*,-,+,/)
-Operadores de asignacion (=,==,=== / asignacion, igualdad, igualdad estricta)
-Operadores logicos (&&.||, !)
-Operadores de comparacion (<,>, <=, >=, ==, ===)


*/

/*Operadores aritmeticos 

Son operadores que nos permiten tomar valores numericos como sus operandos y retornar un valor numerico unico. Corresponden a operaciones matematicas.

suma (+)
resta(-)
multiplicacion (*)
residuo / modulo (%)
division(/)
exponenciacion (**)
incremento (++)
decremento (--)


*/

let numeroUno = 10;
let numeroDos = 2;
let numeroTres = "5";

//opeaciones 
suma = numeroUno + numeroDos; //12
resta = numeroUno - numeroDos; //8
multiplicacion = numeroUno * numeroDos; //
division = numeroUno / numeroDos;
residuo = numeroUno % numeroDos;
exponenciacion = 10 ** 2; //es obsoleto por que ya hay un metodo para esto

//Impresion del valor con incremento 
console.log("Valor del numeroUno antes del incremento", numeroUno);

//NOTA : cuando usamos incremento el valor se reasigna (suma y reasigna en la misma operadion)
incremento = numeroUno++; //11
decremento = numeroDos--; //1
console.log("Valor del numeroUno despues del incremento", numeroUno);

//incremento de 10 en 10 
numeroUno += 10; //20 


//impresiones ne pantalla 
console.log("Suma de 10 + 2", suma);
console.log("Suma de 10 + 2 ", numeroUno + numeroDos);
console.log("Suma de 10 + 2 ", 10 + 2);

console.log("Resta de 10 - 2 ", resta );


/*
Operadores de comparacion 

Operadores que nos permiten comparar dos datos y al hacerlo obtendremos un valor booleano (true o flase)

- mayor que (>)
- menor que (<)
- mayor o igual que (>=)
- menor o igual que (<=)
- igual (==)
- estricatmente igual (===)
- no es igual (!=)
- no es estrictamente igual (!==)

igual (==)
Sirve para comparar que dos valores sean iguales

*/

let numeroComparacion1 = 23;
let numeroComparacion2 = 13;
let numeroComparacion3 = 13;
let numeroComparacion4 = "13"

// 13 == "13"   //true
// 13 === "13"  //false

// 23 > 12 true
//23 < 12 false

if (edadFelipe >= 18){
    console.log("Puedes ir a la pachangona");
} else {
    console.log("te quedas en casa");
}

//Dos negaciones es una afirmacion 
//!vamos a cenar (no vamos a comer)
//!no me gusta java (no no me gusta java) (no * no = si )
//   (!) el signo de admiracion quiere decir "no" 



/*
Operadores de asignacion

Son los operadores que utilizan para asignar un valor a una variable. Se usa el operador =

let edad = 31;
let saldo = 0;

*/



/**
 Operadores logicos

 Nos devuelven un resultado apartir de que se cumpla o no una condicion, el resultado es booleano (true o falso)

    -AND &&: Sirve para determinar si dos expresiones son verdaderas. si ambas son verdaderas, el resultado es verdadero. Si alguna de ellas es falsa, todo el resultado es falso. si ambos son falsas, todo es falso.



 */

    let tengoUnCrrush = true;
    let miCrushMeQuiere = true;

    if (tengoUnCrrush && miCrushMeQuiere){
        console.log("Estoy feliz");
    }else{
        console.log("haganse a un lado me quiero automorir")
    }



    /**
       -OR ||: sirve para determinar si dos expresiones son falsas. Si cualquiera de las dos afirmaciones es verdad, todo es verdadero. Si los dos son falsos, todo es falso.
     */

       if (hayChilaquiesVerdes || hayCarneEnSuJugo){
        console.log("Felipe desayuna chido");
       }else {
        console.log("felipe no desayuna chido");
       }


       /*
       NOT (!): Regresa lo contrario de lo que evaluamos
       
       */

       //Este codigo esta incompleto puede causar errores (explicacion de anidacion de operadores )
       let escenario1 = (edadFelipe >= 18 && saldoFelipe = !0);
       let escenario2 =(edadFelipe >=18 && amigosQueInviten = true);

       if (escenario1 || escenario2){

       }






//suma (+) se utiliza para sumar dos numeros
let resultado = 5 + 3; // el resultado tendra el valor de 8

//Resta (-) se utiliza para restar un numero de otro 
let resultado1 = 10 - 4; //el resultado contendra el valor de 6

//Multiplicacion (*) se utiliza para multiplicar dos numero
let resultado2 = 6 * 3; //el resultado contendra el valor 18

//  Division (/) se utiliza para dividir un numero por otro. La division por cero produce un valor especial llamado "infinity" (infinito)
let resultado3 = 15 / 3; //resultado contendra el valor 5 

//Modulo (%): se utiliza para obtener el resto de una division entre dos numeros  
let resultado4 = 10 % 3; //resultado contendre el valor 1 (el resto de 10 dividido por 3 )


//Incremento (++): se utiliza para aumentar en 1 el valor de una variable.
let numero = 5;
numero++; //ahora el numero contendra el valor de 6


//Decremento (--) se utiliza para disminuir en 1 el valor de una variable 
let numero1 = 8;
numero--;   //ahora el numero contendra el valor 7 


//Doble igual = igualdad abstracta 
5 == "5" //true, ya que JavaScript convierte la cadena "5" a un numero antes de la comparacion.


//Triple igual = igualdad abstracta 
5 === "5" //false, porque no son del mismo tipo y los tipos tambien difieren.




let celsius=prompt("dame tu temperatura en grados celsius");

let fahrenheit = (celsius * 9/5 ) + 32;
console.log (celsius + " grados celsius son " + fahrenheit + " grados fahrenheir ");




