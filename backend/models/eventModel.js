const mongoose = require('mongoose')

const eventSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name value'],
    },
    category: {
      type: String,
      required: [true, 'Please add a category value'],
    },
    startTime : {
      type: String,
      required: [true, 'Please add a starttime value'],
    },
    endTime : {
      type: String,
      required: [true, 'Please add a endtime value'],
    }
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Event', eventSchema)
