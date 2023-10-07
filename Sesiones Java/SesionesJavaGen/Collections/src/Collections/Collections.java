package Collections;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

public class Collections {
	
	public static void main(String[] args) {
		
		//Array
		String[] listaDeCompras = new String[] {"Leche", "Pan", "Huevos"};
		
		System.out.println(listaDeCompras);
		
		//imprimir info de listaDeCompras con un forEach
		//para el dato de tipo String que llamaremos productoAImprimir de la lista de compras, lo vamos a tomar y lo vamos a imprimir
	/*	for(String productoAImprimir : listaDeCompras) {
			System.out.println(productoAImprimir);
		}*/
		
		
		
		//Implemenetacion de un arrayList
		//Clase General (interfaz), tipo de dato que usare, nombre de mi estructura de datos, instancia de dicha clase general
		List<String> listaDeContactos = new ArrayList<>();
		
		
		//Agrego elementos del tipo String a mi arrayList llamado listaDeContactos
		listaDeContactos.add("Felipe");
		listaDeContactos.add("Roberto");
		listaDeContactos.add("Alicia");
		listaDeContactos.add("Fatima");
		
		
		//Obtener un elemento de la lista - asiganarlo a una variable
		String datoFelipe = listaDeContactos.get(3);
		
		System.out.println(datoFelipe);
		
		
		//Borrar un elemento de la lista
		listaDeContactos.remove(1);
		
		System.out.println(listaDeContactos);
		
		//Implementacion de un conjunto (SET)
		//Sintaxis
		//Interfaz de sonde implemento + tipo de dato que usare + nombre que le doy al conjunto + instancia de clase especifica
		
		Set<String> cartasDeJuego = new HashSet<>();
		
		
		//Agregar elementos 
		cartasDeJuego.add("As de corazones");
		cartasDeJuego.add("2 de picas");
		cartasDeJuego.add("Reina de treboles");
		
		
		//No puedo saber posiciones, solo saber si lo contiene
		if (cartasDeJuego.contains("Reina de treboles")) {
			System.out.println("La reina de treboles si esta en el conjunto");
		}else {
			System.out.println("No encontro el elemento solicitado");
		}
		
		
		
		//Implementacion de un mapa (hashMap)
		Map <String, String> libretaDirecciones = new HashMap<>();
		
		//Agregar elementos a mi libreta de direcciones, donde mi K=nombre y mi V= direccion
		libretaDirecciones.put("Felipe", "Tlalnepantla");
		libretaDirecciones.put("Doctor Simi", "CDMX");
		libretaDirecciones.put("Kohana", "Naruto");
		
		
		//Metodo para sacar infromacion de la libreta, creando una nueva variable 
		String direccionDeFelipe = libretaDirecciones.get("Felipe");
		String direccionDeNaruto = libretaDirecciones.get("Naruto");
		
		
		
		//Impresion
		System.out.println(direccionDeFelipe);
		System.out.println(direccionDeNaruto);

		
		
		
		
		
		
		
	}//cierre metodo main

}//cierre collections


/*
 * Colecciones
 * 
 * 
 * Arrays (arreglos)
 * 
 * Es una estructura de datos lineal que contiene elementos del mismo tipo.Los elementos estan almacenados de forma contigua (uno al lado dle otro), y se pueden acceder a ellos a traves de un indice. Las principales caracteristicas de una rray son:
 * 
 *    -Es una estructura de datos fija, generalmente almacenada datos del mismo tipo
 *    -La longitud de un array se establece al momento de crearlo, y no cambia
 *    -Podemos acceder a elemntos por medio de un indice
 *    -Los arrays pueden contener datos primitivos y objetos
 *    -No proporciona metodos para agregar o limitar elementos
 * 
 * 
 * 
 * - ArrayList
 * 
 * Es una implementacion de una lista (List), es decir, que esta en un nivel abajo de las listas. Utiliza un array dinamico que permite almacenar datos
 * 
 * Dus principales caracteristicas son:
 * 
 * -Tamaño dinamico a diferencia de los arrays tradicionales, el tamño de un arrayList si se puede modificar.
 * -Acceso rapido, podemos acceder a un elemento del arrayList por su posicion o indice.
 * -Costo elevado al momento de insertar o eliminar elementos. Si agrego un elemento, tengo que recorrer todos los demas elementos.
 * 
 * 
 * 
 * 
 * 
 * Set (conjunto)
 * 
 * Estructura de datos que almacena daatos unicos sin orden especifico. Las principales caracteristicas de un set son:
 * 
 *       -No hay elementos duplicados, ya que los conjuntos no los pueden contener. Si se intenta agregar un eleemnto ya existente, la operacion se ignora.
 *       -No hay un orden especifico, los elementos se almacenan sin orden especifico
 *       -Las busqueda es mas sencilla, ya que al no tener elementos duplicados se usa una funcion hash para encontrar elemento deseado
 * 
 * 
 * 
 * 
 * Map (mapas)
 * 
 * Un mapa es una estructura de datos que almacenan pares de clave-valor.
 * 
 *   -Almacenamiento con pares K-V
 *   -Sin orden especifico (similar a un Set)
 *   -Busqueda rapida, la busqueda se hace por medio de un valor  (key), y usa una funcion interna hash para buscar elementos.
 *   
 *   
 *   
 *   
 *   Agenda telefonica (agregar, modificar eliminar)
 * 
 * 
 * 
 */