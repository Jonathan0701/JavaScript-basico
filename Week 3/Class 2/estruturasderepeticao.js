/*
const painel = document.getElementById('painel');


let flag = true;
let contador = 0
let resultado

while(flag){
    if(contador<12){
        console.log("trabalhando...")
        contador++;
        texto = "trabalhando"
        let resultado = document.createTextNode(texto);
        painel.appendChild(resultado);

    }else{
flag = false;

    }
    

}

*/
for(let x=0 ; x<20 ; x+=2){
    let resultado = document.createTextNode(x=" ");

    painel.appendChild(resultado)

}


