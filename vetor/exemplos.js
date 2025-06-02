function exe1(){
    let vet = []
    for(let i=0;i<6;i++){
        vet.push(Number(prompt(`Informe o ${i+1}o. número`)))
    }
    // fazer o cálculos
    let pares = [], impares = []
    for(let i=0;i<6;i++){
        if (vet[i] % 2 == 0){
            pares.push(vet[i])
        }
        else {
            impares.push(vet[i])
        }
    }
    alert(`Temos ${pares.length} elementos pares: ${pares}`)
    alert(`Temos ${impares.length} elementos ímpares: ${impares}`)
}
// ler um vetor de 10 elementos inteiros. 
// Some 10 nos elementos das posições pares
// Multiplique por 5 nos elementos das posições ímpares