const getGoals = (req, res) => {
    res.send("data fetched remodified 21")
}

const postGoals = (req, res) => {
    res.send("data send remodified 21")
}

const updateGoals = (req, res) => {
    const id = req.params.id;
    res.send(`product with id : ${id}  remodified 21`)
}

const deleteGoals = (req, res) => {
    const id = req.params.id
    res.send(`data with id ${id} is deleted remodified 21`)
}

module.exports = { getGoals, postGoals, updateGoals, deleteGoals }