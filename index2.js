function displayTemp(response) {
  let temperatureElement = document.querySelector("#current-temperature");
  let temperature = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = temperature;
  
  //update humidity, wind speed etc.
  let humidityE = document.querySelector("#current-humidity");
  let humidity = response.data.temperature.humidity;
  humidityE.innerHTML = humidity;

  let windE = document.querySelector("#current-wind");
  let wind = response.data.wind.speed;
  windE.innerHTML = wind;

  let descriptionE = document.querySelector("#current-description");
  let description = response.data.condition.description;
  descriptionE.innerHTML = description;

}

//update other functions
function displayWeekTemp(response) {



  let DOW = [
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday"
  ];

};

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let CITY = searchInput.value;

  let apiKEY = "b2a5adcct04b33178913oc335f405433";
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${CITY}&key=${apiKEY}&units=metric`;

  
  axios.get(apiURL).then(displayTemp);

  let apitest=`https://api.shecodes.io/weather/v1/current?query=mecca&key=b2a5adcct04b33178913oc335f405433
  &units=metric`
  let apiKEY2 = "6a00870472d2c052717d24a00e219b30";
  let apitest2 =`https://api.openweathermap.org/data/2.5/forecast?q=medina&appid=4cfa399d06e08b942bfd00c1eded43e4`;
  let apitest3 =`https://api.openweathermap.org/data/2.5/forecast?q=medina&appid=6a00870472d2c052717d24a00e219b30&units=metric`;
  let apiURL2=`https://api.openweathermap.org/data/2.5/forecast?q=${CITY}&appid=${apiKEY2}&units=metric`;
  //axios.get(apiURL2).then(displayWeekTemp);
}


function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();
//update this
 
  let daysofweek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let formatDay = daysofweek[day];
  console.log(formatDay);
  return `${formatDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);

