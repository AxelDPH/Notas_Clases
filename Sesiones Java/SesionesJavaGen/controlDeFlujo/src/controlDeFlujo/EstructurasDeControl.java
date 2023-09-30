package controlDeFlujo;

public class EstructurasDeControl {  //debe coincidir la clase con el nombre de nuestro documento
	public static void main(String[] args) {// Todo dentro del metodo main
		
// Recordar que para que algo se ejecute, siempre debe ir dentro del metodo principal.
		
		
		
		//primero vamos a definir una variable del tipo string donde alamcene un dato 
		String citaProgramada = "28-09-23"; //Dejamos el Null y despues lo cambiamos a una fecha "28-09-23"
		//la variable declarada, se inicia en null a proposito para tener un espacio de memoria ya asiganado y solo remplazarlo con  un nuevo dato.
		
		if (citaProgramada != null) {
			System.out.println("Ya hay una cita Programada");//Por que la variable ya esta ocupada o llena 
		}else{
			System.out.println("Puede registrar su cita.");
		}
		
		////////////////////////////////////
		
		//Seleccionando una opcion y almacenado la variable opcion 
		
		
		int opcion = 4 ;
		//Creamos un menu
		System.out.println("Menu del diente feliz");
		System.out.println("1. ¿Desea programar una cita? ");
		System.out.println("2. Verificar Cita Programada");
		System.out.println("3. Cancelar cita ");
		System.out.println("4. Salir del menu");
		System.out.print("Seleccione un opcion del menu (1-4) ");
		
		
		switch (opcion) {
		case 1:
			System.out.println("Usted ha seleccionado la opcion programar cita. "); //Agrega la logica para programar una cita 
			break;
		case 2: System.out.println("Usted ha seleccioando verificar cita");
		    break;
		case 3: System.out.println("Usted ha seleccionado la opcion de cancelar cita :( ");
		    break;
		case 4:System.out.println("Usted ha seleccionado la opcion salir del menu");
		    break;
		   default:
		      System.out.println("La opcion que ustede selecciono no es valida. Po r favor seleccione una opcion de nuestro menu");
		      break;
		
		}//Cierre de Switch 
		
		
	//	int edadPaciente = 18;
		//String estado;

		// Usando un operador ternario para asignar un estado basado en la edad
	//	estado = (edadPaciente >= 18) ? "Cita confirmada para el procedimiento" : "El paciente no es apto para el procedimeinto";

	//	System.out.println("Estatus: " + estado);
		
		
////////////////////////////////////////////////////////////////////////////////////////////////////////
//- Verificar de si la edad del paciente es apta para cierto tratamiento
//- Investigar operador ternario ?:
//- Ejemplo de consultorio

//Ingresando una edad del paciente
int edadPaciente = 20;

System.out.println("Evaluando si el paciente es apto para medicamento...");

//Condicion if
if (edadPaciente >= 18){
System.out.println("Podemos otorgar su medicamento respectivo :)");
} else {
System.out.println("Lo sentimos, no podemos otorgarle un medicamento :(");
} 

// - Operador ternario ejercicio

String estado = (edadPaciente >= 60) ? "es de la tercera edad, requiere atencion especial" : "no es de la tercera edad, no requiere atencion especial";

System.out.println("El paciiente es: " + estado);
		
		
	}//fin de metodo

}//fin de clase 
