const asyncHandler = require('express-async-handler')
const Event = require('../models/eventModel')
const User = require('../models/userModel')
const EventRegistration = require('../models/eventRegistrationModel')

const registerEvent = (async (req, res) => {

  let eventsList = await getRegisteredEvents(req.body.userId);
  console.log(eventsList)
  if(eventsList.length >= 3) {
    return res.status(400).json({ error : "User cant register more than 3 events" })
  }

  if(eventsList.includes(req.body.eventId)) {
    return res.status(400).json({ error : "Event already registered" })
  }

  const eventRegistered = await EventRegistration.create({
    user : req.body.userId,
    event : req.body.eventId,
  })
  
  res.status(200).json({ eventRegistered })
})

const getRegisteredEvents =  async (userId) => {
  const eventRegistration = await EventRegistration.find({
    user : userId
   });
 
   const eventsList = eventRegistration.map(registartion => {
     return registartion.event;
   })



   return eventsList;
}

const getRegisteredEventsForUser =  (async (req, res) => {
 
  let eventsList = await getRegisteredEvents(req.query.userId);
  res.status(200).json(eventsList)
})

const deleteRegistration = asyncHandler(async (req, res) => {
  const eventRegistration = await EventRegistration.deleteOne({
    user : req.query.userId,
    event : req.query.eventId
  })


  if (!eventRegistration) {
    res.status(400)
    throw new Error('Event registration not found')
  }
  res.status(200).json([]);
})

module.exports = {
  registerEvent,
  deleteRegistration,
  getRegisteredEventsForUser
}




// // @desc    Set goal
// // @route   POST /api/goals
// // @access  Private
// const setGoal = asyncHandler(async (req, res) => {
//   console.log("get goals")
//   if (!req.body.text) {
//     res.status(400)
//     throw new Error('Please add a text field')
//   }

//   const goal = await Goal.create({
//     text: req.body.text,
//     user: req.user.id,
//   })

//   res.status(200).json(goal)
// })

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