/*	
	con_var_per.js

	Combinatoria.

	AUTOR: Víctor Gutiérrez Tovar
	FECHA: 12/01/2021
	TÍTULO: Combinatoria Variaciones y Permutaciones.
*/

function combinatoria(){
	//variables principales
	var n, p;

	n=parseInt(document.getElementById("N").value);
	p=parseInt(document.getElementById("P").value);

	//caja sin error
	document.getElementById("N").className="caja_texto";
	document.getElementById("P").className="caja_texto";

	//en caso de ser un factorial tan grande que el resultado es erróneo
	if(n>21 || p>21){
		if(n>21){
			document.getElementById("error").innerHTML="La app no soporta este número tan grande ("+n+")";
			document.getElementById("N").className="caja_texto_error";
		}
		else{
			document.getElementById("error").innerHTML="La app no soporta este número tan grande ("+p+")";
			document.getElementById("P").className="caja_texto_error";
		}
	}
	else{
		//factoriales
		var f_n, f_p;
		f_n=parseInt(factorial(n));
		f_p=parseInt(factorial(p));

		//OPERACIÓN
		var cs, cr;

		cs=f_n/(f_p*parseInt(factorial(n-p)));
		cr=(parseInt(factorial(n+p-1)))/(f_p * parseInt(factorial(n-1)));

		//IMPRIMIR RESULTADOS
		document.getElementById("Cs").innerHTML= "Cs = "+cs;
		document.getElementById("Cr").innerHTML= "Cr = "+cr;
	}
}

function variaciones(){
	//variables principales
	var n, p;

	n=parseInt(document.getElementById("N").value);
	p=parseInt(document.getElementById("P").value);

	//caja sin error
	document.getElementById("N").className="caja_texto";
	document.getElementById("P").className="caja_texto";

	//en caso de ser un factorial tan grande que el resultado es erróneo
	if(n>21 || p>21){
		if(n>21){
			document.getElementById("error").innerHTML="La app no soporta este número tan grande ("+n+")";
			document.getElementById("N").className="caja_texto_error";
		}
		else{
			document.getElementById("error").innerHTML="La app no soporta este número tan grande ("+p+")";
			document.getElementById("P").className="caja_texto_error";
		}
	}
	else{
		//factoriales
		var f_n, f_p;
		f_n=parseInt(factorial(n));
		f_p=parseInt(factorial(p));

		//OPERACIÓN
		var vs, vr;

		vs=f_n/parseInt(factorial(n-p));
		vr=Math.pow(n,p);

		//IMPRIMIR RESULTADOS
		document.getElementById("Vs").innerHTML= "Vs = "+vs;
		document.getElementById("Vr").innerHTML= "Vr = "+vr;
	}
}
function permutaciones(){
	//variables principales
	var n, p;

	n=parseInt(document.getElementById("N").value);
	p=parseInt(document.getElementById("P").value);

	//caja sin error
	document.getElementById("N").className="caja_texto";
	document.getElementById("P").className="caja_texto";

	//en caso de ser un factorial tan grande que el resultado es erróneo
	if(n>21){
		document.getElementById("error").innerHTML="La app no soporta este número tan grande ("+n+")";
		document.getElementById("N").className="caja_texto_error";
	}

	else if(p>0){
		document.getElementById("error").innerHTML="La 'P' se inavilita en este función solo use la 'N' para sacar su factorial";
		document.getElementById("P").value="";
		permutaciones();
	}
	else{
		//factoriales
		var f_n, f_p;
		f_n=parseInt(factorial(n));
		f_p=parseInt(factorial(p));

		//OPERACIÓN
		var ps;

		ps=f_n;

		//IMPRIMIR RESULTADOS
		document.getElementById("Ps").innerHTML= "N = Ps = "+ps;
	}
}

var n_factorial;
function factorial(n_factorial){
	var res=1;
	var c;

	for(c=1;c<=n_factorial;c++){
		res=res*c;
	}

	return res;
}

function clear_res(){
	//caja sin error
	document.getElementById("N").className="caja_texto";
	document.getElementById("P").className="caja_texto";
	//quitar el texto
	document.getElementById("Cs").innerHTML= "";
	document.getElementById("Cr").innerHTML= "";
	document.getElementById("Vs").innerHTML= "";
	document.getElementById("Vr").innerHTML= "";
	document.getElementById("Ps").innerHTML= "";
	document.getElementById("error").innerHTML= "";
}