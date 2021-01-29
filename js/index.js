/*
	INDEX 
	
	Autor: Víctor Gutiérrez Tovar
	Fecha 29/01/2021
*/

function fondo(){
	setInterval(carrusel_de_fotos,1000);
}

//contadores.
var change=1;
var c=2;

function carrusel_de_fotos(){
	//fotos del main
	if(parseInt(change)>2){
		change=1;
		c=parseInt(c);
		c++;
		if(c>10){
			c=1;
		}
	}
	if(change==2){
		document.getElementById("img"+change).src="img/final/carrusel/"+c+".jpg";
	}
	else{
		document.getElementById("img"+change).src="img/process/carrusel/"+c+".jpg";
	}
	
	change=parseInt(change);
	change++;
}