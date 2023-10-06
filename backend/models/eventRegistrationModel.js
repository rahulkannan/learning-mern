const mongoose = require('mongoose')

const eventRegistrationSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    event: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Event',
    },
  },
  {
    timestamps: true,
  }
)
eventRegistrationSchema.index({user: 1, event: 1}, { unique: true });

module.exports = mongoose.model('EventRegistration', eventRegistrationSchema)
