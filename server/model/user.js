import mongoose from "mongoose";

const clientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    phone: {
      type: Number,
      default: 0,
      minlength: [10]
    },
    password: {
        type: String,
        trim: true,
        required: true,
        minlength: [6],
      },  

  },
  {
    timestamps: true,
  }
);

const clientmodel = mongoose.model("client", clientSchema);
export default clientmodel;
