import mongoose from "mongoose";
const { Schema } = mongoose;

const ProductSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  currency: String,
});

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
