const mongoose = require('mongoose');

// Define client schema
const ClientSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
  },
  prenom: {
    type: String,
    required: true,
  },
  telephone: {
    type: String,
  },
  adresse: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  dateNaissance: {
    type: Date,
  },
  numCIN: {
    type: String,
  },
  codePostal: {
    type: String,
  }
});

// Export client model
module.exports = mongoose.model('Client', ClientSchema);
