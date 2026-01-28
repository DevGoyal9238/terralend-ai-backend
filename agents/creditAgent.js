function evaluate(data) {
  let score = 0;
  let explanation = [];

  if (data.annualRevenue >= data.loanAmount * 3) {
    score += 30;
    explanation.push("Healthy revenue-to-loan ratio");
  }

  if (data.repaymentHistory === "Good") {
    score += 25;
    explanation.push("Strong repayment history");
  }

  if (data.yearsInOperation >= 3) {
    score += 15;
    explanation.push("Established business");
  }

  if (data.greenScore >= 70) {
    score += 20;
    explanation.push("High sustainability score lowers risk");
  }

  if (data.loanAmount > data.annualRevenue * 0.5) {
    score -= 20;
    explanation.push("High loan burden detected");
  }

  return {
    creditScore: score,
    riskLevel: score >= 70 ? "Low Risk" : "High Risk",
    loanDecision: score >= 70 ? "Approved" : "Rejected",
    interestRate: score >= 70 ? "8.5%" : "—",
    explanation
  };
}

module.exports = { evaluate };
