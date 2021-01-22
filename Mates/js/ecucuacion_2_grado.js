/*
	ecucuacion_2_grado.js

	Convinatoria.

	AUTOR: Víctor Gutiérrez Tovar
	FECHA: 12/01/2021
	TÍTULO: ecucuacion de 2° grado.
*/
function fondo(){
	setInterval(enter_reader,5);
}

function enter_reader(){
	// Get the input field
	var input = document.getElementById("A");

	// Execute a function when the user releases a key on the keyboard
	input.addEventListener("keyup", function(event) {
	  // Number 13 is the "Enter" key on the keyboard
	  if (event.keyCode === 13) {
	    // Cancel the default action, if needed
	    event.preventDefault();
	    // Trigger the button element with a click
	    document.getElementById("boton_calcular").click();
	  }
	});

	// Get the input field
	var input = document.getElementById("B");

	// Execute a function when the user releases a key on the keyboard
	input.addEventListener("keyup", function(event) {
	  // Number 13 is the "Enter" key on the keyboard
	  if (event.keyCode === 13) {
	    // Cancel the default action, if needed
	    event.preventDefault();
	    // Trigger the button element with a click
	    document.getElementById("boton_calcular").click();
	  }
	});

	// Get the input field
	var input = document.getElementById("C");

	// Execute a function when the user releases a key on the keyboard
	input.addEventListener("keyup", function(event) {
	  // Number 13 is the "Enter" key on the keyboard
	  if (event.keyCode === 13) {
	    // Cancel the default action, if needed
	    event.preventDefault();
	    // Trigger the button element with a click
	    document.getElementById("boton_calcular").click();
	  }
	});
}


function calcular(){

	//ECUACIÓN DE SEGUNDO GRADO
	var a, b, c;
	
	//Cojo los valores introducidos en la ecuación.
	a=parseInt(document.getElementById("A").value);
	b=parseInt(document.getElementById("B").value);
	c=parseInt(document.getElementById("C").value);

	//incógnitas
	var x1, x2;

	//realizo la operación y obtengo los resultados
	x1=(-b + Math.sqrt(b*b-(4*a*c)))/2*a;
	x2=(-b - Math.sqrt(b*b-(4*a*c)))/2*a;

	//caja sin error
	document.getElementById("A").className="caja_texto";
	document.getElementById("B").className="caja_texto";
	document.getElementById("C").className="caja_texto";

	if(isNaN(x1) && isNaN(x2)){
		document.getElementById("error").innerHTML="No existe solución real";
		document.getElementById("A").className="caja_texto_error";
		document.getElementById("B").className="caja_texto_error";
		document.getElementById("C").className="caja_texto_error";
	}

	else{
		document.getElementById("res1").innerHTML = "X1 = "+x1;
		document.getElementById("res2").innerHTML = "X2 = "+x2;
	}
}