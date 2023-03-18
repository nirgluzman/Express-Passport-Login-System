require("colors");

const express = require("express");

const PORT = process.env.PORT || 3000;

const app = express();

app.set("view-engine", "ejs");
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index.ejs", { name: "Nir" });
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", (req, res) => {});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`.red);
});
