let latitude;
let longitude;

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showLocation, showError);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}

function showLocation(position) {
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;
  console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
  getWeather();
}

function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      console.log("User denied the request for Geolocation.");
      break;
    case error.POSITION_UNAVAILABLE:
      console.log("Location information is unavailable.");
      break;
    case error.TIMEOUT:
      console.log("The request to get user location timed out.");
      break;
    case error.UNKNOWN_ERROR:
      console.log("An unknown error occurred.");
      break;
  }
}

async function getWeather() {
  console.log("latitude", latitude);
  console.log("longitude", longitude);

  //MAWSYNRAM   25.2973° N, 91.5827° E
  //   const weather = await fetch(
  //     `https://api.open-meteo.com/v1/forecast?latitude=25.2973&longitude=91.5827&daily=precipitation_sum,rain_sum,showers_sum,precipitation_hours,precipitation_probability_max&timezone=auto`
  //   )

  //USER LOCATION
  const weather = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=precipitation_sum,rain_sum,showers_sum,precipitation_hours,precipitation_probability_max&timezone=auto&forecast_days=14&models=best_match`
  )
    .then((response) => response.json())
    .catch((error) => console.log(error));
  console.log(weather);
}

const getWeatherBtn = document.getElementById("getWeather");

getWeatherBtn.addEventListener("click", getWeather);

window.onload = getLocation;
