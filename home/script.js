var volume = document.querySelector(".volume");
var sd = document.querySelector(".sd");
var ca = document.querySelector(".ca");
var data = document.querySelector(".data");
var cadastrar = document.querySelector(".cadastrar");

var p = document.querySelector(".pResult")
var p1 = document.querySelector(".pResult1")
var p2 = document.querySelector(".pResult2")
var p3 = document.querySelector(".pResult3")
var p4 = document.querySelector(".pResult4")

// function validarDados() {
// if(volume.value == "" || sd.value == "" || ca.value == "" || data.value == "" || volume.value == ""){
//  alert("preencha todos os campos")
//  return false
// }
// return true
// }

function chamar() {
  
   
        p.innerHTML = volume.value;
        p1.innerHTML = sd.value;
        p2.innerHTML = ca.value;
        p3.innerHTML = data.value;
        p4.innerHTML = volume.value;
        console.log("ok")
    
};


