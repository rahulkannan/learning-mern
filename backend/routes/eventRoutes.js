const express = require('express')
const router = express.Router()
const {
  setEvent,
  getEvents
} = require('../controllers/eventController')

router.route('/').get(getEvents).post(setEvent)
// router.route('/:id').delete(protect, deleteGoal).put(protect, updateGoal)

module.exports = router
