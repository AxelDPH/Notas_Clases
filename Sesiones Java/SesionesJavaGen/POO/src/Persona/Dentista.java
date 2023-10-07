package Persona;

public class Dentista extends Persona {
	
	//1 Atributos
	
	/*
	 * Ya no creo valores como nombre, edad, apellido, etc., porque estos valores los voy a heredar de la clase persona
	 * */
	String especialidad;
	String cedula;
	String consultorioAsignado;
	String experiencia;
	String turno;
	int salario;	
	
	//2 Constructor
	
	public Dentista(String nombre, String apellido, byte edad, String telefono, String email, String especialidad,
			String cedula, String consultorioAsignado, String experiencia, String turno, int salario) {
		super(nombre, apellido, edad, telefono, email); //informacion de la clase Persona
		//informacion de la clase Dentista
		this.especialidad = especialidad;
		this.cedula = cedula;
		this.consultorioAsignado = consultorioAsignado;
		this.experiencia = experiencia;
		this.turno = turno;
		this.salario = salario;
	
	}//ConstructorDentista
	
	
	//3 Metodso (Metodo para calcular salrio basado en la experiencia)
	//Experiencia = basico, intermedio, avanzado
	
	//si el dentista esta en un rango basico, gana 30,000. Si intermedio, gana 40,000, si es avanzado gana 50,000
	
	void calacularSalario() {
		//Logica de programacion 
		if (experiencia.equals("basico")) {
			salario = 30000;
		}else if(experiencia.equals("intermedio")){
			salario = 40000;
		}else if (experiencia.equals("avanzado")) {
		salario = 50000;	
		}//Diferencia entre evaluar variables con operador de igualdad (==) y evaluar el contenido de las variables con el metodo equals (.equals)
		
	}//Cierre calsularSalario
	
	void imprimirInfoDentista() {
		System.out.println("La especialidad: " + especialidad);
		System.out.println("El salario es: " + salario);
	}//cierre 
	

}//Cierre dentista
