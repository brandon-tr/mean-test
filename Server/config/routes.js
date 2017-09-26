var exam = require('../controllers/note.js')
var path = require('path')

module.exports = function(app){
    app.post('/register', function(req, res) {
        exam.register(req, res)
    })
    app.get('/getUsers', function (req, res) {
        exam.find(req, res)
    })
    app.post('/addQuestion', function(req, res) {
        exam.addQuestion(req, res)
    })
    app.get('/getQuestions', function (req, res) {
        exam.randomQuestions(req, res)
    })
    app.post('/CheckAnswers', function(req, res) {
        console.log(req.body)
    })
    app.all('*', (req, res, next) => {
        res.sendFile(path.resolve(__dirname, './../../ExamAngular/dist/index.html'))
    })
}