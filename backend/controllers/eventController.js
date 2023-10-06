const asyncHandler = require('express-async-handler')
const Event = require('../models/eventModel')

const getEvents = asyncHandler(async (req, res) => {
  let data = await Event.find();
  res.status(200).json(data)
})

const setEvent = asyncHandler(async (req, res) => {
  let data = {
    name : req.body.name,
    category: req.body.category,
    startTime:  req.body.startTime,
    endTime: req.body.endTime,
  }
  const event = await Event.create(data);
  res.status(200).json(event)
})

module.exports = {
  setEvent,
  getEvents
}



// const User = require('../models/userModel')


// // @desc    Update goal
// // @route   PUT /api/goals/:id
// // @access  Private
// const updateGoal = asyncHandler(async (req, res) => {
//   const goal = await Goal.findById(req.params.id)

//   if (!goal) {
//     res.status(400)
//     throw new Error('Goal not found')
//   }

//   // Check for user
//   if (!req.user) {
//     res.status(401)
//     throw new Error('User not found')
//   }

//   // Make sure the logged in user matches the goal user
//   if (goal.user.toString() !== req.user.id) {
//     res.status(401)
//     throw new Error('User not authorized')
//   }

//   const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
//     new: true,
//   })

//   res.status(200).json(updatedGoal)
// })

// // @desc    Delete goal
// // @route   DELETE /api/goals/:id
// // @access  Private
// const deleteGoal = asyncHandler(async (req, res) => {
//   const goal = await Goal.findById(req.params.id)

//   if (!goal) {
//     res.status(400)
//     throw new Error('Goal not found')
//   }

//   // Check for user
//   if (!req.user) {
//     res.status(401)
//     throw new Error('User not found')
//   }

//   // Make sure the logged in user matches the goal user
//   if (goal.user.toString() !== req.user.id) {
//     res.status(401)
//     throw new Error('User not authorized')
//   }

//   await goal.remove()

//   res.status(200).json({ id: req.params.id })
// })



// const data = [
//   {
//     "id": 1,
//     "event_name": "Butterfly 100M",
//     "event_category": "Swimming",
//     "start_time": "2022-12-17 13:00:00",
//     "end_time": "2022-12-17 14:00:00"
//   },
//   {
//     "id": 2,
//     "event_name": "Backstroke 100M",
//     "event_category": "Swimming",
//     "start_time": "2022-12-17 13:30:00",
//     "end_time": "2022-12-17 14:30:00"
//   },
//   {
//     "id": 3,
//     "event_name": "Freestyle 400M",
//     "event_category": "Swimming",
//     "start_time": "2022-12-17 15:00:00",
//     "end_time": "2022-12-17 16:00:00"
//   },
//   {
//     "id": 4,
//     "event_name": "High Jump",
//     "event_category": "Athletics",
//     "start_time": "2022-12-17 13:00:00",
//     "end_time": "2022-12-17 14:00:00"
//   },
//   {
//     "id": 5,
//     "event_name": "Triple Jump",
//     "event_category": "Athletics",
//     "start_time": "2022-12-17 16:00:00",
//     "end_time": "2022-12-17 17:00:00"
//   },
//   {
//     "id": 6,
//     "event_name": "Long Jump",
//     "event_category": "Athletics",
//     "start_time": "2022-12-17 17:00:00",
//     "end_time": "2022-12-17 18:00:00"
//   },
//   {
//     "id": 7,
//     "event_name": "100M Sprint",
//     "event_category": "Athletics",
//     "start_time": "2022-12-17 17:00:00",
//     "end_time": "2022-12-17 18:00:00"
//   },
//   {
//     "id": 8,
//     "event_name": "Lightweight 60kg",
//     "event_category": "Boxing",
//     "start_time": "2022-12-17 18:00:00",
//     "end_time": "2022-12-17 19:00:00"
//   },
//   {
//     "id": 9,
//     "event_name": "Middleweight 75 kg",
//     "event_category": "Boxing",
//     "start_time": "2022-12-17 19:00:00",
//     "end_time": "2022-12-17 20:00:00"
//   },
//   {
//     "id": 10,
//     "event_name": "Heavyweight 91kg",
//     "event_category": "Boxing",
//     "start_time": "2022-12-17 20:00:00",
//     "end_time": "2022-12-17 22:00:00"
//   }
// ]