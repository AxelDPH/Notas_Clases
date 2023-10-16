package Animal;

public class Perro extends Animal {//Herencia de la clase superior Animal
	
		//"Polimorfear" o o sobreescribir el metodo heredado
	  @Override//con la anotacion @Override, le decimos a java que el metodo hacerSonido sera Sobreescrito
		public void hacerSonido() {
			System.out.println("El perrito ladra y hace guau");
		}//metodo hacerSonido heredado de Aanimal
		
	public static void main(String[] args) {
		
		//Aqui No hay polimorfismo, ya que instancio un animal generico, y utilizo su metodo hacerSonido
		Animal Generico = new Animal (); //Genera un animal generico (abstracto)
		
		Generico.hacerSonido();
		
		//Genera la instancia de mi perrito
		//Si hay polimorfismo, porque es el equivalente a decir "Instancio un animal que es un perrito"
		//Referenciar primero la clase general, y luego la instancia particular, permite el polimorfismo
		
		Animal Chilaquil = new Perro();
		
		
		Chilaquil.hacerSonido();
		
		
	}//metodo main

}//cierre clase Perro
