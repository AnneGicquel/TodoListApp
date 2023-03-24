import { Component } from '@angular/core';
import { TodoListService } from 'src/app/services/todo-list.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

  constructor(public taskService: TodoListService){}

  // variable qui accueille la clé 'todoList' dans le LS
  // preuve de LS non vide
  itemSet = localStorage.getItem('todoList');
}
