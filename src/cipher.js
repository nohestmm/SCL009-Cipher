

 let x, cipher1 , deCipher , asciiCode;

 window.cipher = {
 
  
  encode: (offset,string) => {
    cipher1 = '';
   
  
    for(let i=0; i<string.length;i++){

      x = string.charCodeAt(i);
     

       if (x === 32 || x === 45 || x === 46 || x=== 95 )
        {
          cipher1 += String.fromCharCode(x); 
        }
    
      else if(x >= 65 && x <= 90)
      {
        if (offset >= 0){
        asciiCode = ((x - 65 + offset) % 26) + 65;
      
        cipher1 += String.fromCharCode(asciiCode);
        }
       else if (offset < 0){
 
    asciiCode = ((x - 90 + offset )% 26) + 90; 
    cipher1 += String.fromCharCode(asciiCode);
  
}

      }
  else if (x >= 97 && x<=122)
  {
    if (offset >= 0){
    asciiCode = ((x - 97 + offset) % 26) + 97;
    cipher1 += String.fromCharCode(asciiCode); 
    }

    else if (offset < 0){

      asciiCode = ((x - 122 + offset )% 26) + 122; 
      cipher1 += String.fromCharCode(asciiCode);
    }

  }
  else if (x >= 48 && x<= 57){
    if (offset >= 0){
      asciiCode = ((x - 48 + offset) % 10) + 48;
      cipher1 += String.fromCharCode(asciiCode); 
      }
  
      else if (offset < 0){
  
        asciiCode = ((x - 57 + offset )% 10) + 57; 
        cipher1 += String.fromCharCode(asciiCode);
      }
  
  }


  else if (string.charAt(i) === 'Ñ' ||string.charAt(i) === 'ñ')
  {
    cipher1 += string.charAt(i);
  }
     
         
    }
      
    return(cipher1);
    
    
  },
  decode: (offset,string) => {
    deCipher = '';


    
    for(let i=0; i<string.length;i++){
      
      x = string.charCodeAt(i); 
    

      if (x === 32 || x === 45 || x === 46 || x=== 95 )
       {
         deCipher += String.fromCharCode(x); 
       }
     else if(x>=65 && x<= 90)
     { if (offset >= 0){

       asciiCode = ((x - 90- offset) % 26) + 90; 
       deCipher += String.fromCharCode(asciiCode);
     }

     else if  (offset < 0){

      asciiCode = ((x - 65 - offset) % 26) + 65;
      
      deCipher += String.fromCharCode(asciiCode);

     }
     }
     
     else if (x >= 97 && x<=122)
     { 
       if (offset>=0){
      asciiCode = ((x - 122- offset) % 26) + 122;
       deCipher += String.fromCharCode(asciiCode); 
     }
     else if (offset<0){
      asciiCode = ((x - 97 - offset) % 26) + 97;
      deCipher += String.fromCharCode(asciiCode); 

     }

        }

        else if (x >= 48 && x<= 57){
          if (offset >= 0){
            asciiCode = ((x - 57 - offset) % 10) + 57;
            deCipher += String.fromCharCode(asciiCode); 
            }
        
            else if (offset < 0){
        
              asciiCode = ((x - 48 - offset )% 10) + 48; 
              deCipher += String.fromCharCode(asciiCode);
            }
        
        }   



     else if (string.charAt(i) === 'Ñ' ||string.charAt(i) === 'ñ')
     {
      deCipher += string.charAt(i);
     }

     
   }
    
     return(deCipher); 
     
     
  }
};
