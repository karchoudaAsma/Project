const Contrat = require("../models/contrat.model")

// Add a new contrat 
 
exports.addContrat = async (req, res) => {
  const { contraType, service, beginDate, finDate, status, clientId } = req.body;

  const newContrat = new Contrat({
    contraType,
    service,
    beginDate,
    finDate,
    status,
    client: clientId, // Associate contract with a specific client
  });

  try {
    const savedContrat = await newContrat.save();
    res.status(201).json({ message: 'Contrat added successfully', contrat: savedContrat });
  } catch (error) {
    res.status(500).json({ message: 'Error adding contrat', error });
  }
};



// Get contracts by client ID
// contrat.controller.js

exports.getContractsByClientId = async (req, res) => {
  try {
    const clientId = req.params.clientId;  // Get clientId from the URL parameter
   const contracts = await Contrat.find({ client: clientId });  // Use 'Contrat' here
    res.status(200).json(contracts);
 } catch (error) {
    console.error('Error fetching contracts:', error);  // Log the error
    res.status(500).json({ message: 'Error fetching contracts', error });
}

};




      // Delete a contract
exports.deleteContrat = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedContrat = await Contrat.findByIdAndDelete(id);
        if (!deletedContrat) {
            return res.status(404).json({ message: 'Contrat not found' });
        }
        res.status(200).json({ message: 'Contrat deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting contrat', error });
    }
};

// Update a contract
exports.updateContrat = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedContrat = await Contrat.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedContrat) {
            return res.status(404).json({ message: 'Contrat not found' });
        }
        res.status(200).json(updatedContrat);
    } catch (error) {
        res.status(500).json({ message: 'Error updating contrat', error });
    }
};
