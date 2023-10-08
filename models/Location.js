import mongoose from "mongoose";

const locationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  devices: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Device" }],
  },
});

const Location = mongoose.model("Location", locationSchema);

export default Location;
