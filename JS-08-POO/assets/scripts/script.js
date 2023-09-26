/*Paradigma
Estructarado
Instancia
Plantilla


Paradigma de programacion


Paradigma = la forma de hacer algo

Paradigma de programacion = la forma de programar, la forma de dar soluciones a problemas que se nos presentan.


Paradigmas de programacion (formas de programar)

    - Programacion imperativa: Basada en instrucciones detalladas a la computadora, ejecutadas en una secuencia determinada (C, C++, Java, Python, Swift, JS)

    - Programacion basada en eventos: Enfocada en la gestion y respuesta de eventos (JS, C#, Python)

    - Programacion declarativa: Explicar lo que necesitamos obtener, mas que como se hace (HTML, SQL)

    - Programacion Orientada a Objetos: Toma ejemplos del mundo real (objetos), comprende sus caracteristicas (propiedades o atributos) y con base en su comportamiento o acciones (metodos), resolvemos problemas reales.

    Clase: Plantillas para crear objetos. Nos ayudan a definir un tipo de objeto y crar instancias (materializacion) de este tipo de objetos.

//Mostrar un objeto similar a este 


let Felipe = {
    nombre = "Felipe";
    apellido =
} 


*/

//Creando mi primera clase

class persona{
    //Propiedades o atribitos de mi clase de forma general
    nombre = "";
    apellido = "";
    edad = 0;
    email = "";
    telefono ="";

    //3. Defino un constructor que tomara los atributos como "material" para la instancia o creacion de mis objetos
    //El constructor es una funcion especial, cuya funcion es la de construir o instanciar objetos
    //al pasar los atributos como parametros, es importante cuidar el orden en como fueron declarados
    constructor(nombre, apellido, edad, email, telefono){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.email = email;
        this.telefono = telefono;
    }



    // 2.   Metodos o comportamientos (funciones)
    //para definir los metodos de mi objeto, ya no utilizo la palabra function 
    hablar(){
        console.log("Hola, estoy hablando...");
        //cierre de motodo hablar 
    }   
    dormir(){
        console.log("ZZzzzzz");
    }
    //cierre metodo dormir
    
    mostrarInfo(){
        console.log("Nombre" , this.nombre);
        console.log("Apellido" , this.apellido);
        console.log("Edad" , this.edad);
        console.log("Email" , this.email);
        console.log("Telefono" , this.telefono);

    }//cierre metodo mostrar info

}//cierre de mi clase persona


/*Instancia de objetos del tipo persona

Sintaxis basica de una instancia

variable nombreObjeto = palabra reservada new nombreClase (parametros o atriutos)


*/

let persona1 = new persona ("Felipe", "Maqueda", 31, "felipemaqueda@gmail.com", "5539828712");
let persona2 = new persona ("Axel", "Pacheco", 23, "axel23@gmail.com", "5521443561");
let persona3 = new persona ("Daniel", "Huerta", 26, "daniel9383@gmail.com", "5572536821");


//Imprimir el objeto completo
console.log(persona1);

//Imprimir un atributo 
console.log(persona1.apellido);

//Invocar el metodo del objeto
persona1.dormir();
persona2.mostrarInfo();
persona2.hablar();

/*
Existen 4 pilares de la POO que nos permiten ampliar las caracteristicas y dotar de funcionalidades y operaciones a nuestro codigo.

    - Herencia
    - Polimorfismo
    - Encapsulamiento
    - Abstraccion


*/


//Creando una nueva clase para aplicar la herencia

class paciente extends persona{

    //1. Definicion de atributos o propiedades
    doctorAtiende = ""; //nombre del doctor que atiende
    historialMedico = ""; //si o no el historial
    alergias = "";  //alergias existentes
  
    //3. Generacion de constructor
    constructor(nombre, apellido, edad, email, telefono, doctorAtiende, historialMedico, alergias){
    super (nombre, apellido, edad, email, telefono); //super indica que traemos cosas de la clase superior 
    this.doctorAtiende = doctorAtiende;
    this.historialMedico = historialMedico;
    this.alergias = alergias;
}

//2. Metodos  

mostrarInfo(){  
        console.log("Nombre: " , this.nombre);
        console.log("Apellido: " , this.apellido);
        console.log("Edad: " , this.edad);
        console.log("Email: " , this.email);
        console.log("Telefono: " , this.telefono);  
        console.log("Doctor que atiende: " , this.doctorAtiende);
        console.log("Historial Medico: " , this.historialMedico);
        console.log("Alergias: " , this.alergias);
}

}  


//Instancia de un paciente 
let paciente1 = new paciente("Jesus", "Gonzalez", 31, "jesusgonzalez@mail.com", "5521765423", "Doctor Simi", "no tiene", "Penicilina");

//Imprimir objeto paciente 
console.log(paciente1);

//Uso del metodo mostrar info 
paciente1.mostrarInfo();


//Diferencias entre un objeto literal (normal), y un objeto tipo JSON

//Todas las claves y los valores van dentro de comillas
//Todas las claves y los valores van dentro de comillas
//Envio de informacion a servidores
let objetoJSON = {
    "nombre": "Jesus",
    "apellido": "Gonzalez",
    "edad": 31,
    "email": "jesusgonzalez@mail.com",
    "telefono": "55987654321",
    "doctorAtiende": "Doctor Simi",
    "historialMedico": "No tiene",
    "alergias": "Penicilina"
}

//Trata la informacion y sacar datos especificos para DOM
let objetoLiteral = {
    nombre: "Jesus",
    apellido: "Gonzalez",
    edad: 31,
    email: "jesusgonzalez@mail.com",
    telefono: "55987654321",
    doctorAtiende: "Doctor Simi",
    historialMedico: "No tiene",
    alergias: "Penicilina"
}


/*
Realizar un programa que conste de una clase llamada Alumno, que tena como atributos el nombre y la nota del alumno. Definir metodos para inicizializar sus atributos (metodo constructor), imprimirlos y mostar un mensaje con el resultado de la nota si ha aprobado o no.

Atributos:
   -nombre
   -nota (calificacion)

Metodos:
   -Constructor
   -Metodo evaluacion (si aprueba o no )
   -Metodo imprimirInfo(nombre y la nota)

Logica del negocio 
    -If para evaluar la nota (si la nota es menor a 6, esta reprobado)
    -Recuperamos la informacion por medio de un prompt
    -Generamos 3 instancias para probar mi codigo (la nota sea igual a 6, la nota sea menor 6, la nota sea mayor a 6) 



*/


//Creacion de la clase (3 pasos)

class alumno {
      //1. Atributos o propiedades 
      nombre;
      nota;


      //3.Constructor donde le di identidad a mi objeto (this)

      constructor (nombre, nota){
        this.nombre = nombre;
        this.nota = nota;
      }

      //2.Metodos
      //metodo general, un metodo que no requiere personalizacion porque aplica para cualquier objeto
      evaluacion(nota){
           
        if (nota>=6){
            console.log("Aprobado");

        }else{
            console.log("Reprobado");
        }

      }

      imprimirInfo(nombre, nota){
        console.log("Nombre del alumno: " , this.nombre);
        console.log("Nota del alumno: " , this.nota);

      }
}


//Instacias de alumnos 
let alumno1 = new alumno ("Felipe", 3);
let alumno2 = new alumno ("Felipe", 8);
let alumno3 = new alumno ("Felipe", 6);

//Invocando metodos
alumno1.evaluacion(alumno1.nota);
alumno2.evaluacion(alumno2.nota);
alumno3.evaluacion(alumno3.nota);