var btnTranslate=document.querySelector("#translate-btn");
var txtInput=document.querySelector("#text-input");
console.log(txtInput);

function clickHandler(){
    console.log("clicked")
}

btnTranslate.addEventListener("click", clickHandler())