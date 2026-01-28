# TerraLend – AI-Powered Green Loan Evaluation 🌱

TerraLend is a hackathon-built backend system that simulates AI-powered green loan scoring for Indian MSMEs using modular AI agents and real-time environmental signals.

---

## 🚀 Features
- Green sustainability verification
- Credit risk assessment
- Rule-based explainable AI
- Secure API integration using environment variables

---

## 🧠 System Architecture
Client (Postman / Frontend)
↓
Express API
↓
Green AI Agent
↓
Credit Risk Agent
↓
Loan Decision


---

## 🔌 API Endpoint

### POST /evaluate-loan

#### Sample Request
```json
{
  "greenActivity": "Solar",
  "energySource": "Renewable",
  "certified": true,
  "womenLed": true,
  "city": "Jaipur",
  "annualRevenue": 1500000,
  "loanAmount": 300000,
  "repaymentHistory": "Good",
  "yearsInOperation": 5
}


---


