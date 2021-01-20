import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const roomSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  image: {
    type: String,
    unique: true,
    required: true,
  },
  domain: {
    type: String,
    unique: true,
    default: "",
  },
  messages: {
    type: [messageSchema],
    default: [],
  },
});

export default mongoose.model("Room", roomSchema);
