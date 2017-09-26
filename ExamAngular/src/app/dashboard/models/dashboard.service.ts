import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import 'rxjs';

@Injectable()
export class DashboardService {

  constructor(private _http: Http) { }
  Register(user) {
    user = {'name': user};
    this._http.post('/register', user)
      .map(data => data.json())
      .toPromise();
  }
  DisplayAll(callback) {
    this._http.get(`/getUsers`).subscribe(
      (data) => {callback (data.json()); },
      (err) => {console.log('There has been an error', err); }
    );
  }
  addQuestion(question) {
    this._http.post('/addQuestion', question)
      .map(data => data.json())
      .toPromise();
  }
}
