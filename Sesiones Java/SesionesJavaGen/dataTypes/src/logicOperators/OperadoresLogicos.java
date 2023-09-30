package logicOperators;

public class OperadoresLogicos {
    public static void main (String[] args) {
    	/*
    	 --Operadores aritmeticos (+, -, *, /, %)
    	 --Operadores logicos. (AND, OR, NOT)
    	 --Operadores relacionales (=, +=, -=, *=, /=, <, >, <=, >=)
    	 
    	 */
    	
    	/*
    	double num1 = 12d;
    	double num2 = 7d;
    	
    	double resultado = num1 / num2;
    	System.out.println(resultado);
    	*/
    	int num1 = 12;
    	int num2 = 7;
    	
    	int resultado = num1 % num2;
    	System.out.println(resultado);
    	
    	System.out.println(num1 >= num2);
    	System.out.println(num1 <= num2);
    	
    	
    	/*
    	 *Operadores logicos
    	 *AND (&&)
    	 *OR (||)
    	 *NOT (!) 
    	 */
    	
    	int numeroUno = 5;
    	int numeroDos = 7;
    	
    	
    	boolean comparacionUno = numeroUno ==numeroDos;
    	System.out.println(comparacionUno);//false
    	
    	boolean comparacionDos = (numeroUno < numeroDos)&& (numeroUno > numeroDos);
    	System.out.println(comparacionDos);//false
    	
    	boolean comparacionTres = (numeroUno < numeroDos)||(numeroUno > numeroDos);
    	System.out.println(comparacionTres);//true
    	
    	boolean comparacionCuatro = false;
    	System.out.println(!comparacionCuatro); //true
    }
}
