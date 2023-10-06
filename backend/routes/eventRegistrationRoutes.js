const express = require('express')
const router = express.Router()
const {
  registerEvent,
  deleteRegistration,
  getRegisteredEventsForUser
} = require('../controllers/registrationController')

router.route('/').get(getRegisteredEventsForUser);
router.route('/').post(registerEvent).delete(deleteRegistration)

module.exports = router
