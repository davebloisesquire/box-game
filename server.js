const express = require('express')
const app = express()
const path = require('path')
const port = 3000
const mongoose = require("mongoose")

const { Rule } = require('./models/index')

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/timer-db', {
        useNewUrlParser: true
    }
)

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static("public"))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "./public/index.html"));
});

app.get("/add-rule", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/add-rule.html"));
});

// routes
app.use(require("./routes/api"));

app.listen(port, () => {
    console.log(`Box Game running on port ${ port }`);
    console.log(`Follow link: http://127.0.0.1:${port}/ to play`);
    console.log(`Follow link: http://127.0.0.1:${port}/add-rule to add rules`);
})