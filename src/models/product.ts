import { Schema, Types, model } from "mongoose";

interface IProduct {
  name: string;
  price: number;
  description: string;
  images: string[];
  store: Types.ObjectId;
  category: Types.ObjectId;
}

const productSchema = new Schema<IProduct>(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      min: 1,
    },
    store: {
      type: Schema.Types.ObjectId /** @todo ref */,
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId /** @todo ref */,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Product = model<IProduct>("Product", productSchema);
