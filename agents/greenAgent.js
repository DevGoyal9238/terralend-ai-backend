const { getClimateRisk } = require("../services/weatherService");

async function evaluate(data) {
  let score = 0;
  let explanation = [];

  if (["Solar", "EV", "Waste"].includes(data.greenActivity)) {
    score += 30;
    explanation.push("Project aligns with approved green activities");
  }

  if (data.energySource === "Renewable") {
    score += 25;
    explanation.push("Uses renewable energy source");
  }

  if (data.certified) {
    score += 20;
    explanation.push("Environmental certification detected");
  }

  if (data.womenLed) {
    score += 10;
    explanation.push("Women-led enterprise inclusion bonus");
  }

  const climateRisk = await getClimateRisk(data.city);
  if (climateRisk !== "Low Risk") {
    score -= 10;
    explanation.push(`Located in ${climateRisk} zone`);
  }

  return {
    greenScore: Math.min(score, 100),
    status: score >= 70 ? "Verified Green" : "Needs Review",
    climateRisk,
    explanation
  };
}

module.exports = { evaluate };
