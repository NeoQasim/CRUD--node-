const getGoals = (req, res) => {
    res.send("data fetched ")
}

const postGoals = (req, res) => {
    res.send("data send ")
}

const updateGoals = (req, res) => {
    const id = req.params.id;
    res.send(`product with id : ${id} updated  `)
}

const deleteGoals = (req, res) => {
    const id = req.params.id
    res.send(`data with id ${id} is deleted `)
}

module.exports = { getGoals, postGoals, updateGoals, deleteGoals }