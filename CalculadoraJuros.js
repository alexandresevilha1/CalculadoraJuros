import input from 'readline-sync'; //import do readline



let preco //variaveis para a operação            
let dias
let juros
let valor_juros
let resultado

preco = input.question("Informe o valor devido: ") //entrada de dados do valor
    if (preco <= 0){ //condição para continuar
        console.log("O valor devido precisa ser maior que 0")
 } else { //continuação
    dias = input.question("Informe quantos dias se passaram desde o vencimento do boleto: ") //entrada de dados dos dias
    if(dias <= 0){ //condição para continuar
        console.log("Os dias precisam ser maior que 0")
} else { //continuação
    if (dias >= 15) { //condição para decretar os juros
        juros = 10
    } else {
        juros = 5
    }

    valor_juros = (preco / 100) * juros //Calculo do juros

    resultado = Number(preco) + valor_juros //resultado do calculo
    
    console.log("\n\n\nValor original da divida: R$ "+preco) //saida de dados
    console.log("Dias atrasados: "+dias)
    console.log("Taxa de juros: "+juros+"%")
    console.log("Valor total com juros: R$"+resultado)
     }
}





