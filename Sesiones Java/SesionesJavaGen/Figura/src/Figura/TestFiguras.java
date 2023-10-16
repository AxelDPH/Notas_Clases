package Figura;

public class TestFiguras {

	public static void main(String[] args) {
		
		//Generar las instancias de nuestra clase
		
		//1. Instancia de la clase Figura
		
	//	Figura Generica = new Figura();
		
		//2. Instancia de un rectangulo
		Figura rectangulo = new Rectangulo(5.0, 6.5);
		
		//3. Instancia de un circulo
		Figura circulo = new Circulo(3.14, 3.0);
		
		//Invocacion de metodo
		System.out.println( rectangulo.calcularArea());
		System.out.println( circulo.calcularArea());
		
	}//metodo main
}//class TestFigura
