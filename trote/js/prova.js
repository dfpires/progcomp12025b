function calcularPontuacao(){
    let artistica, pessoas, culturais, livros, equipe, soma = 0
    // entrada de dados
    artistica = Number(document.getElementById("artistica").value)
    pessoas = Number(document.getElementById("pessoas").value)
    culturais = Number(document.getElementById("culturais").value)
    livros = Number(document.getElementById("livros").value)
    equipe = document.getElementById("equipe").value
    // soma a pontuação para todas as equipes
    soma = artistica + (pessoas * 5) + (culturais * 200) + (livros * 10)
    // regras especiais
    if (equipe === "Azul"){
        if (pessoas > 150 && culturais > 3){
            soma = soma + 1000
        }
    }
    else if (equipe === "Amarela"){
            if (livros > 80 && culturais > 6 ){
                soma = soma + ((livros - 80) * 20)
            }
    }
    else if (equipe === "Verde"){
            if (culturais > 5){
                soma = soma + 500
            }
    }
    else { // Rosa
        if (artistica > 90){
            soma = soma + (artistica * 1.5)
        }
    }
    alert(soma)
}