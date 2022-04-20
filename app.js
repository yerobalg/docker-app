const express = require("express");
const cors = require("cors");
const app = express();

app
  .use(cors())
  .use(express.json())
  .get("/", (req, res) => {
    return res.status(200).send({
      message: "Hello World!",
      success: true,
      data: null,
    });
  });

app.listen((port = 8080), () => {
  console.log(`Server is running on port ${port}`);
});
