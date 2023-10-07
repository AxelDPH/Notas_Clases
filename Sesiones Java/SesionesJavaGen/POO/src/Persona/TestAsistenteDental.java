package Persona;

public class TestAsistenteDental {
      public static void main (String[] args) {
      
    	  //Instancia de nuestro asistente
    	  AsistenteDental Francisca = new AsistenteDental ("05/10/2023", 875.40d);
    	  
    	  
    	  //Impresion de la informacion de nuestro asistente 
    	  Francisca.mostrarDatosAsistente();
    	  
    	  
    	  //El sueldo de Francisca no es 875.54
    	  //Cambio sueldo
    	  //Fancisca.salario=87.54d;
    	  
    	  //Mostrar solo el sueldo (antes del getter)
    	 // System.out.println(Francisca.salario);
    	  
          //Mostrar solo el sueldo (antes del getter)
    	            System.out.println(Francisca.getSalario());
    	  
    	//Modificar salario con setter
    	Francisca.setSalario(30.00);//Si cumple la condicion
    	            
    	//Imprimir el nuevo salario de Francisca
    	System.out.println(Francisca.getSalario());
    	
    	
    	
    	  
      }//fin metodo main
}//fin tets
