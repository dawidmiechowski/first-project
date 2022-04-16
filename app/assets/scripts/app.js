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
buttons.forEach(b => b.addEventListener("click", getTemp, false));
