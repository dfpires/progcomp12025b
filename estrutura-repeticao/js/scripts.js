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