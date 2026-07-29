let selectedUnit= "Celsius";
function selectUnit(button){
     selectedUnit=button.textContent;
    const buttons = document.querySelectorAll("#unit-selector button");
     buttons.forEach((btn) =>{
      btn.classList.remove("active")
      });
      button.classList.add("active");
}
function conversion() {

    let inputValue = document.getElementById("temp-input").value.trim();

    if (inputValue === "") {
        alert("Enter a temperature");
        return;
    }

    let value = Number(inputValue);

    let celsius, fahrenheit, kelvin;
    if (isNaN(value)) {
    alert("Please enter a valid number.");
    return;
}
if (value > 1000000) {
    alert("Please enter a realistic temperature.");
    return;
}

if (selectedUnit === "Celsius" && value < -273.15) {
    alert("Temperature cannot be below -273.15°C.");
    return;
}

if (selectedUnit === "Fahrenheit" && value < -459.67) {
    alert("Temperature cannot be below -459.67°F.");
    return;
}

if (selectedUnit === "Kelvin" && value < 0) {
    alert("Temperature cannot be below 0 K.");
    return;
}

    if (selectedUnit === "Celsius") {
        celsius = value;
        fahrenheit = (value * 9 / 5) + 32;
        kelvin = value + 273.15;
    }
    else if (selectedUnit === "Fahrenheit") {
        celsius = (value - 32) * 5 / 9;
        fahrenheit = value;
        kelvin = celsius + 273.15;
    }
    else {
        celsius = value - 273.15;
        fahrenheit = (celsius * 9 / 5) + 32;
        kelvin = value;
    }


    localStorage.setItem("celsius", celsius.toFixed(2));
    localStorage.setItem("fahrenheit", fahrenheit.toFixed(2));
    localStorage.setItem("kelvin", kelvin.toFixed(2));

    window.location.href = "converter.html";
}
      
function  resetForm() {
  document.getElementById("temp-input").value= '';
  document.getElementById("celsius").textContent = "";
  document.getElementById("fahrenheit").textContent = "";
  document.getElementById("kelvin").textContent = "";
    
  
  const buttons = document.querySelectorAll("#unit-selector button");
  buttons.forEach(btn => btn.classList.remove("active"));

  selectedUnit = "Celsius";
}

function convertAgain() {
    window.location.href = "index.html";
}
