// ### Calculadora Simples (2 pontos)

// **Enunciado:**

// Crie uma função chamada Calcular, que recebe dois números e uma operação matemática (`+`, `-`, `*`, `/`). A função deve:

// - Retornar `"Erro: parâmetros inválidos"` se `a` ou `b` não forem números.
// - Retornar `"Erro: divisão por zero"` se tentar dividir por zero;
// - Retornar `"Erro: operação inválida"` se for passado um operador desconhecido;
// - Executar a operação correta e retornar o resultado;

function calcular(num1, num2, operador) {
    if (isNaN(num1) == false || isNaN(num2 == false)){
      switch (operador){
        case "+":
            return num1 + num2
            break
        case "-":
            return num1 - num2
            break
        case "*":
          return num1 * num2
          break
        case "/":
          if(num2 == 0){
            return "Erro: divisão por zero"
          }
          else{
            return num1/num2
            break
          }
          default:
            return "Erro: operação inválida"
            break
      }
    }
    else{
      return "Erro: parâmetros inválidos"
      
    }
   
 
  
}


//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { calcular };