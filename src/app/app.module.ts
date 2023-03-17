import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewTaskComponent } from './pages/new-task/new-task.component';
import { TaskListComponent } from './pages/task-list/task-list.component';
import { HistoryComponent } from './pages/history/history.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CptNoTaskComponent } from './components/cpt-no-task/cpt-no-task.component';
import { CptTaskListComponent } from './components/cpt-task-list/cpt-task-list.component';
import { CptHistoryComponent } from './components/cpt-history/cpt-history.component';
import { CptNewTaskComponent } from './components/cpt-new-task/cpt-new-task.component';


@NgModule({
  declarations: [
    AppComponent,
    NewTaskComponent,
    TaskListComponent,
    HistoryComponent,
    HeaderComponent,
    FooterComponent,
    CptNoTaskComponent,
    CptTaskListComponent,
    CptHistoryComponent,
    CptNewTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
