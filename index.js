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

  let h1E = document.querySelector("#h1");
  let h1 = Math.round(response.data.list[0].main.temp_max);
  console.log(h1);
  //alert(h1);
  h1E.innerHTML = h1;

  let l1E = document.querySelector("#l1");
  let l1 = Math.round(response.data.list[0].main.temp_min);
  console.log(l1);
  //alert(l1);
  l1E.innerHTML = l1;

  let d1E=document.querySelector("#d1");
  let d1 = response.data.list[0].dt;
  console.log(d1);
 // alert(d1);

  const date = new Date(d1);
  let dow1=date.getDay();
  console.log(dow1);
  //alert(dow);
  //let Day1 = (formatDay+1);
  d1E.innerHTML = Day1;

  //2
  let h2E = document.querySelector("#h2");
  let h2 = Math.round(response.data.list[1].main.temp_max);
  console.log(h2);
  //alert(h1);
  h2E.innerHTML = h2;

  let l2E = document.querySelector("#l2");
  let l2 = Math.round(response.data.list[1].main.temp_min);
  console.log(l2);
  //alert(l1);
  l2E.innerHTML = l2;

  let d2E=document.querySelector("#d2");
  let d2 = response.data.list[1].dt;
  console.log(d2);
 // alert(d1);

  const date2 = new Date(d2);
  let dow2=date2.getDay();
  alert(dow2);
  let Day2 = DOW[dow+1];
  d2E.innerHTML = Day2;

  //alert 3

  let h3E = document.querySelector("#h3");
  let h3 = Math.round(response.data.list[2].main.temp_max);
  console.log(h3);
  //alert(h1);
  h3E.innerHTML = h3;

  let l3E = document.querySelector("#l3");
  let l3 = Math.round(response.data.list[2].main.temp_min);
  console.log(l3);
  //alert(l1);
  l3E.innerHTML = l3;

  let d3E=document.querySelector("#d3");
  let d3 = response.data.list[2].dt;
  console.log(d3);


  //alert 4
  let h4E = document.querySelector("#h4");
  let h4 = Math.round(response.data.list[3].main.temp_max);
  console.log(h4);
  //alert(h1);
  h4E.innerHTML = h4;

  let l4E = document.querySelector("#l4");
  let l4 = Math.round(response.data.list[3].main.temp_min);
  console.log(l4);
  //alert(l1);
  l4E.innerHTML = l4;

  let d4E=document.querySelector("#d4");
  let d4 = response.data.list[3].dt;
  console.log(d4);





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
  axios.get(apiURL2).then(displayWeekTemp);
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

