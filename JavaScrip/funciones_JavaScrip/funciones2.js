//funciones 2
// Programa para hacer limonada
function exprimirLimones(cantidad){
    console.log("Exprimiendo " + cantidad + " limones");
    let jugoExtraido = cantidad *10; //considerando obtener 10 ml de jugo por cada limon 
    console.log ("Se obtuvo " + jugoExtraido + " ml de jugo de limon ");
    return jugoExtraido;  //return 
}

//Funcion para mezclar el jugo de limon con agua y azucar 
function mezclarJugoDeLimon (cantidadDeJugo, cantidadDeAgua, cantidadDeAzucar){
    console.log("Mezclando " + cantidadDeJugo+ " ml de jugo de limon con " + cantidadDeAgua + " ml de agua y " + cantidadDeAzucar + " gramos de azucar");

}

//funcion para servir limonada 
function servirLimonada (){
    console.log ("Sirviendo la limonada en un vaso");
    vasoDeLimonada = true; 
}

//Funcion principal que prepare una limonada 
function prepararLimonada(cantidadDeLimon){
    let jugoDeLimon = exprimirLimones(cantidadDeLimon);
    mezclarJugoDeLimon(jugoDeLimon, 200, 10);//cantidades ficticias de jugo de limon de agua y de azucar 
    servirLimonada();
}
//llamamos a la funcion principal para preparar limonada 
var vasoDeLimonada = false;
prepararLimonada (5);//llamamos al programa 