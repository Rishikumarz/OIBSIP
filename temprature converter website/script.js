function converter() {
  const inputBox = document.getElementById('input-box');
  const resultBox = document.getElementById('result-box');
  const inputDropdown = document.getElementById('input-dropdown');
  const resultDropdown = document.getElementById('result-dropdown');

  const inputValue = parseFloat(inputBox.value);
  const inputUnit = inputDropdown.value;
  const resultUnit = resultDropdown.value;

  if (isNaN(inputValue)) {
    resultBox.value = 'Invalid Input';
    return;
  }

  let resultValue = inputValue;

  // Conversion to Celsius
  if (inputUnit === 'Fahrenheit') {
    resultValue = (inputValue - 32) * 5 / 9;
  } else if (inputUnit === 'Kelvin') {
    resultValue = inputValue - 273.15;
  }

  // Conversion from Celsius
  if (resultUnit === 'Fahrenheit') {
    resultValue = (resultValue * 9 / 5) + 32;
  } else if (resultUnit === 'Kelvin') {
    resultValue = resultValue + 273.15;
  }

  resultBox.value = resultValue.toFixed(2);
}
