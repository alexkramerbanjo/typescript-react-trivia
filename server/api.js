const router = require("express").Router();
const axios = require("axios");

module.exports = router;

router.use("/", async (req, res, next) => {
  try {
    const data = await axios.get(
      "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean"
    );
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
