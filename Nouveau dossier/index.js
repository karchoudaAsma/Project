//index.js
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const db = require('./config/db')
const adminRouter = require("./routes/admin.route");
const addClient = require("./routes/crud.route")
const getClient = require("./routes/crud.route")
const deletClient = require("./routes/crud.route")
const updateClient = require("./routes/crud.route")
const addContrat = require('./routes/contrat.route')
const getContrat = require('./routes/contrat.route')
const deleteContrat = require('./routes/contrat.route')
const updateContrat = require('./routes/contrat.route')
const cors = require('cors');


// Connect to the database
//db();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api', require('./routes/itemRoutes'));
app.use("/admin", adminRouter);
app.use("/addClient", addClient)
app.use("/getClient", getClient)
app.use("/deleteClient", deletClient)
app.use("/updateClient", updateClient)
app.use('/contrat', addContrat, getContrat, updateContrat, deleteContrat)
// app.use('/contrat', getContrat)

// Start the server
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`connected with the server on port  ${port}`);
});

// Export the app
module.exports = app;

