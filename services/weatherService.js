const axios = require("axios");

async function getClimateRisk(city) {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPENWEATHER_API_KEY}&units=metric`;
    const res = await axios.get(url);

    const temp = res.data.main.temp;
    const rainfall = res.data.rain?.["1h"] || 0;

    if (temp > 40) return "Heat Risk";
    if (rainfall > 20) return "Flood Risk";
    return "Low Risk";
  } catch {
    return "Low Risk";
  }
}

module.exports = { getClimateRisk };
const apiKey = process.env.OPENWEATHER_API_KEY;
