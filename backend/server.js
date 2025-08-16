const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

// Allow requests from your frontend URL
// app.use(cors({
//   origin: "https://refactored-capybara-pw56x4w99x6295r-3000.app.github.dev",
//   methods: ["GET", "POST"],   // add PUT/DELETE if you need them
//   credentials: true
// }));


app.get("/", (req, res) => {
  res.send("Hello from backend!");
});

app.get("/api/hello", (req, res) => {
  res.json({ message: "api/hello API Call" });
});


const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT} `));
