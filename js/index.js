/*
	INDEX 
	
	Autor: Víctor Gutiérrez Tovar
	Fecha 29/01/2021
*/

function fondo(){
	setInterval(carrusel_de_fotos,2000);
}

//contadores.
var change=1;
var c=1;

function carrusel_de_fotos(){
	//fotos del main
	if(parseInt(change)>3){
		change=1;
		c=parseInt(c);
		c++;
		if(c>=12){
			c=1;
		}
	}
	
	document.getElementById("img"+change).src="img/index_imagenes/videojuegos_order/"+c+".jpg";

	change=parseInt(change);
	change++;
}