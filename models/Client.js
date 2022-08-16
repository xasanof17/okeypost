import mongoose from "mongoose";

const ClientSchema = new mongoose.Schema({
  name: String,
  surname: String,
  login: String,
  email: String,
  phone: Number,
  address: String,
});

const Client = mongoose.models.Client || mongoose.model("Client", ClientSchema);

export default Client;
