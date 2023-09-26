/*
Las pruebas unitarias son una parte fundamental de la ingenieria de software, tiene como objetivo verificar la funcionalidad de una unidad de codigo. Vamos a entender por unidad de codigo a la parte mas pequenia que se puede "testear" o probar en una aplicacion, por ejemplo:

    - Ciclos
    - Funciones
    - Metodos
    - Etc.


Realizar pruebas unitarias tiene demasiadas ventajas, ya que nos va a permitir asegurarnos que el codigo funciona segun lo esperado, ademas nos va a ayudar a encontrar errores de forma mucho mas sencilla, para realizar las modificaciones necesarias sin comprometer el codigo.

Tambien nos ayuda a garantizar que el codigo sigue evolucionando o escalando, permitiendo que las caracteristicas anteriores sigan funcionando y no se "rompan" con los nuevos cambios

*/

// Escenario ficticio
/*
function promedio (cal1, cal2, cal3){
    let promedio = (cal1 + cal2 + cal3) /3;   //forula basica para calcular un promedio

    //ciclo pora calcular aprobado o reprobado
    if (promedio >=6){
    console.log("Felicidades, aprobaste");
    }else{
    console.log("Necesitas estudiar mas, esta reprobado");
    }
} 

promedio (6, 7, 8);  //promedio 7

*/

//Que pasa si no ingreso los tres calificaciones
//que sucede si una de estas calificaciones es uun valor no numerico ?
//que pasa si una de mis calificaciones es una valor negativo ?


//Creamos una calculadora basica que trabaje con las 4 operaciones fundamentales (suma, resta, multiplicacion, division) paea trabajar con pruebas unitarias

//Suma
function suma (num1, num2){
    return num1 + num2;
}
//Resta
function resta (num1, num2){
    return num1 - num2;
}
//Multiplicacion
function multiplicacion (num1, num2){
    return num1 * num2;
}
//Division
function division (num1, num2){
    return num1 / num2;
}

module.exports = {division, suma, resta, multiplicacion};


/*
Para manejar nuestras pruebas unitarias, utilizamos JEST

    -JUnit (JAVA)
    -NUnit (.Net)
    -pytest (Python)
    -JEST (JS)

JEST es un marco de pruebas de JS mantenido por FB, enfocado a hacer pruebas unitarias de la forma mas simple posible. 

Para poder trabajar con JEST, necesitamos algunas consideraciones:
*/



