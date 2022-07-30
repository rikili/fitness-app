const mongoose = require('mongoose');

const WorkoutSchema = mongoose.Schema({
  theme: { type: String, required: true },
  title: { type: String, required: true },
  accountId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Account',
    required: true,
  },
  exercise: { type: mongoose.Schema.Types.Mixed, requireed: true },
});

module.exports = mongoose.model('Workout', WorkoutSchema);
