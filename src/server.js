const express = require("express");

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.get("/api", (req, res) => {
  res.json({ message: "API is running", status: "ok" });
});

app.post("/echo", (req, res) => {
  res.json({
    received: req.body
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
