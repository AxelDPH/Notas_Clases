package Figura;

//Herencia de la clase abstracta Figura
public class Circulo extends Figura{
	
	//1. atributos
	double pi;
	double radio;
	
	//2. constructor
	Circulo(double pi, double radio){
		this.pi = pi;
		this.radio = radio;
	}//constructor
	
	//3.Metodos (metodo abstracto heredado de Figura)
	
	@Override
	public double calcularArea() {
		double areaCirculo = pi * (radio * radio);
		return areaCirculo;
	}//metodo calcularArea

}//class Circulo
