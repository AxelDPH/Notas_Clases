




/*
-Funcion registrar cita 
-Metodos para modificar los arrays (push, forEach, splice)
*/


//Crear un array para almacenar mis pacientes


// la avriable pacintes esta declarada e inicializada(tiene un nombre y tiene un valor, a pesar de que su arreglo esta vacio)

//Los indices del arreglo estan undefined, porque no hay elementos pero si hay espacios disponibles 
let pacientes = [];  //paciente = definido


//funcion para registrar un nuevo paciente 
function registrarPaciente(nombre, edad){
    
    
    //Crear array dentro de otro array 
    //Paso 2. Guardo cada par dedatos (nombre y edad en una variable llamada paciente)
    let paciente = {
        nombre,
        edad,
        citas : []
    };

    //agregar paciente al array 
    //Paso 3. Ya que tengo el par de datos le hago un push a mi array para guardar al paciente 

    pacientes.push(paciente);
    return paciente;
}
console.log("Felipe 'amante numero 1' de los chilaquiles");


//funcion para registrar ciitas de un paciente 

function registrarCita(paciente, fecha, hora){

    paciente.citas.push(
        {
            fecha, 
            hora
        }
    );
}


//  Funcion para mostrar la informacion del paciente con su cita

function mostrarInfoPaciente(paciente){
    console.log("Nombre del paciente:" + paciente.nombre);
    console.log("Edad del paciente" , paciente.edad);//31
    console.log("Citas registradas: ");

    //forEach para imprimir citas
    paciente.citas.forEach((cita, indice)=>{
        console.log("Indice: " + indice + "Fecha: " + cita.fecha + "Hora: " + cita.hora)
    });
}

//Funcionamiento del forEach anterior 
// Definir una variable temporal llamada cita y otra variable temporal llamada indice
//Cada que se ejecuta el forEach, busca y encuentra una cita, asigna esa informacion a las variables temporales e imprime la informacion

//Vuelve a buscar y encontrar otra cita, y reasigno esa informacion a las variables temporales



//Registrar un paciente desde la invocaion de la funcion registrarPaciente 
let paciente1 = registrarPaciente("Felipe", 31);
let paciente2 = registrarPaciente("Naruto",20);
let paciente3 = registrarPaciente("Simi",20);

//Registrar la cita de un paciente dese la invocacion de la funcion registrarCita
registrarCita(paciente1, "2023-09-12", "1:00 PM");


//Mostrar informaciondel paciente 
mostrarInfoPaciente(paciente1);
mostrarInfoPaciente(paciente2);
mostrarInfoPaciente(paciente3);


/*
ForEach

Es un metodo de arrays, que tienen como objetivo iterar



Generalmente el for each se utiliza para imprimir infromacion del arreglo 

Sintaxis ForEach 

array.forEach(funtion(elemnto, indice, arreglo))

-elemento: el elemento actual del arreglo que se esta procesando 
-indice: la posicion del elemnto actual en el array
-arreglo: el array que se esta corriendo

Ejemplo del supermercado 

-elemento: producto que compre y que esta en el carrito
-indice: la posicion de ese producto 
-arreglo: carrito el super

*/


let carritoSuper = ["manzanas", "papitas", "huevo", "jabon de trastes", "pan"];

//Oye JS, para acda elemento del tipo "producto" que tenga una posicion dentro del arreglo llamado "carritoSuper, vas hacer algo"

carritoSuper.forEach (function(producto, indice){
    console.log("Producto: " + producto + "con la posicion: " + indice);
});