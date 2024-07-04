//  Cotação de moedas do dia.
const USD = 4.87
const EUR = 5.32
const GBP = 6.08

// Obtendo os elementos do formulario
const form = document.querySelector("form") //Pega o elemento amount pelo Id
const amount = document.getElementById("amount")
const currency = document.getElementById("currency") // Pega o elemento currency pelo Id
const footer = document.querySelector('main footer')
const description = document.getElementById("description")
const result = document.getElementById("result")
// Manipulando o input amount para receber somente numeros
amount.addEventListener("input", () => {
  
  const hasCharacteresRegex = /\D+/g //verifica caracteres do tipo texto
  
  // O Replace troca o valor passado no primeiro paramentro pelo valor do segundo paramentro.
  amount.value = amount.value.replace(hasCharacteresRegex, "") // atualiza para um novo conteudo sem letra
})

// Capturando o evento de submit do formulario
form.onsubmit = (event) => {
  // Desabilita o comportamento padrão do botão
  event.preventDefault()

  switch (currency.value) {
    case 'USD':
      convertCurrency(amount.value, USD, "US$")
      break;
    case 'EUR':
      convertCurrency(amount.value, EUR, "€")
      break;
    case 'GBP':
      convertCurrency(amount.value, GBP, "£")
      break;
    default:
      break;
  }
}
// Função para converter a moeda
function convertCurrency(amount, price, symbol) {
  try {
    // Exibindo a cotação da moeda selecionada
    description.textContent = `${symbol} 1 = ${price}`

    // Calcula o total
    let total = amount * price

    total = formatCurrencyBRL(total).replace("R$", "")
    // Exibe o resultado total
    result.textContent = `${total} Reais`
    // Aplica a classe que exibe o footer para mostrar o resultado
    footer.classList.add("show-result")

  } catch (error) {
    console.log(error)
    // Remove a classe do footer removendo ele da tela
    footer.classList.remove("show-result")
    alert("Não foi possivel converter. Tente novamente mais tarde.")
  }
}

// Formata a moeda em Real Brasileiro
function formatCurrencyBRL(value) {
  // Converte para numero para utilizar o toLocaleString para formatar no padrão BRL
   return Number(value)
   .toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  })
}