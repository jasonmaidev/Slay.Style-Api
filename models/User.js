import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    lastName: {
      type: String,
      min: 2,
      max: 50,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    picturePath: {
      type: String,
      default: "guestProfilePic.png",
      required: true
    },
    style: {
      type: String,
      default: "",
    },
    friendUser: {
      type: Boolean,
      default: false
    },
    guestUser: {
      type: Boolean,
      default: true
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema)

export default User