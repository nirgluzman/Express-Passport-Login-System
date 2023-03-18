require("colors");

const express = require("express");
const bcrypt = require("bcrypt");

const PORT = process.env.PORT || 3000;

// local variable to store the users database
const users = [];

const app = express();

app.set("view-engine", "ejs");

app.use(express.urlencoded({ extended: false })); // to access the form info inside .ejs
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index.ejs", { name: "Nir" });
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.post("/login", (req, res) => {});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    users.push({
      id: Date.now(),
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
    res.redirect("/login");
  } catch (err) {
    console.log(err);
    res.redirect("/register");
  }
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`.red);
});
