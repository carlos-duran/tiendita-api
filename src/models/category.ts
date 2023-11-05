import { Schema, Types, model } from "mongoose";

interface ICategory {
  name: string;
  store: Types.ObjectId;
}

const categorySchema = new Schema<ICategory>(
  {
    name: {
      type: String,
      required: true,
    },
    store: {
      type: Schema.Types.ObjectId /** @todo ref */,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Category = model<ICategory>("Category", categorySchema);
