const express = require("express");
const cors = require("cors");
const path = require('path')
const fs = require('fs')

const app = express();
app.use(cors());
app.use(express.json());

let users = JSON.parse(fs.readFileSync(path.join(__dirname,'users.json'),'utf-8'))

app.post("/api/login", (req, res) => {
  const { email, name } = req.body;
  let user = users.find((u) => u.email === email);
  if (!user) {
    user = {
      name,
      email,
      referralCode: `${name.toLowerCase()}2025`,
      totalDonations: 0,
    };
    users.push(user);
  }
  res.json(user);
});

app.get("/api/leaderboard", (req, res) => {
  const sorted = [...users].sort(
    (a, b) => b.totalDonations - a.totalDonations
  );
  res.json(sorted);
});

app.listen(5000, () => console.log("Server is running on port 5000"));
