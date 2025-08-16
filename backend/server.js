const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from backend!");
});

app.get("/api/hello", (req, res) => {
  res.json({ message: "api/hello API Call" });
});


const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
