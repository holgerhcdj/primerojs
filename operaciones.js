//Funciones en programación que retornan un resltado
function divir(n1,n2) {
	if(n2!=0){
	    const res=n1/n2;
	    return res;
	}else{
		//es igual a cero
      return 'No se puede dividir para cero 0';
	}

}
const div1=divir(20,5);
alert(div1);




