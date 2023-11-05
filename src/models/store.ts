import { Schema, Types, model } from "mongoose";

interface IStore {
  name: string;
  owner: Types.ObjectId;
}

const storeSchema = new Schema<IStore>(
  {
    name: {
      type: String,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId /** @todo ref */,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Store = model<IStore>("Store", storeSchema);
