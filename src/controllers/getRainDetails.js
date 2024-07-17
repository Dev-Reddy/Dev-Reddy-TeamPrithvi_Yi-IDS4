export function getRainDetails(weather) {
  const allDaysIndices = new Set();

  const dailyWeather = weather.daily;

  dailyWeather.precipitation_sum.forEach((sum, index) => {
    if (sum > 20) {
      allDaysIndices.add(index);
    }
  });

  dailyWeather.rain_sum.forEach((sum, index) => {
    if (sum > 20) {
      allDaysIndices.add(index);
    }
  });

  dailyWeather.showers_sum.forEach((sum, index) => {
    if (sum > 20) {
      allDaysIndices.add(index);
    }
  });

  dailyWeather.precipitation_hours.forEach((sum, index) => {
    if (sum > 20) {
      allDaysIndices.add(index);
    }
  });

  dailyWeather.precipitation_probability_max.forEach((sum, index) => {
    if (sum > 80) {
      allDaysIndices.add(index);
    }
  });

  const allDays = Array.from(allDaysIndices);

  const rainDetails = allDays.map((day) => {
    let status;
    if (dailyWeather.precipitation_sum[day] > 50) {
      status = "Extremely Heavy Rain";
    } else if (dailyWeather.precipitation_sum[day] > 30) {
      status = "Very Heavy Rain";
    } else if (dailyWeather.precipitation_sum[day] > 20) {
      status = "Heavy Rain";
    } else if (dailyWeather.precipitation_sum[day] > 10) {
      status = "Moderate Rain";
    } else if (dailyWeather.precipitation_sum[day] > 5) {
      status = "Light Rain";
    } else {
      status = "Very Light Rain";
    }

    return {
      index: day,
      date: new Date(dailyWeather.time[day]).toDateString(),
      precipitation_sum: dailyWeather.precipitation_sum[day],
      rain_sum: dailyWeather.rain_sum[day],
      showers_sum: dailyWeather.showers_sum[day],
      precipitation_hours: dailyWeather.precipitation_hours[day],
      precipitation_probability_max:
        dailyWeather.precipitation_probability_max[day],
      status,
    };
  });
  console.log(rainDetails);
  rainDetails.sort((a, b) => new Date(a.date) - new Date(b.date));
  return rainDetails;
}

export function getRainWarning(rainDetails) {
  if (rainDetails.length === 0) {
    return {
      code: 0,
      message: "No Rain",
    };
  } else {
    if (
      rainDetails.some((detail) => detail.status === "Extremely Heavy Rain")
    ) {
      return {
        code: 6,
        message: "Extremely Heavy Rain",
      };
    } else if (
      rainDetails.some((detail) => detail.status === "Very Heavy Rain")
    ) {
      return {
        code: 5,
        message: "Very Heavy Rain",
      };
    } else if (rainDetails.some((detail) => detail.status === "Heavy Rain")) {
      return {
        code: 4,
        message: "Heavy Rain",
      };
    } else if (
      rainDetails.some((detail) => detail.status === "Moderate Rain")
    ) {
      return {
        code: 3,
        message: "Moderate Rain",
      };
    } else if (rainDetails.some((detail) => detail.status === "Light Rain")) {
      return {
        code: 2,
        message: "Light Rain",
      };
    } else {
      return {
        code: 1,
        message: "Very Light Rain",
      };
    }
  }
}

export async function pincodeRainWarning(pincode) {
  const coordinateAddress = `india+${pincode}`;
  const geoLocationData = await fetch(
    `https://geocode.maps.co/search?q=${coordinateAddress}&api_key=66366662de130938126976jscf35868`
  )
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.log(err));

  const coordinates = {
    latitude: geoLocationData[0].lat,
    longitude: geoLocationData[0].lon,
  };

  const weather = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${coordinates.latitude}&longitude=${coordinates.longitude}&daily=precipitation_sum,rain_sum,showers_sum,precipitation_hours,precipitation_probability_max&timezone=auto&forecast_days=14&models=best_match`
  )
    .then((response) => response.json())
    .catch((error) => console.log(error));

  const rainDetails = getRainDetails(weather);

  const rainWarning = getRainWarning(rainDetails);

  return rainWarning.code;
}

// getRainDetails({
//   latitude: 25.375,
//   longitude: 91.625,
//   generationtime_ms: 0.193953514099121,
//   utc_offset_seconds: 19800,
//   timezone: "Asia/Kolkata",
//   timezone_abbreviation: "IST",
//   elevation: 1426,
//   daily_units: {
//     time: "iso8601",
//     precipitation_sum: "mm",
//     rain_sum: "mm",
//     showers_sum: "mm",
//     precipitation_hours: "h",
//     precipitation_probability_max: "%",
//   },
//   daily: {
//     time: [
//       "2024-05-06",
//       "2024-05-07",
//       "2024-05-08",
//       "2024-05-09",
//       "2024-05-10",
//       "2024-05-11",
//       "2024-05-12",
//       "2024-05-13",
//       "2024-05-14",
//       "2024-05-15",
//       "2024-05-16",
//       "2024-05-17",
//       "2024-05-18",
//       "2024-05-19",
//     ],
//     precipitation_sum: [
//       16, 8.3, 6.1, 2.3, 5.7, 9.3, 0.6, 1.5, 3.9, 3.6, 3.6, 5.4, 3.9, 6.3,
//     ],
//     rain_sum: [0, 0, 0, 0, 2.7, 9, 0, 0, 0.9, 1.05, 1.8, 1.35, 1.05, 2.1],
//     showers_sum: [
//       15.9, 8.3, 6.1, 2.3, 3, 0.3, 0.6, 1.5, 3.9, 2.7, 3.3, 5.1, 3.9, 5.4,
//     ],
//     precipitation_hours: [19, 11, 8, 6, 9, 12, 6, 9, 15, 6, 15, 18, 18, 18],
//     precipitation_probability_max: [
//       100, 88, 94, 97, 94, 97, 100, 100, 100, 100, 90, 81, 94, 88,
//     ],
//   },
// });
