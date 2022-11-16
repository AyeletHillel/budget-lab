const express = require(`express`)
const app = express()
require(`dotenv`).config()
const PORT = process.env.PORT || 3000
app.use("/static", express.static("Public"))
const Budget = require("./Models/budget")

app.get("/budgets", (req, res) => {
    res.render("index.ejs", { Budget })
})

app.get("/", (req, res) => {
    res.send("This is working")
})

app.listen(PORT, (req, res) => {
    console.log(`Can you hear the ove on port ${PORT}?`)
})