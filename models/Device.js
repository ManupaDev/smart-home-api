import mongoose from "mongoose";

const deviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  state: {
    type: Boolean,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Device = mongoose.model("Device", deviceSchema);

export default Device;
