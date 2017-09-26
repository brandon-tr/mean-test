import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { DashboardService } from '../models/dashboard.service';
import { Router } from '@angular/router';
import { dynamicSort } from '../models/sort';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user = new User();
  name;
  userList = [];
  constructor(private _service: DashboardService, private _router: Router) { }

  ngOnInit() {
    if (JSON.parse(localStorage.getItem('name')) !== null ) {
      this.name = JSON.parse(localStorage.getItem('name'));
    }else {
      this.user = prompt('Please type a name to login');
      while (this.user === '') {
        this.user = prompt('You must type a name to login');
      }
      if (this.user !== null) {
        this._service.Register(this.user);
      }
      localStorage.setItem('name', JSON.stringify(this.user));
      this.name = this.user;
      this.user = new User();
    }
      this._service.DisplayAll(function(data){
        this.userList = data;
        this.userList.sort(dynamicSort('-score'));
      }.bind(this));
  }
  Play() {
    this._router.navigateByUrl('play');
  }

}
