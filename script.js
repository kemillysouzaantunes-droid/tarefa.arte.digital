const botoesCurtir = document.querySelectorALL(".curtir");
botoesCurtir.forEach(function(botaoCurtir){
      let curtiu = false; 
      botaoCurtir.addEventLstener("click", curtir);
   function curtit() { 
       const contador = botaoCurtir.querySelector("span");
       if(curtiu === false){
           contador.textContent++;
           curtiu = true; }
           else{
                contador.textContent--;
                curtiu = false;
           }
 }
});


