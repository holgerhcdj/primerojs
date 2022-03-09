const base=prompt("Ingrese la base");
if(isNaN(base)){
   alert("La base no es un numero");
}else{ //si es un numero
    if(base<=0){
       alert("La base debe ser mayor a 0");
    }else{
    	  const altura=prompt("Ingrese la altura");
          if(isNaN(altura)){
              alert("La altura no es un número válido");
          }else{
          	  if(altura<=0){
                 alert("La altura debe ser mayor a 0");
          	  }else{
                   const area=base*altura/2;
                   alert(`El area es: ${area} `);
          	  }
          }
    }
}
