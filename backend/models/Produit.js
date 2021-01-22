const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProduitSchema = new Schema({

  categoryId: {
    type: Schema.Types.ObjectId,
    ref: "category"
  },
  name: {
    type: String,
    required: true
  },
  reference: {
    type: String
  },
  tarif:{
    type: String,
  },
});

module.exports = Produit = mongoose.model("produit", ProduitSchema);