import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class QuestionTaskService {

  constructor(private _http: Http) { }

  DisplayAll(callback) {
    this._http.get(`/getQuestions`).subscribe(
      (data) => {callback (data.json()); },
      (err) => {console.log('There has been an error', err); }
    );
  }
  CheckAnswers1(questions) {
    this._http.post('/CheckAnswers', questions)
    .map(data => data.json())
    .toPromise();
  }
}
