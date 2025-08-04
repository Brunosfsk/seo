var input = document.querySelector(".meta-description");
var palavraChave = document.querySelector(".palavra_chave");
var counter = document.querySelector(".counter");
var numberWords = document.querySelector(".words");
var keyword;
var count = 0

function definirCor(cor) {
    counter.style.color = cor
}

input.addEventListener("input", () => {
     
    count = input.value.length;
    counter.textContent = `contador ${count}`

   if(count >= 10){
    definirCor("red")
   } else if(count <= 3){
    definirCor("yellow")
   } else{
    definirCor("green")
   }
    
 });

 function chamar() {
     var words = input.value.trim().split(/\s+/);
     console.log(words)
     console.log(palavraChave.value)

     keyword = words.filter( (item) =>{
      
      if(item === palavraChave.value){
          return true;
      } else {
          return false;
      }

      });
      console.log(keyword)
      vai(keyword)
 }

 function vai(){
    numberWords.innerHTML = `${keyword.length} palavras ${palavraChave.value}` ;
    // numberWords.appendChild = `foi ${keyword}`;
 }

 



