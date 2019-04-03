/* inicializando variables */
let offsetC,stringCipher , returnCipher,returnDecipher, action; 
let btnShowC = document.getElementById("btnCipher");
let btnShowD = document.getElementById("btnDecipher");
let btnClean = document.getElementById("clean");

/* capturando la frase a cifrar*/
const captureCipher=()=>{
 
stringCipher= document.getElementById("textCipher").value;
stringCipher = stringCipher.toUpperCase().trim();

/* offset de cifrado*/

offsetC = parseInt(document.getElementById("offsetCipher").value);

if (action===1) {
 returnCipher = window.cipher.encode(offsetC,stringCipher); 
 document.getElementById("resultCipher").value = returnCipher;
}

else if (action===2) {
  returnDecipher =  window.cipher.decode(offsetC,stringCipher); 
  document.getElementById("resultCipher").value = returnDecipher;

}


}

/* funcion validar entrada cifrar*/
const validationInputCipher =()=>{

  let validationPhrase, validationOffset;
  validationPhrase = document.getElementById("textCipher").value;
  validationOffset = document.getElementById("offsetCipher").value;


  if (validationPhrase === '' && validationOffset !== ''){
     document.getElementById("Error1").style.display = 'block';
     document.getElementById("Error1").value = '';
     document.getElementById("resultCipher").value = '';
     document.getElementById("textCipher").focus();
       
  }
    else if (validationPhrase !== '' && validationOffset === '' ){
     
     document.getElementById("Error1").style.display = 'none';
     document.getElementById("Error2").style.display = 'block';
     document.getElementById("resultCipher").value = '';
     document.getElementById("offsetCipher").focus();
       
  } 
  else if (validationPhrase === '' && validationOffset === ''){
     document.getElementById("Error1").style.display = 'block';
     document.getElementById("Error2").style.display = 'block';
     document.getElementById("resultCipher").value = '';
     document.getElementById("textCipher").focus();
       
  } else {
    document.getElementById("Error1").style.display = 'none';
    document.getElementById("Error2").style.display = 'none';
    
    captureCipher();} 
}

/* Cual boton fue seleccionado*/
btnShowC.addEventListener("click",()=>{
action = 1;
validationInputCipher();
});
btnShowD.addEventListener("click",()=>{
  action = 2;
  validationInputCipher();
  });


/* funcion limpiar campos cifrar*/
const cleaningCipher = () =>{
   

  document.getElementById("textCipher").value = '';
  document.getElementById("offsetCipher").value = '';
  document.getElementById("resultCipher").value = '';
  document.getElementById("Error1").style.display = 'none';
  document.getElementById("Error2").style.display = 'none';
  document.getElementById("textCipher").focus();
 
  
}

btnClean.addEventListener("click", cleaningCipher);
