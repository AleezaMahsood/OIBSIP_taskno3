// JavaScript
const input = document.querySelector("#temp");
const tempOption = document.querySelector("#temp-type");
const result = document.querySelector("#result");
const convertBtn = document.querySelector("#convert-btn");

const card = document.querySelector("#card");

  convertBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const temperature = parseFloat(input.value);

    if (tempOption.value === "celsius") {
      result.innerHTML = `<strong>Result:</strong> ${temperature}°C is ${toFahrenheit(temperature)} °F`;
    } else if (tempOption.value === "fahrenheit") {
      result.innerHTML = `<strong>Result:</strong> ${temperature}°F is ${toCelsius(temperature)} °C`;
    } else {
      result.innerHTML = `<strong>Result:</strong> ${temperature}K is ${toCelsius(temperature)} °C`;
    }
    card.classList.add("expanded");
  });

function toCelsius(temperature) {
  // Convert temperature to Celsius
  let celsius = (temperature - 32) * 5 / 9;
  return celsius.toFixed(2); // Round to 2 decimal places
}

function toFahrenheit(temperature) {
  // Convert temperature to Fahrenheit
  let fahrenheit = (temperature * 9) / 5 + 32;
  return fahrenheit.toFixed(2); // Round to 2 decimal places
}

function toKelvin(temperature) {
  // Convert temperature to Kelvin
  let kelvin = temperature + 273.15;
  return kelvin.toFixed(2); // Round to 2 decimal places
}
