const express = require("express");
const app = express();

const PORT = 3000;

app.use((req, res, next) => {
  console.log(`${req.method}: ${req.path}`);
  next();
});

app.get("/", (req, res) => res.send("hello world"));

app.get("/products", (req, res) => res.send("hello products"));

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
