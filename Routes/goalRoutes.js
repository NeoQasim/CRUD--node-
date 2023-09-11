const express = require('express');
const { getGoals, postGoals, updateGoals, deleteGoals } = require('./Controller/Goalcontroller');
const router = express()

router.route("/goals").get(getGoals).post(postGoals)
router.route("/goals/:id").put(updateGoals).delete(deleteGoals)
module.exports = router
