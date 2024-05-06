function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}

const currentUrl = window.location.href;

// Get the user's geolocation.
const successCallback = (position) => {
  const request = new XMLHttpRequest();
  position = {
    latitude: position.coords.latitude,
    longitude: position.coords.longitude,
  };

  const pathname = new URL(currentUrl).pathname;
  const search = new URL(currentUrl).search;

  // Send the request to the server with the geolocation as a custom header.
  request.open("GET", `http://localhost:3300${pathname}${search}`); // Replace with your local server URL
  request.setRequestHeader("geolocation", JSON.stringify(position));
  request.send();
};

// Handle errors.
const errorCallback = (error) => {
  console.log(error);
};

// Get the user's geolocation.
navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

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
