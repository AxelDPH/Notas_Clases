package dataTypes;

public class DatosEstructurados {
	public static void main (String [] args) {
		/* * Datos estructurados. Son datos complejos que almacenan caracteres y/o cadenas de caracteres o bien, algún tipo de dato primitivo
		 * -- String. Cadena de Caracteres, se declaran entre comillas y hay que definir el tipo de dato con la palabra reservada String
		 * -- Arrays.
		 * -- Creados por el usuario (API Java)
		 */
		String myString = "Hola soy un String";
		System.out.println(myString);
		
		String helloString = new String ("Hola, soy un segundo string");
		System.out.println(helloString);
		/*Metodo para Strings 
		 * String lenght. Metodo permite medir la longitud de una cadena de caracteres
		 * 
		 * */
		String texto = "AgcDxhXhxHX";
		System.out.println("La longitud de la variable texto de tipo String es " + texto.length());
		/*
		  * Guardando la variable texto en una nueva variable de tipo int para pasarle el método length
		 * int metodoLength = texto.length();
		 *--Output: 10
		 *Imprimimos en consola la nueva variable
		 *System.out.println(metodoLength);
		 */
		
		//--String toUpperCase () y toLowerCase()
		String upperCase = texto.toUpperCase();
		System.out.println("Aplicando el metodo toUpperCase: " + upperCase);
		
		String lowerCase = texto.toLowerCase();
		System.out.println("Aplicando el metodo tolowerCase: " + lowerCase);
		
		//--indexOf(). Devuelve el indice de la primera aparicion de un texto especifico
		String fraseMotivacional = "Todo es temporal, echael ganitas";
		int indexOf = fraseMotivacional.indexOf("temporal");
		System.out.println("La palabra temporal inicia en el indice: " + indexOf);
		
		//--Concatenacion
		String firstName = "Axel";
		String lastName = "Pacheco";
		
		String userName = firstName + " " + lastName;
		System.out.println(userName);
		
		System.out.println(firstName.concat(lastName));
		
		//-- Metodos de conversion (parseo)
		String presupuesto = "5000";
		System.out.println("El presupuesto es de $ " + presupuesto + " y el tipo de dato es " + presupuesto.getClass().getSimpleName());
		
		int parseao = Integer.parseInt(presupuesto);
		System.out.println("aplicando parseInt, el valor de " + presupuesto + " de tipo " + presupuesto.getClass().getSimpleName() + " ahora es " + ((Object)parseao).getClass().getSimpleName()  );
		
		/*
		 *Arrays. Conocidos como arreglos, se trata de una coleccion de datos del mismo tipo donde cada elemento corresponde a una posicion identificada por indices numericos. Cuando trabajamos con arreglos de dos dimensiones (bidimensionales), usamos el termino matriz. 
		 */
		
		String[] cars = {"Volkwagen", "Mazda", "Kia", "Ford"};
		System.out.println(cars);
		
		
		/*
		 Variable por tipo de declaracion
		 --Variables dinamicas son aquellas que se declaran con un valor pero que dicho valor puede cambiar durante el proceso.
		 ---Variables constantes o finales. Su valor no puede modificarse.
		 ---Variables literales (palabras reservadas). Su identificador es la representacion de su valor y ya tiene un significado en el codigo fuente Java
		  
		 */
		
		//Variables dinamicas
		float gastosMensuales = 38684.23f;
		System.out.println(gastosMensuales);
		
		
		gastosMensuales = 42699.2f;
		System.out.println("Ahora mis gastos mensuales ascienden a: " + gastosMensuales);
		
		//Variables finales o constantes, por buenas practicas estas variables siempre deben escribirse en Mayusculas
		
		final int SALARIO = 15000;
		System.out.println(SALARIO);
		
	
		
		
	}

}
