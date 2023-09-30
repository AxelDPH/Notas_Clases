package dataTypes;

public class DatosPrimitivos {
    public static void main(String[] args) {
    	/*
    	 Datos primitivos. Datos fundamentales en Java que sirven para gestionar los tipos de información más básicos
		 * Existen 8 tipos de datos primitivos: byte, short, int, long, float, dohble, boolean, char
    	 */
    	//System.out.println(); //sysout + ctrl + space
    	//System.out.println();  //syso + ctrl + space
    //Vmin y Vmax
    	byte maxByte = Byte.MAX_VALUE;
    	byte minByte = Byte.MIN_VALUE;
    	System.out.println("El valor minimo de Byte es: " + minByte);
    	System.out.println("El valor maximo de Byte es: " + maxByte);
    	
    	
    	//short Vmin y Vmax
    	short maxShort = Short.MAX_VALUE;
    	short minShort = Short.MIN_VALUE;
    	System.out.println("El valor minimo de short es: " + minShort);
    	System.out.println("El valor maximo de short: " + maxShort);
        
    	//char. Vmin y Vmax
    	char minChar = Character.MIN_VALUE;
    	char maxChar = Character.MAX_VALUE;
    	System.out.println("El valor minimo de Character es: " + minChar);
    	System.out.println("El valor maximo de Character es: " + maxChar);
    	
    	int minInt = Integer.MIN_VALUE;
    	int maxInt = Integer.MAX_VALUE;
    	System.out.println("Valor minimo de Integer es: " + minInt );
    	System.out.println("Valor maximo de Integer es: " + maxInt );
    	
    	
    	
    	
    	long minLong = Long.MIN_VALUE;
    	long maxLong = Long.MAX_VALUE;
    	System.out.println("Valor minimo de Long es: " + minLong );
    	System.out.println("Valor maximo de Long es: " + maxLong );
    	
    	double minDouble = Double.MIN_VALUE;
    	double maxDouble = Double.MAX_VALUE;
    	System.out.println("Valor minimo de Double es: " + minDouble );
    	System.out.println("Valor maximo de Double es: " + maxDouble );
    	
    	float minFloat = Float.MIN_VALUE;
    	float maxFloat = Float.MAX_VALUE;
    	System.out.println("Valor minimo de Float es: " + minFloat );
    	System.out.println("Valor maximo de Float es: " + maxFloat );
    	
    	long isbn = 9788499169019L;
    	
    	float salary = 15000f;
    	System.out.println(salary);
    	
    	double ISR = 1239.45d;
    	System.out.println(ISR);
    	
    	char valorChar1 = 64;
    	char valorChar2 = 60;
    	System.out.println(valorChar1);
    	System.out.println(valorChar2);
    	
    	char achiquita;
    	achiquita = 166;
    	System.out.println(achiquita);
    	
    	/*  Casteo (Conversion de tiupos en JAVA).
    	 * Automatico (datos mas pequeños a un dato mas grande)
    	 * Manual (tipo de dato mas grande a tipo de dato mas pequeño)
    	 * 
    	 */
    	
    	int myNumber = 125;
    	System.out.println(myNumber);
    	//int < double
    	double myCasting = myNumber;
    	System.out.println(myCasting);
    	
    	short edad = 23;
    	int valorEdad = edad;
    	System.out.println(edad);
    	System.out.println(valorEdad);
    	
    	//--Manual
    	int myNewCasting = (int) myCasting;
    	System.out.println(myNewCasting);
    	
    	//Convertir de float a int
    	
    	float myFloat = 1.99f;
    	System.out.println(myFloat);
    	//Conversion 
    	int myNewFloat= (int) myFloat;
    	System.out.println(myNewFloat);
    	
    	//Convertir de char a int 
    	char myChar = 'M';
    	int myNewChar = myChar;
    	System.out.println(myNewChar);
    	
    	
    }
}
