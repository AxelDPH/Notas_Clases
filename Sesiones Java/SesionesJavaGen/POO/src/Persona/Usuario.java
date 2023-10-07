package Persona;

public class Usuario {
	
	
	//Atributos
	private String tipoUsuario;
	private String username;
	private String password;
	
	//Crear usuario  (constructor)
	public Usuario(String tipoUsuario, String username, String password) {
		this.tipoUsuario = tipoUsuario;
		this.username = username;
		this.password = password;
	}//constructor
	
	
	//Recuperar contraseña (getter)
	public String getPassword () {
		//si el usuario registrado coincide con el paso como parametro, entonces obtengo la contraseña
		return password;
	}
	
	
	
	//Cambiar contraseña(setter)
	public void setPassword(String nuevoPassword) {
		//si la nueva contraseña es diferente a una cadena vacia y es diferente a la contraseña anterior....
		if (nuevoPassword != "" && nuevoPassword != password) {
			//... entonces reemplazo la contrasenia anterior
			password = nuevoPassword;
		}//cierre if  
		else {
			System.out.println("Lo siento, no puedo cambiar la contrasenia");
		}
	} //cierre cambiar contraseña
	
	
	//Cambiar la contrasenia de un objeto del tipo usuario
	
		//Felipe.setPassword (una donde la contrasenia este vacia)
		//Felipe.setPassword (una donde la contrasenia no este vacia pero sea igual a la anterior)
		//Felipe.setPassword (se cumplan las dos condiciones)
	
	
	
	
	
	

}//fin clase usuario
