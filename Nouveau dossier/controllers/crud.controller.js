const Client = require('../models/crud.model');

//Get all the clients
exports.getClient = async (req, res) => {
    try {
        const clients = await Client.find();
        res.json(clients);
      } catch (error) {
        res.status(500).json({ message: 'Error fetching clients', error });
      }


}

// Add a new client
exports.addClient = async (req, res) => {
  const { nom, prenom, telephone, adresse, email, dateNaissance, numCIN, codePostal } = req.body;

  // Check if client already exists by email
  const existingClient = await Client.findOne({ email });
  if (existingClient) {
    return res.status(400).json({ message: 'Client already exists' });
  }

  // Create new client
  const newClient = new Client({
    nom,
    prenom,
    telephone,
    adresse,
    email,
    dateNaissance,
    numCIN,
    codePostal
  });

  try {
    // Save the client to the database
    const savedClient = await newClient.save();
    res.status(201).json({ message: 'Client added successfully', client: savedClient });
  } catch (error) {
    res.status(500).json({ message: 'Error adding client', error });
  }
};

// Delete a client by ID
exports.deleteClient = async (req, res) => {
  try {
    const clientId = req.params.id;
    const deletedClient = await Client.findByIdAndDelete(clientId);

    if (!deletedClient) {
      return res.status(404).json({ message: 'Client not found' });
    }

    res.status(200).json({ message: 'Client deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting client', error });
  }
};

// Update a client by ID
exports.updateClient = async (req, res) => {
  try {
    const clientId = req.params.id;
    const updatedClient = await Client.findByIdAndUpdate(clientId, req.body, { new: true });

    if (!updatedClient) {
      return res.status(404).json({ message: 'Client not found' });
    }

    res.status(200).json({ message: 'Client updated successfully', client: updatedClient });
  } catch (error) {
    res.status(500).json({ message: 'Error updating client', error });
  }
};