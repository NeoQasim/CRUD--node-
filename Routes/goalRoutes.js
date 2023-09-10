const express = require('express');
const { getGoals, postGoals, updateGoals, deleteGoals } = require('./Controller/Goalcontroller');
const router = express()


router.get("/get-data", getGoals)
router.post("/post-data", postGoals)
router.put("/update-data/:id", updateGoals)
router.delete("/delete-data/:id", deleteGoals)

module.exports = router