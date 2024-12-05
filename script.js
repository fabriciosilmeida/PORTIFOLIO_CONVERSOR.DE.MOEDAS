// Seletor de moedas
const currrencySelect = document.querySelector("#currency-select")
currrencySelect.addEventListener("change", changeCurrency)

function changeCurrency(){
    const currencyImgConverted = document.querySelector("#currency-img-converted")
    const currencyNameConverted =  document.querySelector("#currency-name-converted")

    switch (currrencySelect.value) {
        case "US":
            currencyImgConverted.src        = "./assets/img/dolar.png" 
            currencyNameConverted.innerHTML = "Dólar Americano"
            break;
        
        case "EU":
            currencyImgConverted.src        = "./assets/img/euro.png"
            currencyNameConverted.innerHTML = "Euro"
        break;
    }

    convertValues()
}

// Botao de acinomento para converter moedas
const convertButton = document.querySelector("#convert-button")
convertButton.addEventListener("click", convertValues)

// Codigo para converção de moedas
function convertValues() {
    const inputCurrencyValue = document.querySelector("#input-currency").value
    const currencyValueToConvert = document.querySelector("#currency-value-to-convert")
    const currencyValueConverted = document.querySelector("#currency-value-converted")

    const dolarToday = 6.04
    const euroToday  = 6.36

    // Valor de representação do Real Brasileiro
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

    switch (currrencySelect.value) {
        case "US": // Valor de representação do dolar
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue / dolarToday)
            break;

        case "EU": // Valor de representação do euro
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue / euroToday)
            break;
    }
}