var mongoose = require('mongoose')
var User = mongoose.model('User')
var Question = mongoose.model('Question')

module.exports = {
    register: function(req, res) {
        var register = User(req.body);
        register.save(function(err){
            console.log(err)
            res.json(err)
        })
    },
    addQuestion: function(req, res) {
        var question =  Question(req.body);
        console.log(question)
        question.save(function(err){
            res.json(err)
        })
    },
    find: function(req, res) {
        User.find({}, function(err, user){
            res.json(user)
        })
    },
    randomQuestions: function(req, res) {
        Question.count().exec(function(err, count){
            count -=2;
            var random = Math.floor(Math.random() * count)
            console.log(random)
            var q = Question.find({}).skip(random).limit(3)
            q.exec(function (err, questions) {
                res.json(questions)
            })
        })
    },
    // findUser: function(req, res) {
    //     User.findOne({re}, function(err, user){
            
    //     })
    // },
}