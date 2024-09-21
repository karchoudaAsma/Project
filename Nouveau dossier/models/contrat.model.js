// Define contrat schema
const mongoose = require('mongoose');

const ContratSchema = new mongoose.Schema({
  contraType: {
    type: String,
    required: true,
  },
  service: {
    type: String,
    required: true,
  },
  beginDate: {
    type: String,
  },
  finDate: {
    type: String,
  },
  status: {
    type: String,
    required: true,
  },
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client', // Reference to the Client model
    required: true,
  },
});

module.exports = mongoose.model('Contrat', ContratSchema);
