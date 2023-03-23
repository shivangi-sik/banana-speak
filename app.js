
var btnTranslate= document.querySelector('#btn-translate');
var textInput=document.querySelector("#txt-input");
var liveOutput=document.querySelector("#output");

var serverUrl="https://api.funtranslations.com/translate/minion.json";
function getTranslationUrl(input)
{
    return serverUrl + "?"  + "text=" +input
}
function errorHandler(error)
{
    console.log("error occured" +error);
    alert("something wrong with the server, try again later!");
}
function clickHandler()
{
var inputText= textInput.value;
fetch(getTranslationUrl(inputText))
.then(response=>response.json())
.then(json=>{
    var translatedText=json.contents.translated;
    liveOutput.innerText=translatedText;
})
.catch(errorHandler)
}
btnTranslate.addEventListener("click", clickHandler)
