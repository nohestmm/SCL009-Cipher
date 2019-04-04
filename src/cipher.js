

 let x, cipher1 , deCipher , asciiCode, asciiCodem, exception;
 
 window.cipher = {
 
  
  encode: (offset,string) => {
    cipher1 = '';
    x = 0 ;
    for(let i=0; i<string.length;i++){

      x = string.charCodeAt(i);
     

       if (x === 32 || x === 44 )
        {
          cipher1 = cipher1 + String.fromCharCode(x); 
        }

      
      else if(x >= 65 && x <= 90)
      {asciiCode = (((x - 65) + offset) % 26) + 65;
      
        cipher1 = cipher1 + String.fromCharCode(asciiCode);
      }
  else if (x >= 97 && x<=122)
  {
    asciiCode = (((x - 97) + offset) % 26) + 97;
    cipher1 = cipher1 + String.fromCharCode(asciiCode); 


  }
  else if (string.charAt(i) === 'Ñ' ||string.charAt(i) === 'ñ')
  {
    cipher1 = cipher1 + string.charAt(i);
  }
     
         
    }
      
    return(cipher1);
    
    
  },
  decode: (offset,string) => {
    deCipher = '';
    
    for(let i=0; i<string.length;i++){
      
      x = string.charCodeAt(i); 
    

      if (x === 32 || x === 44)
       {
         deCipher = deCipher + String.fromCharCode(x); 
       }
     else if(x>=65 && x<= 90)
     { 
       asciiCode = (((x + 65) - offset) % 26) + 65; 
       deCipher = deCipher + String.fromCharCode(asciiCode);
     }
     
     else if (x >= 97 && x<=122)
     {
      asciiCode = (((x - 122) - offset) % 26) + 122;
       deCipher = deCipher + String.fromCharCode(asciiCode); 
   
   
     }
     else if (string.charAt(i) === 'Ñ' ||string.charAt(i) === 'ñ')
     {
      deCipher = deCipher + string.charAt(i);
     }

     
   }
    
     return(deCipher); 
     
     
  }
};
