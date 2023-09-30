package ejercicioJava;

public class EjercicioJava {
	public static void main(String[] args) {
		// Declarar las variables
		int precio = 20000; // Precio del iPhone 15
		int cantidad = 3; // Cantidad de equipos comprados
		int totalSinDescuento = precio * cantidad; // Costo total sin descuento
		double descuento = 0.1; // Porcentaje de descuento
		int limiteDescuento = 25000; // Límite de compra para aplicar el descuento
		double totalConDescuento = 0; // Costo total con descuento
		int meses = 12; // Meses sin intereses
		double pagoMensual = 0; // Pago mensual

		// Verificar si aplica el descuento
		if (totalSinDescuento > limiteDescuento) {
		    // Aplicar el descuento
		    totalConDescuento = totalSinDescuento * (1 - descuento);
		    // Calcular el pago mensual
		    pagoMensual = totalConDescuento / meses;
		} else {
		    // No aplicar el descuento
		    totalConDescuento = totalSinDescuento;
		    // Calcular el pago mensual
		    pagoMensual = totalConDescuento / meses;
		}

		// Imprimir los resultados
		System.out.println("El costo total por los 3 equipos sin descuento es: " + totalSinDescuento + " pesos");
		System.out.println("El costo total por los 3 equipos con descuento es: " + totalConDescuento + " pesos");
		System.out.println("El pago mensual por los 3 equipos es: " + pagoMensual + " pesos");

	}

}
