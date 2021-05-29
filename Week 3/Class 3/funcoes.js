



const painel = document.getElementById('painel');

let texto=''

let numero1=30, numero2=10

//função com parâmetros de retorno
function soma(variavel1,variavel2){
    return variavel1 + variavel2;


}

function endereco(){
    return "Av beira mar 212";

}

function olamundo(){
    console.log("ola mundo")

}

olamundo();

texto = endereco();

texto = soma(numero1,numero2);
const resultado = document.createTextNode(texto);
painel.appendChild(resultaado);