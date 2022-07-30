const mongoose = require('mongoose');

const AccountSchema = mongoose.Schema({
  name: { type: String, required: true },
});
