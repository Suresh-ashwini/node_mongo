import mongoose, { Schema } from "mongoose";

const userSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  age: Number,
});

export default mongoose.model("User", userSchema);
