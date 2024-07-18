require('dotenv').config()

const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.urlencoded({extended: false}))
app.use(express.json());
app.use(express.text());
app.use(cors());

const tadaController = require("./controller/tada.controller")

app.get("/", (req, res) => res.send("Campsys loyalty mock api"));
app.use('/tada/create', tadaController.create)
app.use('/tada/check', tadaController.check)

app.listen(process.env.PORT || 5000, () => {
    console.log("Server is running at port " +(process.env.PORT || 5000)+ " ....")
})
