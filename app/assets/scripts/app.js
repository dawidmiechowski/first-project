const api_key = '75687d9016782b963ffcb6dc0ffd382e';
const getTemp = async (event) => {
  const button = event.target;
  const coords = JSON.parse(button.value)
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords[0]}&lon=${coords[1]}&appid=${api_key}&units=metric`
  console.log(url)

  const response = await fetch(url);
  const json = await response.json();

  button.innerHTML = json.main.temp;
}

const buttons = document.querySelectorAll("[name='weather']");
buttons.forEach(b => b.addEventListener("click", getTemp, checkTemp, false));

function checkTemp(){
  if (temp >= 0 && temp <= -5){
    tempClass = not-cold-at-all;
  } else if (temp >= -5 && temp <= -10){
    tempClass = slightly-cold;
  } else if (temp >= -10 && temp <= -15){
    tempClass = modertaly-cold;
  } else if (temp >= -15 && temp <= -25){
    tempClass = very-cold;
  } else if (temp >= -25 && temp <= -45){
    tempClass = extremely-cold;
  } else if (temp >= 0 && temp <= 5){
    tempClass = not-warm-at-all;
  } else if (temp >= 10 && temp <= 15){
    tempClass = slightly-warm;
  } else if (temp >= 15 && temp <= 25){
    tempClass = very-warm;
  } else if (temp >= 25 && temp <= 45){
    tempClass = extremely-warm;
  }
}

function allFunctions(){
  getTemp();
  checkTemp();
}