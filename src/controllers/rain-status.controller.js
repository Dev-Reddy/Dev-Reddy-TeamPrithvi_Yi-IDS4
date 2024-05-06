import { getRainDetails, getRainWarning } from "./getRainDetails.js";

export default class RainStatusController {
  static async getRainStatus(req, res) {
    if (req.query.pincode) {
      const pincode = req.query.pincode;
      const coordinateAddress = `india+${pincode}`;
      const geoLocationData = await fetch(
        `https://geocode.maps.co/search?q=${coordinateAddress}&api_key=66366662de130938126976jscf35868`
      )
        .then((res) => res.json())
        .then((data) => data)
        .catch((err) => console.log(err));

      console.log(geoLocationData);

      if (geoLocationData.length === 0) {
        return res.render("rain-status", {
          error: "Invalid Pincode",
          address: "",
          city: "",
          rainDetails: [],
          loggedIn: req.session.loggedIn,
          rainWarning: "",
        });
      }

      const coordinates = {
        latitude: geoLocationData[0].lat,
        longitude: geoLocationData[0].lon,
      };

      const location = await fetch(
        `https://geocode.maps.co/reverse?lat=${coordinates.latitude}&lon=${coordinates.longitude}&api_key=66366662de130938126976jscf35868`
      )
        .then((res) => res.json())
        .then((data) => data)
        .catch((err) => console.log(err));

      console.log(location);

      // const address = location.address.city
      //   ? `${location.address.city}, ${location.address.state} - ${pincode}`
      //   : `${location.address.state} - ${pincode}`;

      const a =
        location.address.city != undefined ? location.address.city + "," : "";
      const b = location.address.state ? location.address.state : "";
      const c = pincode ? pincode : "";

      const address = `${a} ${b} - ${c}`;
      const city = location.address.city ? location.address.city : "";

      const weather = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${coordinates.latitude}&longitude=${coordinates.longitude}&daily=precipitation_sum,rain_sum,showers_sum,precipitation_hours,precipitation_probability_max&timezone=auto&forecast_days=14&models=best_match`
      )
        .then((response) => response.json())
        .catch((error) => console.log(error));

      const rainDetails = getRainDetails(weather);

      const rainWarning = getRainWarning(rainDetails);

      return res.render("rain-status", {
        error: "",
        address,
        city,
        rainDetails,
        loggedIn: req.session.loggedIn,
        rainWarning,
      });
    } else if (req.session.pincode) {
      const pincode = req.session.pincode;
      const coordinateAddress = `india+${pincode}`;
      const geoLocationData = await fetch(
        `https://geocode.maps.co/search?q=${coordinateAddress}&api_key=66366662de130938126976jscf35868`
      )
        .then((res) => res.json())
        .then((data) => data)
        .catch((err) => console.log(err));

      if (geoLocationData.length === 0) {
        return res.render("rain-status", {
          error: "Invalid Pincode",
          city: "",
          address: "",
          rainDetails: [],
          loggedIn: req.session.loggedIn,
          rainWarning: "",
        });
      }

      const coordinates = {
        latitude: geoLocationData[0].lat,
        longitude: geoLocationData[0].lon,
      };

      const location = await fetch(
        `https://geocode.maps.co/reverse?lat=${coordinates.latitude}&lon=${coordinates.longitude}&api_key=66366662de130938126976jscf35868`
      )
        .then((res) => res.json())
        .then((data) => data)
        .catch((err) => console.log(err));

      const a =
        location.address.city != undefined ? location.address.city + "," : "";
      const b = location.address.state ? location.address.state : "";
      const c = pincode ? pincode : "";

      const address = `${a} ${b} - ${c}`;
      const city = location.address.city ? location.address.city : "";

      const weather = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${coordinates.latitude}&longitude=${coordinates.longitude}&daily=precipitation_sum,rain_sum,showers_sum,precipitation_hours,precipitation_probability_max&timezone=auto&forecast_days=14&models=best_match`
      )
        .then((response) => response.json())
        .catch((error) => console.log(error));

      const rainDetails = getRainDetails(weather);

      const rainWarning = getRainWarning(rainDetails);

      return res.render("rain-status", {
        error: "",
        address,
        city,
        rainDetails,
        loggedIn: req.session.loggedIn,
        rainWarning,
      });
    } else {
      return res.render("rain-status", {
        error: "",
        address: "",
        city: "",
        rainDetails: [],
        loggedIn: req.session.loggedIn,
        rainWarning: "",
      });
    }
  }
}
