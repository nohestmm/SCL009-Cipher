

 let x, cipher1 , deCipher , asciiCode;
 
 window.cipher = {
 
  
  encode: (offset,string) => {
    cipher1 = '';
    for(let i=0; i<string.length;i++){

      x = string.charCodeAt(i);
     
       if (x === 32 || x === 44)
        {
          cipher1 = cipher1 + String.fromCharCode(x); 
        }
      else {
        asciiCode = ((x - 65 + offset) % 26) + 65; 
        cipher1 = cipher1 + String.fromCharCode(asciiCode);
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
     else {
      asciiCode = ((x + 65 - offset) % 26) + 65; 
      
      deCipher = deCipher + String.fromCharCode(asciiCode);
     }
     
   }
    
     return(deCipher); 
     
     
  }
};
