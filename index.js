const btnCalculateElement = document.getElementById('btnCalculate')
const alertElement = document.getElementById('alert')

// executa a função quando o botão é clicado
btnCalculateElement.onclick = function(event) {
  const userInput = document.getElementById('userInput')
  const outputResult = document.getElementById('outputResult')
 
  const value = parseInt(userInput.value)

  // limpa o texto do alerta e remove a classe alert do css 
  alertElement.textContent = ""
  alertElement.removeAttribute('class', 'alert')

  // cria um alerta na tela, caso o usuário não informe um número válido
  if (!value) {
    mostrarAlerta("Nenhum valor foi digitado!")
  }
  // cria um alerta na tela informando que o número não pode ser negativo
  if (value <= 0) {
    mostrarAlerta("O valor deve ser um inteiro positivo!")
  }

  // em caso de sucesso, insere o resultado na tela
  outputResult.textContent = somarMultiplos(value)

  userInput.value = ""
  userInput.focus()
}

function mostrarAlerta(mensagem){
  alertElement.textContent = mensagem
  alertElement.setAttribute('class', 'alert')
}

// processa o valor retornando a soma dos números multiplos
function somarMultiplos(numeroLimite) {
  let soma = 0

  for (let numero = 0; numero < numeroLimite; numero++) {
    if (numero % 3 === 0 || numero % 5 === 0) {
      soma += numero
    }
  }

  return soma
}