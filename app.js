const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;
const zmienna = 'podtytul';

app.set("view engine", "hbs");
app.use("/assets", express.static(path.join(__dirname, "./assets")));
app.use("/js", express.static(path.join(__dirname, "./js")));

app.get("/", function (req, res) {
  res.render("index", {
    pageTitle: "asdasd",
    subTitle: zmienna,
  });
});

app.get("/podstrona1", function (req, res) {
  res.send("podstrona1");
});

app.listen(port, () => {
  console.log(`Serwer dziala na porcie ${port}`);
});
