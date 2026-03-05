const readline = require("readline-sync")

const Soma = require("./models/Soma")
const Sub = require("./models/Sub")
const Vezes = require("./models/Vezes")
const Divide = require("./models/Divide")

console.log("=== CALCULADORA ===")
console.log("1 - Soma")
console.log("2 - Subtração")
console.log("3 - Multiplicação")
console.log("4 - Divisão")

let opcao = readline.questionInt("Escolha a operacao: ")

let num1 = readline.questionFloat("Digite o primeiro numero: ")
let num2 = readline.questionFloat("Digite o segundo numero: ")

let resultado

if(opcao == 1){
    resultado = new Soma(num1, num2).calcular()
}

else if(opcao == 2){
    resultado = new Sub(num1, num2).calcular()
}

else if(opcao == 3){
    resultado = new Vezes(num1, num2).calcular()
}

else if(opcao == 4){
    resultado = new Divide(num1, num2).calcular()
}

else{
    console.log("Opcao invalida")
}

if(resultado !== undefined){
    console.log("Resultado:", resultado)
}
