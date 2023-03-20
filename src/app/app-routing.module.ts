import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './pages/history/history.component';
import { NewTaskComponent } from './pages/new-task/new-task.component';
import { TaskListComponent } from './pages/task-list/task-list.component';

const routes: Routes = [
  {
    path: "",
    component: TaskListComponent
  },

  {
    path: "new",
    component: NewTaskComponent
  },
  
  {
    path: "history",
    component: HistoryComponent
  }
];

// SCROLL POSITION au retour sur les pages!
@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})


export class AppRoutingModule { }
