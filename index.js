const express = require('express');
const app = express()

app.use("/", require('./Routes/goalRoutes'))


app.listen(21, () => console.log("server runing on 21"))