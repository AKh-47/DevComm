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
  },
  image: {
    type: String,
  },
  messages: {
    type: [messageSchema],
  },
});

export default mongoose.model("Room", roomSchema);
