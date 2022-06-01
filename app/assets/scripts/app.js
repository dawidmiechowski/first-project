const api_key = '75687d9016782b963ffcb6dc0ffd382e'; 
const getTemp = async (event) => {
  const button = event.target;
  const coords = JSON.parse(button.value)
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords[0]}&lon=${coords[1]}&appid=${api_key}&units=metric`
  console.log(url)

  const response = await fetch(url);
  const json = await response.json();
  const temp = json.main.temp;

  const stringTemp = convertTempToStringGrade(temp)
  console.log("." + stringTemp);

  button.dataset.temperature = stringTemp 

  button.innerHTML = temp;
}

const buttons = document.querySelectorAll("[name='weather']");
buttons.forEach(b => b.addEventListener("click", getTemp, false));

function between(x, min, max) {
  return x >= min && x <= max;
}

function convertTempToStringGrade(temp){
  const temperatures = [
    ["extremely-cold", -200, -25],
    ["very-cold", -25, -15],
    ["moderately-cold", -15, -10],
    ["slightly-cold", -10, -5],
    ["not-cold-at-all",-5, 0],
    ["not-warm-at-all", 0,5],
    ["slightly-warm", 5, 10],
    ["moderately-warm", 10, 15],
    ["very-warm", 15,25],
    ["extremely-warm", 25, 49],
    ["extremely-hot", 49, 200]
  ]

  for(i in temperatures){
    const t = temperatures[i]
    if (between(temp, t[1], t[2]))
      return t[0]

  }

}

const tempTests = [
  [-3, 'not-cold-at-all'],
  [-7, 'slightly-cold'],
  [-10, 'moderately-cold'],
  [-12, 'moderately-cold'],
  [-20, 'very-cold'],
  [-27, 'extremely-cold'],
  [-50, 'extremely-cold'],
  [49, 'extremely-warm'],
  [50, 'extremely-hot'],
  [3, 'not-warm-at-all'],
  [7, 'slightly-warm'],
  [12, 'moderately-warm'],
  [20, 'very-warm'],
  [15.85, 'very-warm']
]


tempTests.forEach(test => {
    const result = convertTempToStringGrade(test[0])
    console.assert(result === test[1], `expected ${test[0]} to be ${test[1]}`)
  }
)

console.assert(convertTempToStringGrade(-3)  === 'not-cold-at-all', 'not-cold-at-all')
console.assert(convertTempToStringGrade(-7) === 'slightly-cold', 'slightly-cold')
console.assert(convertTempToStringGrade(-10) === 'moderately-cold', 'for -10 expected moderately-cold')
console.assert(convertTempToStringGrade(-12) === 'moderately-cold', 'moderately-cold')
console.assert(convertTempToStringGrade(-20) === 'very-cold', 'very-cold')
console.assert(convertTempToStringGrade(-50) === 'extremely-cold', 'extremely-cold')
console.assert(convertTempToStringGrade(3)  === 'not-warm-at-all', 'not-warm-at-all')
console.assert(convertTempToStringGrade(7) === 'slightly-warm', 'slightly-warm')
console.assert(convertTempToStringGrade(12) === 'moderately-warm', 'moderately-warm')
console.assert(convertTempToStringGrade(20) === 'very-warm', 'very-warm')
