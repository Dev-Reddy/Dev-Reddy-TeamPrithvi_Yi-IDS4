import { getRainDetails, getRainWarning } from "./getRainDetails.js";

export default class HomeController {
  static async getHome(req, res) {
    if (req.headers["geolocation"]) {
      console.log("Geolocation: ", req.headers["geolocation"]);
      const geolocation = JSON.parse(req.headers["geolocation"]);
      const coordinates = {
        latitude: geolocation.latitude,
        longitude: geolocation.longitude,
      };

      const weather = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${coordinates.latitude}&longitude=${coordinates.longitude}&daily=precipitation_sum,rain_sum,showers_sum,precipitation_hours,precipitation_probability_max&timezone=auto&forecast_days=14&models=best_match`
      )
        .then((response) => response.json())
        .catch((error) => console.log(error));

      const rainDetails = getRainDetails(weather);

      const rainWarning = getRainWarning(rainDetails);

      if (rainWarning) {
        return res.render("home", {
          loggedIn: req.session.loggedIn,
          rainWarning: rainWarning,
        });
      }
    }
    res.render("home", {
      loggedIn: req.session.loggedIn,
      rainWarning: "",
    });
  }
}
