require("dotenv").config();
const Twit = require("twit");

const T = new Twit({
  consumer_key: process.env.API_KEY,
  consumer_secret: process.env.API_SECRET_KEY,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
  timeout_ms: 60 * 1000,
  strictSSL: true,
});

T.get("search/tweets", { q: "react.js since:2020-11-09", count: 50 }, function (
  error,
  data,
  response
) {
    console.log(data)
});
