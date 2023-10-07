package Persona;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

public class Test {
	public static void main(String[] args) {
		/*
		Persona Felipe = new Persona("Felipe", "Maqueda", (byte) 31, "5521436767", "felipe53@mail.com");
		
		System.out.println(Felipe);
		Felipe.imprimirInfo();
		Felipe.saludar();
		
		//Instancia de Dentista
		Dentista Simi = new Dentista("Dr.Simi", "Lares", (byte)50, "6253426267", "simi@mail.com", "Odontologia", "52436211", "consultorio 500", "avanzado", "matutino", 500);
		
		System.out.println("********");
		Simi.calacularSalario();
		Simi.imprimirInfoDentista();
		
		
		
		
		
		//Instancia de paciente
		Paciente Chencho = new Paciente("CHNH24356", "RH Positivo", true, true, "05/oct/2023", "Doc. Simi Lares", false );
		
		System.out.println("********************");
		System.out.println(Chencho);
	

      */
		/*
		//Instancia de Paciente con datos obligatorios
		Paciente Masiosare = new Paciente("MAS12345", false, false);
		System.out.println("********************");
		System.out.println(Masiosare);
		
		
		//Cambiar el false de seguroMedico a true
		//Masiosare.seguroGastosMedicos = true;
		System.out.println("*********");
		System.out.println(Masiosare);
		
		*/
		
		//Implementacion de ArrayList de Dentista
		List<Dentista>listaDentistaArrayList = new ArrayList<>();
		
		//Primero genero una instancia de Dentista
		Dentista DrChapatin = new Dentista ("Dr.Chapatin", "Chespirito", (byte)45, "11234554", "chapatin@gmail.com", "General", "666123456", "Consultorio 200", "avanzado", "matutino", 450);
		
		//luego agrego a la lista 
		listaDentistaArrayList.add(DrChapatin);
		
		//Si agrego la instancia a una variable, puedo imprimir su informacion usando un toString, o un metodo mostrarInfo();		
		
		//Hago una instancia y la agrego directamente a la lista
		listaDentistaArrayList.add(new Dentista("Dr.Simi", "Lares", (byte)50, "6253426267", "simi@mail.com", "Odontologia", "52436211", "consultorio 500", "avanzado", "matutino", 500));
		
		//si genero la instancia y agrego directamente al arrayList, para sacar el dato tendre que utilizar un forEach o algun ciclo para imprimir dato por dato
		
		
		//implementacion de lista de Dentista con un HashSet
		Set<Dentista> conjuntoDentista = new HashSet<>();
		
		//Agregando Dentista a mi conjunto
		conjuntoDentista.add(new Dentista("Dr.Simi", "Lares", (byte)50, "6253426267", "simi@mail.com", "Odontologia", "52436211", "consultorio 500", "avanzado", "matutino", 500));
		
		
		//Implementacion de un HashMap de Dentista
		Map<String, Dentista>mapaDentistas = new HashMap<>();
		
		
		//Agregar un dentista a mi mapa
		mapaDentistas.put("Dr House", new Dentista ("Gregory", "House", (byte)55, "6253488267", "house@mail.com", "Cirujano", "52439911", "consultorio 600", "avanzado", "vespertino", 1400));
		
		//Imprimir el objeto Dr House
		Dentista DoctorBuscado = mapaDentistas.get("Dr House");
		System.out.println(DoctorBuscado);
		
		
		
		
	}//Cierre metodo main

}//cierre clase Test
