## Soma de Múltiplos de 3 ou 5 de um valor n-1 

Este código JavaScript é responsável por calcular a soma dos números que são múltiplos de 3 ou 5, dentro de um limite n-1 determinado pelo usuario. Ele realiza essa operação após o clique do botao 'Calcular' na pagina HTML.

### Funcionamento

1. **Obtendo Elementos do Documento:**
   - O código inicia obtendo elementos HTML do documento usando document.getElementById() para o botão de cálculo (btnCalculate), a entrada de texto do usuário (userInput), o local onde o resultado será exibido (outputResult) e um alerta de erro (alert).

2. **Evento de Clique no Botão:**
   - Quando o botão é clicado (btnCalculateElement.onclick), uma função é executada.

3. **Validação de entrada do Usuário:**
   - O código verifica se nenhum valor for digitado ou se o valor for menor ou igual a zero, se verdadeiro uma mensagem de erro é exibida no alerta.

4. **Cálculo da Soma de Múltiplos de 3 ou 5:**

   - A função somarMultiplos() calcula a soma dos números que são múltiplos de 3 ou 5 dentro do limite fornecido.
   - O resultado da soma dos números é exibido no HTML (outputResult.textContent).

5. **Limpeza do Input e Foco:**
   - Após a execução, o campo de entrada (userInput) é limpo e recebe o foco novamente para permitir uma nova entrada do usuário.

### Função somarMultiplos()

A função somarMultiplos(n-1) itera em todos os números n-1 e acumula a soma dos números que são múltiplos de 3 ou 5.
  - soma: Variável para armazenar a soma dos números encontrados.
  - A função itera sobre todos os números de 1 até n- 1.
  - Verifica se cada número é divisível por 3 ou por 5 usando o operador %.
  - Se o número for divisível por 3 ou por 5, ele é somado à variável soma.
  - Ao final da iteração, a função retorna o valor da soma total.

### Como Utilizar

Para usar este código, é necessario abrir o arquivo index.html na pasta atual através de um navegador, por exemplo, google chrome. Não pode ser removido nenhum arquivo da pasta.

Os passos para utilização são:
1. Digitar um número inteiro positivo no campo de entrada (userInput).
2. Clicar no botão de cálculo (btnCalculate).
3. O resultado da soma dos múltiplos de 3 ou 5 até o número n-1 será exibido no (outputResult).
