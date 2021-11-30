const questions = require("../client/questions");

module.exports = {
    getQuestions: (req, res) => {
        console.log("hello world")
        res.status(200).send(questions)
    }
};