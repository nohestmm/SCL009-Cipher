

/* inicializando variables */


let printHtml = '';
let btnAccess = document.getElementById("access");
let offset,string,returnCipher,returnDecipher, action; 


btnAccess.addEventListener("click",() => {
  printHtml += '<div class="row"><div class="col-xs-12 col-md-6"><img src="images/logo.jpg"></div><div class="col-xs-12 col-md-6 alert alert-info" role="alert"><p class="instructor"><b>Instrucciones:</b><p><ul class="instructor"><li>Colocar numero de desplazamiento</li><li>Escribir en el textarea los datos a cifrar/descifrar.</li><li>Pulsar boton cifrado o descifrado.</li><li>Visualizar resultado.</li><li>Limpiar campos.</li></div></div>';
  printHtml += '<div class="row"><div class="col-12"><p>Desplazamiento:<input type="number" min="1" max="100" id="offsetCipher" class="textOffset"></p><p class="Error" id="Error1">Debe ingresar un numero entre -100 y 100</p></div></div>';
  printHtml += '<div class="row"><div class="col-xs-12 col-md-6"><p>Ingresa los datos de tu cuenta:</p><textarea id="textCipher" cols="30" rows="8" class="textUp"></textarea>';
  printHtml += '<p class="Error" id="Error2">Debe ingresar una frase</p></div><div class="col-xs-12 col-md-6"><p id="labelResult">Resultado:</p><div class="divResult"><p id="resultCipher"></p></div></div></div>';
  printHtml += '<div class="row"><div class="col-4"><button id="btnCipher" class="btn btn-info">Cifrar</button> </div><div class="col-4"><button class="btn btn-info" id="btnDecipher">Descifrar</button></div><div class="col-4"><button id="clean" class="btn btn-info">Limpiar</button></div></div></div><footer class="centert cursive">Todos los derechos reservados 2019</>';
  
  document.getElementById("container").innerHTML = printHtml;

let btnClean = document.getElementById("clean");
let btnShowC = document.getElementById("btnCipher");
let btnShowD = document.getElementById("btnDecipher");

btnShowC.addEventListener("click",() => {
action = 1;
validationInputCipher();
});


btnShowD.addEventListener("click",() => {
action = 2;
validationInputCipher();
  });
  
btnClean.addEventListener("click",() => {

    document.getElementById("labelResult").innerHTML = "Resultado:";
    document.getElementById("textCipher").value = "";
    document.getElementById("offsetCipher").value = "";
    document.getElementById("resultCipher").innerHTML = "";
    document.getElementById("Error1").style.display = "none";
    document.getElementById("Error2").style.display = "none";
    document.getElementById("offsetCipher").focus();
   
  });
    
});

/* capturando la frase a cifrar*/
const captureCipher = () =>{
 
string = document.getElementById("textCipher").value;
string = string.trim();

/* offset de cifrado*/

offset = parseInt(document.getElementById("offsetCipher").value);

if (action === 1) {
 returnCipher = window.cipher.encode(offset,string); 
 document.getElementById("resultCipher").innerHTML= returnCipher;
 document.getElementById("textCipher").value="";
 document.getElementById("labelResult").innerHTML = "Texto Cifrado:";
}

else if (action === 2) {
  returnDecipher =  window.cipher.decode(offset,string); 
  document.getElementById("resultCipher").innerHTML = returnDecipher;
  document.getElementById("labelResult").innerHTML = "Texto Descifrado:";
  document.getElementById("textCipher").value="";


}

}


const validationInputCipher = () =>{

  let validationPhrase, validationOffset;
  validationPhrase = document.getElementById("textCipher").value;
  validationOffset = document.getElementById("offsetCipher").value;
 

  if (validationPhrase === "" && validationOffset !== ""){
    
    document.getElementById("Error1").style.display = "none";
    document.getElementById("Error2").style.display = "block";
    document.getElementById("resultCipher").value = "";
    document.getElementById("textCipher").focus();
       
  }
    else if (validationPhrase !== "" && validationOffset ===""){
      
    document.getElementById("Error1").style.display = "block";
    document.getElementById("Error2").style.display = "none";
    document.getElementById("resultCipher").value = "";
    document.getElementById("textCipher").focus();
       
  } 
  else if (validationPhrase === "" && validationOffset === ""){
      document.getElementById("Error1").style.display = "block";
      document.getElementById("Error2").style.display = "block";
      document.getElementById("resultCipher").value = "";
     document.getElementById("offsetCipher").focus();
  }
  

  else {
    document.getElementById("Error1").style.display = "none";
    document.getElementById("Error2").style.display = "none";
    
    captureCipher();
  } 
}
  





