package Figura;

//Clase concreta que implementa metodos de une interface llamada Calculable
public class Esfera extends Figura implements Calculable{

	@Override
	public double calcularArea() {
		return 0;
		// Area 4 π r*r
	}

	@Override
	public double calcularVolumen() {
		return 0;
		// Valumen V = 4/3 π r^3
	}

	@Override
	public double calcularPerimetro() {
		return 0;
		// Perimetro 2 * π * r
	}
	

}
