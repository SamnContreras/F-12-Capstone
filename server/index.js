const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const {getQuestions} = require ("./controller");

app.get("/api", (req, res) => {
    console.log("It works");
    res.status(200).send("Yessir");
})

app.get("/api/questions", getQuestions);

app.listen(4000, () => {
    console.log(`Server running on port 4000`)
});