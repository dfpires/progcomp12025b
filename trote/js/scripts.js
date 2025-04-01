function calcular(){
     // declaração variável sem tipo
    let soma = 0
    // recupera o valor da ação social digitado
    let acaoSocial = document.getElementById("acaoSocial").value
    soma = soma + Number(acaoSocial)
    // recupera o valor da homenagem digitado
    let homenagem = document.getElementById("homenagem").value
    soma = soma + Number(homenagem)
    // recupera a qtde de litros de leite
    let leite = document.getElementById("leite").value
    soma = soma + (2 * Number(leite))
    // recupera a qtde de kits 
    let kit = Number(document.getElementById("kit").value)
    // recupera a cor da equipe
    let equipe = document.getElementById("equipe").value
     // recupera a qtde de latas de suplemento
    let suplemento = document.getElementById("suplemento").value
    let pontosKitSupl = 0 // guarda pontuação de kit + supl
    if (equipe == "Laranja"){
        // equipe é laranja
        if (kit >= 97 && suplemento >= 49) {
            pontosKitSupl = 5000 + ((kit - 97) * 30) + ((suplemento - 49) * 15)
        }
        else if (kit >= 78){
            pontosKitSupl = 4000 + ((kit - 78) * 30)
        }
        else if (kit >= 49) {
            pontosKitSupl = 2500 + ((kit - 49) * 30)
        }
        else if (kit >= 19){
            pontosKitSupl = 1000 + ((kit - 19) * 30)
        }
        else {
            pontosKitSupl = (kit * 30)
        }
    }
    alert(pontosKitSupl)
    soma = soma + pontosKitSupl
   
    // devolve o resultado para o HTML
    document.getElementById("soma").innerHTML = soma.toFixed(2)
}