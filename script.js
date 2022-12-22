
function contar(){
let ini = document.getElementById('txti')
let fim = document.getElementById('txtf')
let passo = document.getElementById('txtp')
let res = document.getElementById('res')
// os nomes que estão entre parânteses correspondem aos Id's do HTML
//Primeira coisa: verificar se os dados estão faltando
    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
    window.alert('[ERRO] Faltam dados')
    }else{
        res.innerHTML = 'contando: '
        let i = Number(ini.value)//Pegar o valor que está contido em "ini" e converter para um número
        let f = Number(fim.value)//pegar o valor que está contido em "fim" e converter para um número
        let p = Number(passo.value) //pegar o valor que está contido em "passo" e converter para um número
        //contar do inicio para o fim somando com o passo:
        if(i < f){
            //contagem crescente
            for(let c = i; c <= f; c += p) {  // o contador vai comecar no inicio e enquanto o contador for menor ou igual ao fim,  o contador vai receber ele mesmo mais o passo
                res.innerHTML += `${c} \u{1F449}`
            }

        } else { 
            //contagem regressiva
            for(let c = i; c >= f; c -= p ){ // começar do inicio, enquanto o contador for mair ou igual ao fim, o contador vai perder o passo
                res.innerHTML += `${c} \u{1F449}`
            }
         
        }
        res.innerHTML += `${c} \u{1FC1}`
    
    }
}


