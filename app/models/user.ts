import mongoose, { Schema } from "mongoose";

const userSchema: Schema = new Schema({
  _id: mongoose.Types.ObjectId,
  name: {
    type: String,
    required: true,
  },
  age: Number,
});

export default mongoose.model("User", userSchema);
