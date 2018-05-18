// Pide el nombre
var name = prompt("Cual es tu nombre?");
// se obtiene el elemento del encabezado
var element = document.getElementById("headerWelcome");
// se imprime el elemento "bienvenido" y el nombre
element.innerHTML = "BIENVENIDO " + name;

//se declara la variable confirmar
var confirmation = confirm("List@ para jugar");
//si se confirma quiere jugar:

if (confirmation) {
  // se declaran las preguntas
  var question1 = "1.¿Quién pintó la Monalisa?"
  var question2 = "2.¿Quién pintó el mural \"El origen de la vida\"?"
  var question3 = "3.¿Quién pintó las dos Fridas?"

  // se solicitan las  preguntas
  var question1Prompt = prompt(question1);
  var question2Prompt = prompt(question2);
  var question3Prompt = prompt(question3);

  // ver Resultado
  var result = alert("¡¡¡VEAMOS TU RESULTADO!!!");
  // se obtienen los elementos de preguntas correctas
  var element1 = document.getElementById("leftAnswers");
  // se obtienen los elementos de preguntas incorrectas
  var element2 = document.getElementById("rightAnswers");

  //si respuesta 1 de usuario es == a  respuesta correcta
  if (question1Prompt.toUpperCase() == "DAVINCI") {
    // si es igual se imprime en respuestas correctas
    element1.innerHTML =  element1.innerHTML + "</br>" +question1 + ' ' + "</br>" +question1Prompt;
  } else {
    // si no se imprime en respuestas incorrectas
    element2.innerHTML =  element2.innerHTML + "</br>" +question1 + ' ' + "</br>" +question1Prompt
  }

  //si respuesta 2 de usuario es == a  respuesta correcta
  if (question2Prompt.toUpperCase() == "DIEGO RIVERA") {
    // si es igual se imprime en respuestas correctas
    element1.innerHTML =  element1.innerHTML + "</br>" +question2 + ' ' + "</br>" +question2Prompt
  } else {
    // si no se imprime en respuestas incorrectas
    element2.innerHTML =  element2.innerHTML + "</br>" +question2 + ' ' + "</br>" +question2Prompt
  }

  // si es igual se imprime en respuestas correctas
  if (question3.toUpperCase() == "FRIDA") {
    element1.innerHTML =  element1.innerHTML + "</br>" +question3 + ' ' + "</br>" +question3Prompt
  } else {
    // si no se imprime en respuestas incorrectas
    element2.innerHTML =  element2.innerHTML + "</br>" +question3 + ' ' + "</br>" +question3Prompt
  }

} else { // si no quiere jugar
  //se obtiene el section
  var exit1 = document.getElementById("section");
  // se imprime jugaremos a la proxima
  exit1.innerHTML = "<p class='no-play'>¡¡¡Jugaremos para la próxima!!!</p>";
}
