const inputNumber = document.getElementById("input_number");
const inputCurrency = document.getElementById("input_currency");
const outputNumber = document.getElementById("output_number");
const outputCurrency = document.getElementById("output_currency");
const api_key = "exchangerate-api-key";

function calculate(input) {
    const inputCurrencyNow = input ? document.getElementById("input_currency").value : document.getElementById("output_currency").value;
    const outputCurrencyNow = input ? document.getElementById("output_currency").value : document.getElementById("input_currency").value;

    fetch(`https://v6.exchangerate-api.com/v6/${api_key}/latest/${inputCurrencyNow}`)
        .then(value => value.json())
        .then((json) => {
            document.getElementById(input ? "output_number" : "input_number").value = (inputNumber.value * json.conversion_rates[outputCurrencyNow]).toFixed(2);
        })

}


if (inputNumber.value === "") {
    inputNumber.value = 1.00;
    calculate(true);
}

inputNumber.addEventListener('input', function () {
    calculate(true)
});
outputNumber.addEventListener('input', function () {
    calculate(false)
});

inputCurrency.addEventListener('input', function () {
    calculate(true)
});
outputCurrency.addEventListener('input', function () {
    calculate(true)
});


