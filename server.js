require("dotenv").config();
const Twit = require("twit");
const express = require("express");
const favoriteTwitterHandles = require("./src/favorite_twitter_handles");
const createColumns = require("./src/utils");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static(process.cwd() + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");

const T = new Twit({
  consumer_key: process.env.API_KEY,
  consumer_secret: process.env.API_SECRET_KEY,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
  timeout_ms: 60 * 1000,
  strictSSL: true,
});

app.get("/", (req, res) => {
  res.render("pages/favorite-twitter-handles", {
    favoriteTwitterHandles: favoriteTwitterHandles,
    createColumns: createColumns,
  });
});

app.get("/status/:handle", (req, res) => {
  const { handle } = req.params;
  T.get(
    "statuses/user_timeline",
    { screen_name: handle, tweet_mode: "extended" },
    function (error, data, response) {
      res.render("pages/profile", {profile: data[0]});
    }
  );
});
app.get("/tweets", (req, res) => {
  T.get(
    "search/tweets",
    { q: "react.js since:2020-11-14", count: 100 },
    function (error, data, response) {
      res.render("pages/index", { statuses: data.statuses });
    }
  );
});

app.get("/login", (req, res) => {
  res.render("pages/login");
});

app.listen(PORT, () => {
  console.log(`app listening on  PORT ${PORT}`);
});
