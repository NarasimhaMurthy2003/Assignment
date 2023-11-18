const LogModel = require("../models/logModel");

exports.ingestLog = async (req, res) => {
  try {
    const log = new LogModel(req.body);
    await log.save();
    res.json({ message: "Log has been ingested" });
  } catch (err) {
    res.status(500).json({ error: "Failed to ingest the log" });
  }
};
