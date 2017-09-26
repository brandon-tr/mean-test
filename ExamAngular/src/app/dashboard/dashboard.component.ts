import { Component, OnInit } from '@angular/core';
import { User } from './models/user';
import { DashboardService } from './models/dashboard.service';
import { dynamicSort } from './models/sort';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  ngOnInit() {
  }

}
