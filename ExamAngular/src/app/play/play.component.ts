import { Component, OnInit } from '@angular/core';
import { QuestionTaskService } from './models/question-task.service';
import { Questions } from './models/questions';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {
  questions = [];
  questionClass = new Questions();
  questionClass2 = new Questions();
  questionClass3 = new Questions();
  constructor(private _service: QuestionTaskService) { }

  ngOnInit() {
    this._service.DisplayAll(function(data){
      console.log(data);
      this.questions = data;
    }.bind(this));
  }
  CheckAnswers() {
    console.log(this.questionClass);
    this._service.CheckAnswers1(this.questionClass);
    this.questionClass = new Questions();
  }
}
