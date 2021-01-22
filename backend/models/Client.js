const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClientSchema = new Schema({

  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
});

module.exports = Client = mongoose.model("client", ClientSchema);