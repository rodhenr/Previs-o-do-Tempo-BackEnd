const express = require("express");
const axios = require("axios");
var cors = require("cors");

const port = process.env.PORT || 8080;

const app = express();
app.use(cors());

app.get("/search", async (req, res) => {
  const cidade = req.query.cidade;
  const key = "33c6cc5aa5f8494092e143121221806";
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
