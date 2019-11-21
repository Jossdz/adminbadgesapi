const { model, Schema } = require("mongoose");

const groupSchema = new Schema({
  course: {
    type: String,
    enum: ["uxui", "web", "data"],
    required: true
  },
  month: {
    type: String,
    enum: [
      "jan",
      "feb",
      "mar",
      "apr",
      "may",
      "jun",
      "jul",
      "aug",
      "sep",
      "oct",
      "nov",
      "dic"
    ],
    required: true
  },
  year: { type: String, required: true },
  googleSpreadsheetId: { type: String, required: true }
});

module.exports = model("Group", groupSchema);
