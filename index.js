const express = require('express');
const app = express()

app.use(express.json())
app.use(express.urlencoded(({ extended: false })))
app.use("/", require('./Routes/goalRoutes'))
app.use("/goals:id/", require("./Routes/goalRoutes"))

app.listen(3001, () => console.log("server runing on 3001"))