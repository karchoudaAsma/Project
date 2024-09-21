// backend/model/Authmodel.js

// Import the mongoose module
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const bcryptSalt = process.env.BCRYPT_SALT;
const { v4: uuidv4 } = require("uuid");

// Define the schema for authentication data
const authSchema = new Schema(
  {
    email: { 
        type: String, 
        unique: true 
    },
    password: { 
        type: String, 
        required: true 
    },

}
);

// Hash the password before saving it to the database
authSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const hash = await bcrypt.hash(this.password, Number(bcryptSalt));
  this.password = hash;
  this.verificationCode = uuidv4();
  next();
});

// Export the mongoose model for authentication
const Auth = mongoose.model("AUTH", authSchema);
module.exports = Auth; // Export the model
