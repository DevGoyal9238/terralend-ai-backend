async function evaluateLoan() {
  const revenue = document.getElementById("revenue").value;
  const loan = document.getElementById("loan").value;
  const greenActivity = document.getElementById("greenActivity").value;

  const response = await fetch("http://localhost:5000/evaluate-loan", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      greenActivity,
      energySource: greenActivity === "None" ? "Fossil" : "Renewable",
      certified: greenActivity !== "None",
      womenLed: true,
      city: "Jaipur",
      annualRevenue: Number(revenue),
      loanAmount: Number(loan),
      repaymentHistory: "Good",
      yearsInOperation: 4
    })
  });

  const data = await response.json();
  document.getElementById("result").textContent =
    JSON.stringify(data, null, 2);
}
