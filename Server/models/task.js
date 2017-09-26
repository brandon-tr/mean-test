var mongoose = require('mongoose')

var UserSchema = new mongoose.Schema({
    name:{type:String, required:true},
    score:{type:Number, required:true, default: 0},
    percentage:{type:Number, required:true, default: 0}
},{timestamps:true})
var QuestionSchema = new mongoose.Schema({
    Question:{type:String, required:true},
    CorrectAnswer:{type:String, required:true},
    FakeAnswer1:{type:String, required:true},
    FakeAnswer2:{type:String, required:true}
},{timestamps:true})

mongoose.model('User', UserSchema)
mongoose.model('Question', QuestionSchema)