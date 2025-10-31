const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connexion DB
const db = require("./app/models");
db.connex.sync()
  .then(() => {
    console.log("Base de données synchronisée !");
  })
  .catch((err) => {
    console.log("Erreur de synchronisation :", err.message);
  });

// Route de base
app.get("/", (req, res) => {
  res.json({ message: "Bienvenue sur l’API Forfaits touristiques." });
});

// Routes
require("./app/routes/forfait.routes")(app);

// Lancer serveur
const PORT = 8080;
app.listen(PORT, () =>
  console.log(`✅ Serveur Node.js en cours sur le port ${PORT}`)
);
