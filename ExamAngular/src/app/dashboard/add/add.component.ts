import { Component, OnInit } from '@angular/core';
import { Question } from '../models/question';
import { DashboardService } from '../models/dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  question = new Question();
  constructor(private _service: DashboardService, private _router: Router) { }

  ngOnInit() {
  }

  addQuestion() {
    this._service.addQuestion(this.question);
    this.question = new Question();
    this._router.navigateByUrl('');
  }

}
