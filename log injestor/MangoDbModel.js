const mongoose = require("mongoose");

const logSchema = new mongoose.Schema(
  {
    level: String,
    message: String,
    resourceId: String,
    timestamp: Date,
    traceId: String,
    spanId: String,
    commit: String,
    metadata: {
      parentResourceId: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Log", logSchema);
