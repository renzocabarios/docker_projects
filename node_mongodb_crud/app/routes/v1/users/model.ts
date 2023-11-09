import { Schema, model } from "mongoose";
import { RESOURCE } from "../../../constants";
import { IUserModel } from "../../../types";

const option = {
  timestamps: true,
};

const schema = new Schema<IUserModel>(
  {
    email: {
      type: String,
      required: true,
    },
    deleted: {
      type: Boolean,
      default: false,
    },
  },
  option
);

export default model(RESOURCE.USERS, schema);
