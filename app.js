var inputText=document.querySelector("#translate-text")
var translateText=document.querySelector("#user-input")
var out=document.querySelector("#output")
var serverURL="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function getTranslationURL(text){
    return serverURL + "?" + text
}
function clickHandler(){
    var input = inputText.value;
    fetch(getTranslationURL(input))
        .then(response=>response.json)
        .then(json=>console.log(json))
}
translateText.addEventListener("click", clickHandler)