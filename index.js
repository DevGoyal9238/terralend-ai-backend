require("dotenv").config();
const express = require("express");
const cors = require("cors");

const greenAgent = require("./agents/greenAgent");
const creditAgent = require("./agents/creditAgent");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/evaluate-loan", async (req, res) => {
  try {
    const input = req.body;

    const greenResult = await greenAgent.evaluate(input);
    const creditResult = creditAgent.evaluate({
      ...input,
      greenScore: greenResult.greenScore
    });

    res.json({ greenResult, creditResult });
  } catch (err) {
    res.status(500).json({ error: "Evaluation failed" });
  }
});

app.listen(5000, () =>
  console.log("TerraLend backend running on port 5000")
);

console.log("Incoming loan request:", input);

