function exe0(){
    let nota // guarda as notas
    let conta = 1 // conta de 1 a 6
    let soma = 0
    while (conta <= 6){
        nota = Number(prompt(`Informe a nota ${conta}`))
        soma = soma + nota
        conta++ // conta = conta + 1
    }
    let media = soma / 6
    // mostra o resultado
     alert(`A média das notas é ${media.toFixed(1)}`)
}
function pesquisaSatisfacao(){
    let conta = 1 // varia de 1 a 10
    let nota // será informado pelo usuário
    let contaSatisfeitos = 0 // inicialmente, nenhum satisfeito
    let contaInsatisfeitos = 0 // inicialmente, nenhum insatisfeito
    let soma = 0 // inicialmente, soma é 0
    while (conta <= 10){
        nota = Number(prompt(`Informe a nota (0 a 10) do participante ${conta}`))
        if (nota >= 8 && nota <= 10){
            contaSatisfeitos++ // contaSatisfeitos = contaSatisfeitos + 1
        }
        else if (nota >=0 && nota < 5){
            contaInsatisfeitos++ // contaInsatisfeitos = contaInsatisfeitos + 1
        }
        else if (nota < 0 || nota > 10){ // || é OU
            alert(`Nota inválida`)
            continue // volta para o início, sem incrementar conta
        }
        soma += nota // soma = soma + nota
        conta++ // conta = conta + 1
    }
    alert(`Satisfeitos ${contaSatisfeitos} \n 
           Insatisfeitos ${contaInsatisfeitos} \n 
           Média das notas ${(soma/10).toFixed(2)}`)
}
function exe3(){
    let conta = 1, idade, f1 = 0, f2 = 0, f3 = 0, f4 = 0, f5 = 0
    while (conta <= 8){
        idade = Number(prompt(`Informe idade da pessoa ${conta}`))
        if (idade >= 0 && idade <= 15){
            f1++;
        }
        else if (idade >= 16 && idade <= 30){
            f2++
        }
        else if (idade >= 31 && idade <= 45){
            f3++
        }
        else if (idade >= 46 && idade <= 60){
            f4++
        }
        else if (idade >= 61 && idade < 130){
            f5++
        }
        else {
            alert(`Idade é inválida`)
            continue
        }
        conta++
    }
    alert(`F1 ${f1} F2 ${f2} F3 ${f3} F4 ${f4} F5 ${f5} %F1 ${f1/8*100} $F5 ${f5/8*100}`)
}
function exe1(){
    let a, b, c, d, aux
    let grupo = 1
    while (grupo <= 5){
        let conta = 1
        a = Number(prompt(`Informe o valor de A`))
        b = Number(prompt(`Informe o valor de B`))
        c = Number(prompt(`Informe o valor de C`))
        d = Number(prompt(`Informe o valor de D`))
        while (conta <= 3){
            if (a > b){
                aux = a; a = b; b = aux
            }
            if (b > c){
                aux = b; b = c; c = aux
            }
            if (c > d){
                aux = c; c = d; d = aux
            }
            conta++
        }
        alert(`Ordem crescente ${a} ${b} ${c} ${d}`)
        alert(`Ordem decrescente ${d} ${c} ${b} ${a}`)
        grupo++
    }
}
function exe2(){
    let preco = 5.0
    let qtde = 120
    let lucro
    const despesa = 200
    let aux = ""
    let maiorLucro = 0, precoMaiorLucro = 0, qtdeMaiorLucro = 0
    while (preco >= 1.0){
        lucro = (preco * qtde) - despesa
        if (lucro > maiorLucro){
            maiorLucro = lucro
            precoMaiorLucro = preco
            qtdeMaiorLucro = qtde
        }
        aux = aux + "\n" + (`Preço: ${preco} - Qtde: ${qtde} - Despesa: ${despesa} - Lucro: ${lucro}`)
        preco = preco - 0.50
        qtde = qtde + 26
    }
    alert(aux)
    alert(`Maior Lucro ${maiorLucro} com preço ${precoMaiorLucro} e qtde ${qtdeMaiorLucro}`)
}
function exe4(){
    let numero = Number(prompt(`Informe o número da tabuada`))
    // estrutura de repetição com o for
    for(let conta = 1; conta <= 10; conta++){
        console.log(`${numero} x ${conta} == ${numero*conta}`)
    }
}
function exe5(){
    for(let conta1 = 1; conta1 <= 10; conta1++){
        for(let conta2 = 1; conta2 <= 10; conta2++){
            console.log(`${conta1} x ${conta2} == ${conta1 * conta2}`)
        }
    }
}

function exe6(){
    let valor, codigo, totalVista = 0, totalPrazo = 0
    for(let conta=1;conta<=5;conta++){
        do {
            codigo = prompt(`Informe o código V (à vista) ou P (à prazo)`).toUpperCase()
        }
        while (codigo != 'V' && codigo != 'P')
        do {
            valor = Number(prompt(`Informe o valor positivo`))
        }
        while (valor < 0)
        if (codigo == 'V'){
            totalVista = totalVista + valor
        }
        else { // código é P
            totalPrazo = totalPrazo + valor
        }
    }
    alert(`Total a Vista ${totalVista} Total a Prazo ${totalPrazo}`)
    alert(`Total geral ${totalPrazo + totalVista} e 1a. parcela ${totalPrazo/3}`)
}

function exe7(){
    let idade, peso, altura, qtdeIdade50Mais = 0, qtdeIdadeEntre10e20 = 0
    let somaAltura = 0, qtdePesoMenor40 = 0
    for(let conta=1;conta<=5;conta++){
        do{
            idade = Number(prompt(`Informe idade`))
        }
        while (idade < 0)
        do{
            peso = Number(prompt(`Informe peso`))
        }
        while (peso < 0)  
        do{
            altura = Number(prompt(`Informe altura`))
        }
        while (altura < 0)       
        // qts pessoas idade > 50
        if (idade > 50){
            qtdeIdade50Mais++
        }
        // média das alturas das pessoas idade entre 10 e 20
        if (idade >= 10 && idade <= 20){
            somaAltura = somaAltura + altura
            qtdeIdadeEntre10e20++
        } 
        if (peso < 40){
            qtdePesoMenor40++
        }
    }
    alert(`Item 1. ${qtdeIdade50Mais}`)
    // verificar se o divisor é diferente de zero
    alert(`Item 2. ${somaAltura/qtdeIdadeEntre10e20 || 0} `)
    alert(`Item 3. ${qtdePesoMenor40 / 5 * 100}`)
}