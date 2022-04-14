console.log('app.js');

const api_key = '386a2f67d2da471e24a2608d4f4554c8';
const request = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}"

const getTemp = (event) => {
  console.log(event.target.value);
  console.log('getting temp');
}

const buttons = document.querySelectorAll("[name='weather']");

buttons.forEach(b => b.addEventListener("click", getTemp, false) );
