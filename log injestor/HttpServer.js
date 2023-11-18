const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const LogController = require("./controllers/logController");

// Parse incoming JSON
app.use(bodyParser.json());

app.post("/logs", LogController.ingestLog);

app.listen(port, () => {
  console.log(`Log Ingestor server running at http://localhost:${port}`);
});
