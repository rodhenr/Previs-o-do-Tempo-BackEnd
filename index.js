const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT || 8080;

const app = express();
app.use(cors({ credentials: true, origin: true }));

app.get("/search", async (req, res) => {
  const cidade = req.query.cidade;
  const key = process.env.SECRET_KEY;
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${cidade}&days=6&aqi=no&alerts=no`;

  await axios
    .get(url)
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      res.status(404).send({
        message: "Erro!",
      });
    });
});

app.listen(port, () => {
  console.log("Servidor iniciado...");
});
