const express = require(`express`)
const app = express()
require(`dotenv`).config()
const PORT = process.env.PORT || 3000
app.use("/static", express.static("Public"))
const Budget = require("./Models/budget")

app.use(express.urlencoded({extended:true}))

// HOME ROUTE
app.get("/", (req, res) => {
    res.send("This is working")
})

// INDEX ROUTE
app.get("/budgets", (req, res) => {
    res.render("index.ejs", { Budget })
})

//NEW ROUTE
app.get("/budgets/new", (req, res) => {
    res.render("new.ejs")
})

// recieve the data from the form 
app.post("/budgets", (req, res) => {
    Budget.push(req.body)
    console.log(req.body)
    res.redirect("/budgets/")
})

//SHOW ROUTE
app.get("/budgets/:index", (req, res) => {
    res.render("show.ejs", {
        index: req.params.index,
        budget: Budget[req.params.index]

    })
})

app.listen(PORT, (req, res) => {
    console.log(`Can you hear the ove on port ${PORT}?`)
})