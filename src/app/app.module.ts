import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoTaskComponent } from './pages/no-task/no-task.component';
import { NewTaskComponent } from './pages/new-task/new-task.component';
import { TaskListComponent } from './pages/task-list/task-list.component';
import { HistoryComponent } from './pages/history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    NoTaskComponent,
    NewTaskComponent,
    TaskListComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
