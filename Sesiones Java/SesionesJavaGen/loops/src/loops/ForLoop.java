package loops;

public class ForLoop {
   public static void main (String[] args) {
	   /*
	    *El ciclo for proporciona una forma compacta de iterar sobre valores.
	    *for (inicializacion; condicion; (incremento/decremento){  
	    //bloque de codigo
	    })  
	    */
	   
	   //for variable local 
	   for (int numero = 1; numero <= 10; numero++) {
		   System.out.println("Numero igual a " + numero);
	   }//fin de for local
	   
	   //for con variable global
	   
	   int contador;
	   for (contador = 1; contador <=5; contador++) {
		   System.out.println("La cuenta es " + contador);
	   }//fin de for global
	   
	   
	   /*
	    * Bucles anidados. Bucle dentro de otro bucle
	    */
	   //Imprimir una forma triangular de asterisco
	   
	   int filas =9;
	   
	   for (int i = 0; i < filas; i++) {
		   //Bloque de codigo que va a iterar sobre el primer bucle
		   for (int j = 0; j <=i; j++) {
			   System.out.print("*");
		   }
		   System.out.println();
	   }//final de triangulo de asteriscos
	   
	   
	   
	   //Calcular 5 potencias del valor de PI
	   /*
	    *PI elevado a la 1 potencia es igual a 3.141592653589793
	    *PI elevado a la 2 potencia es igual a
	    **/
	   System.out.println("El valor de PI es: " + Math.PI);
	   int potencia =5;
	   
	   for(int base = 1; base <= potencia; base++) {
		   double resultado = Math.pow(Math.PI, base);
		   System.out.println("PI elevado a la " + base + " es igual a " + resultado);
	   }//final de ciclo for para PI
	   
	   
	   
	   
   }//final metodo main
}//final class
