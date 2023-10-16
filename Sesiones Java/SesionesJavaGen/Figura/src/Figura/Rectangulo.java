//En esta clase vamos a heredar el atributo de la clase abstracta Figura, y lo vamos a sobreescribir

//1. aplicamos herencia
package Figura;

public class Rectangulo extends Figura{

	//parametros
	double base;
	double altura;
	
	//constructor
	Rectangulo(double base, double altura){
	this.base = base;
	this.altura = altura;
	}//constructor
	
	//metodos
	@Override
	public double calcularArea() {
		double formulaRectangulo = base * altura;
		return formulaRectangulo;
	}//metodo calcularArea

}//clase figura
