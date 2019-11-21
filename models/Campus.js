const { model, Schema } = require("mongoose");

const campusSchema = new Schema(
  {
    name: { type: String, required: true },
    code: { type: String, required: true },
    groups: [
      {
        type: Schema.Types.ObjectId,
        ref: "Group"
      }
    ]
  },
  {
    timestamps: true
  }
);

module.exports = model("Campus", campusSchema);
