import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardService } from './dashboard/models/dashboard.service';
import { PlayComponent } from './play/play.component';
import { HomeComponent } from './dashboard/home/home.component';
import { AddComponent } from './dashboard/add/add.component';
import { QuestionTaskService } from './play/models/question-task.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PlayComponent,
    HomeComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [DashboardService, QuestionTaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
