//VARIABLES GLOBALES
var matrixA = new Array(9);
var matrixB = new Array(3);
var matrixAt = new Array(9);//MATRIZ TRASPUESTA
var detA;
var a = new Array(9)


//DETERMINANTE DE A
	function DetA(){
		var c;
		var scanf;
		
		
		for(c=0;c<9;c++){
			c++;
			scanf = document.getElementById("MatrixA_"+c).value;
			c--;
			parseInt(scanf);
			matrixA[c]=scanf;
			matrixA[c]=parseInt(matrixA[c]);
		}
		//Calculo del determinate de A
		detA = (matrixA[0] * matrixA[4] * matrixA[8]) + (matrixA[1] * matrixA[5] * matrixA[6]) + (matrixA[2] * matrixA[3] * matrixA[7]) - ((matrixA[6] * matrixA[4] * matrixA[2]) + (matrixA[7] * matrixA[5] * matrixA[0]) + (matrixA[8] * matrixA[3] * matrixA[1]));
		//Imprimir determinante de A
		document.getElementById("resdeta").innerHTML = "DETERMINANTE DE A:";
		document.getElementById("detA").innerHTML = "DetA = "+detA;
		//BORRO
		document.getElementById("x").innerHTML = "";
		document.getElementById("y").innerHTML = "";
		document.getElementById("z").innerHTML = "";
		document.getElementById("detX").innerHTML = "";
		document.getElementById("detY").innerHTML = "";
		document.getElementById("detZ").innerHTML = "";
		//BORRO
		document.getElementById("TAf1").innerHTML = "";
		document.getElementById("TAf2").innerHTML = "";
		document.getElementById("TAf3").innerHTML = "";
		document.getElementById("rescramer").innerHTML = "";
	}
//CRAMER	
	function Cramer(){
		//matrices
		var matrixX = new Array(9); 
		var	matrixY = new Array(9); 
		var matrixZ = new Array(9);
		//scanf
		var scanf;
		//det
	
		var detX;
		var detY; 
		var detZ;
		//incognitas
		var x;
		var y;
		var z;
		//contador
		var c;
		DetA();
		
		for(c=0;c<3;c++){
			c++;
			scanf = document.getElementById("MatrixB_"+c).value;
			c--;
			parseInt(scanf);
			matrixB[c]=scanf;
			matrixB[c]=parseInt(matrixB[c]);
		}
		//igualo las matrices X,Y,Z a A y más adelante sustituyo las columnas correspondientes de cada una por la Matriz B
		for(c=0; c<9; c++){
			matrixX[c]=matrixA[c];
			matrixY[c]=matrixA[c];
			matrixZ[c]=matrixA[c];
		}
		
		//cambio de columnas de la matriz A por la matriz B dando lugar a las matrices X Y Z
			/*x:*/
		matrixX[0] = matrixB[0];
		matrixX[3] = matrixB[1];
		matrixX[6] = matrixB[2];
			/*y:*/
		matrixY[1] = matrixB[0];
		matrixY[4] = matrixB[1];
		matrixY[7] = matrixB[2];
			/*z:*/
		matrixZ[2] = matrixB[0];
		matrixZ[5] = matrixB[1];
		matrixZ[8] = matrixB[2];
		
		//Determinantes
		detX=det(matrixX);
		
		detY=det(matrixY);
		
		detZ=det(matrixZ);
		
		//Imprimir determinantes
		document.getElementById("detX").innerHTML = "DetX = "+detX;
		document.getElementById("detY").innerHTML = "DetY = "+detY;
		document.getElementById("detZ").innerHTML = "DetZ = "+detZ;
		
		//Calcular x y z
		x=parseFloat(detX/detA);
		y=parseFloat(detY/detA);
		z=parseFloat(detZ/detA);
		
		//Imprimir resultados de x, y, z
		document.getElementById("rescramer").innerHTML = "RESULTADOS:";
		
		//BORRO
		document.getElementById("TAf1").innerHTML = "";
		document.getElementById("TAf2").innerHTML = "";
		document.getElementById("TAf3").innerHTML = "";
		
		document.getElementById("x").innerHTML = "X = "+detX+" / "+detA+" = "+x;
		document.getElementById("y").innerHTML = "Y = "+detY+" / "+detA+" = "+y;
		document.getElementById("z").innerHTML = "Z = "+detZ+" / "+detA+" = "+z;
	}
//DETERMINANTES
	function det(a){
		var det;
		
		det = (a[0] * a[4] * a[8]) + (a[1] * a[5] * a[6]) + (a[2] * a[3] * a[7]) - ((a[6] * a[4] * a[2]) + (a[7] * a[5] * a[0]) + (a[8] * a[3] * a[1]));
		return det;
	}
//MATRIZ INVERSA	
	function MatrizAinversa(){
		DetA();
		if(detA == 0){
			alert("No existe matriz inversa de A, ya que det detA = 0")
		}
		else{
			var conAt = new Array(9);
			var c;
			TraspuestaA();
			//paso a float
			for(c=0;c<9;c++){
				matrixAt[c]=parseFloat(matrixAt[c]);
			}
			
			conAt[0]=((matrixAt[4]*matrixAt[8])-(matrixAt[7]*matrixAt[5]))/detA;
			conAt[1]=-((matrixAt[3]*matrixAt[8])-(matrixAt[5]*matrixAt[6]))/detA;
			conAt[2]=((matrixAt[3]*matrixAt[7])-(matrixAt[6]*matrixAt[4]))/detA;
			
			conAt[3]=-((matrixAt[1]*matrixAt[8])-(matrixAt[2]*matrixAt[4]))/detA;
			conAt[4]=((matrixAt[0]*matrixAt[8])-(matrixAt[6]*matrixAt[2]))/detA;
			conAt[5]=-((matrixAt[0]*matrixAt[7])-(matrixAt[6]*matrixAt[1]))/detA;
			
			conAt[6]=((matrixAt[1]*matrixAt[5])-(matrixAt[4]*matrixAt[2]))/detA;
			conAt[7]=-((matrixAt[0]*matrixAt[5])-(matrixAt[2]*matrixAt[3]))/detA;
			conAt[8]=((matrixAt[0]*matrixAt[4])-(matrixAt[3]*matrixAt[1]))/detA;
			
			//resultados
			document.getElementById("resdeta").innerHTML = "INVERSA DE LA MATRIZ A:";
			
			document.getElementById("detA").innerHTML = "DetA = "+detA;
			
			document.getElementById("TAf1").innerHTML = conAt[0]+" "+conAt[1]+" "+conAt[2];
			document.getElementById("TAf2").innerHTML = conAt[3]+" "+conAt[4]+" "+conAt[5];
			document.getElementById("TAf3").innerHTML = conAt[6]+" "+conAt[7]+" "+conAt[8];
			
			//BORRO
			document.getElementById("rescramer").innerHTML = "";
			document.getElementById("x").innerHTML = "";
			document.getElementById("y").innerHTML = "";
			document.getElementById("z").innerHTML = "";
			document.getElementById("detX").innerHTML = "";
			document.getElementById("detY").innerHTML = "";
			document.getElementById("detZ").innerHTML = "";
		}
	}
//MATRIZ TRASPUESTA	
	function TraspuestaA(){
		for(c=0;c<9;c++){
			c++;
			scanf = document.getElementById("MatrixA_"+c).value;
			c--;
			parseInt(scanf);
			matrixA[c]=scanf;
			matrixA[c]=parseInt(matrixA[c]);
		}
		matrixAt[0]=matrixA[0];
		matrixAt[1]=matrixA[3];
		matrixAt[2]=matrixA[6];
		
		matrixAt[3]=matrixA[1];
		matrixAt[4]=matrixA[4];
		matrixAt[5]=matrixA[7];
		
		matrixAt[6]=matrixA[2];
		matrixAt[7]=matrixA[5];
		matrixAt[8]=matrixA[8];
		//resultados
		document.getElementById("resdeta").innerHTML = "TRASPUESTA DE LA MATRIZ A:";
		
		//BORRO
		document.getElementById("detA").innerHTML = "";
		//BORRO
		document.getElementById("rescramer").innerHTML = "";
		document.getElementById("x").innerHTML = "";
		document.getElementById("y").innerHTML = "";
		document.getElementById("z").innerHTML = "";
		document.getElementById("detX").innerHTML = "";
		document.getElementById("detY").innerHTML = "";
		document.getElementById("detZ").innerHTML = "";
		
		document.getElementById("TAf1").innerHTML = matrixAt[0]+" "+matrixAt[1]+" "+matrixAt[2];
		document.getElementById("TAf2").innerHTML = matrixAt[3]+" "+matrixAt[4]+" "+matrixAt[5];
		document.getElementById("TAf3").innerHTML = matrixAt[6]+" "+matrixAt[7]+" "+matrixAt[8];
	}