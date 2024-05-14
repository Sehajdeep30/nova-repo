const mongoose = require('mongoose');

const { Schema } = mongoose;

const medStockSchema = new Schema({
  instiId: {
    type: String,
    required: true,
  },
  itemName: {
    type: String,
    required: true,
  },
  itemCode: {
    type: Number,
    required: true,
  },
  itemQuantity: {
    type: Number,
  },
});

const MedStock = mongoose.model('MedStock', medStockSchema);

module.exports = MedStock;
