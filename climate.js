const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('search-Btn');
const weather_box = document.querySelector('.weather_box');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');
const timedate = document.getElementById('timedate');
const current_location = document.getElementById('current-location');




// const input = document.getElementById("search-weather")

// input.addEventListener("keypress" , function (event) {

//     if (event.key === "Enter") {
//     event.preventDefault();
//   document.getElementById("search-Btn").click();
// }
// });


  function getCurrentLocation() {
    // Check if Geolocation is available in the browser
    if ("geolocation" in navigator) {
      // Get the user's current position
      navigator.geolocation.getCurrentPosition(function (position) {
        // Extract latitude and longitude
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;

        // Create a string to display the location
        var locationString = "Latitude: " + latitude + "<br>Longitude: " + longitude;

        // Update the innerHTML of the 'location' element
        document.getElementById("location").innerHTML = locationString;
      });
    } else {
      // Geolocation is not available in this browser
      document.getElementById("location").innerHTML = "Geolocation is not supported in your browser.";
    }
  }




  


const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

// This arrangement can be altered based on how we want the date's format to appear.
timedate.innerHTML = `${day}-${month}-${year}`;
console.log(timedate); 

function getDayName(date = new Date(), locale = 'en-US') {
    return date.toLocaleDateString(locale, {weekday: 'long'});
  }
  dateday.innerHTML = getDayName();
  console.log(getDayName());
  
  

const location_not_found = document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather-body');

//Now we have to make a function that take city input then he provide the weather according to the city
 async  function checkWeather(city) { 
const api_key = "6106a649aab7accf42da2d380d26e707";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

//We use fetch Function to acces the weather
//Fetch function return promise


const weather_data = await fetch (`${url}`).then
(response => response.json());



if(weather_data.cod === `404`){
    location_not_found.style.display = "flex";
    weather_body.style.display = "none"
    if (weather_data.cod === `404`) {
        weather_body.style.display = "None";
    }
    console.log("Error");
    return;
}
location_not_found.style.display = "none";
    weather_body.style.display = "flex";
    


   temperature.innerHTML = `${Math.round
    (weather_data.main.temp - 273.15)}°C`;

    description.innerHTML = `${weather_data.weather[0].description} `

    humidity.innerHTML = `${weather_data.main.humidity}%`;

    wind_speed.innerHTML = `${(weather_data.wind.speed)}Km/h`;

    switch(weather_data.weather[0].main) {
        case 'Clouds' :

            weather_img.src = "/WeatherAssests/cloud.png";
            break;
            case 'Clear' :
            weather_img.src = "/WeatherAssests/clear.png";
           break;    
            case 'Rain' :
            weather_img.src = "/WeatherAssests/rain.png";
           break;
            case 'Mist' :
            weather_img.src = "/WeatherAssests/mist.png";
           break;
            case 'Snow' :
            weather_img.src = "/WeatherAssests/snow.png";
            // default: 
            // console.log("Not fetch");
    }


    console.log(weather_data); 



    

//Fetch Function take a URl then it pass the data called json 
//Using .then we can convert json into STRING using await we can convert all data to store
}
searchBtn.addEventListener('click', ()=> {
 checkWeather(inputBox.value)
});

//This is add event listner for fething the location by click
//Using arrow Function  we fetch the value from Input box value 
