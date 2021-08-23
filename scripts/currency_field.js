const inputNumber = document.getElementById("input_number");
const inputCurrency = document.getElementById("input_currency");
const outputNumber = document.getElementById("output_number");
const outputCurrency = document.getElementById("output_currency");
const api_key = "api_key_here";

function calculate(input) {
    const inputCurrencyNow = input ? inputCurrency.value : outputCurrency.value;
    const outputCurrencyNow = input ? outputCurrency.value : inputCurrency.value;

    fetch(`https://v6.exchangerate-api.com/v6/${api_key}/latest/${inputCurrencyNow}`)
        .then(value => value.json())
        .then((json) => {
            const value = (inputNumber.value * json.conversion_rates[outputCurrencyNow]).toFixed(2);
            if (input)
                outputNumber.value = value;
            else inputNumber.value = value;
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


