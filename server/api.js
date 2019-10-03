const router = require("express").Router();
const axios = require("axios");
const Entities = require("html-entities").AllHtmlEntities; // Synonym for HTML5 entities.

const entities = new Entities();

module.exports = router;

router.use("/", async (req, res, next) => {
  try {
    const data = await axios.get(
      "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean",
      {
        headers: {
          "Content-type": "application/x-www-form-urlencoded",
          charset: "UTF-8"
        }
      }
    );
    data.data.results = data.data.results.map(item => {
      item.question = entities.decode(item.question);
      return item;
    });
    res.send(data.data);
  } catch (err) {
    next(err);
  }
});

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});
