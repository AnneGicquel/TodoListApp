import { Component } from '@angular/core';
import { ITodo, TODO } from 'src/app/mocks/todo.mock';

@Component({
  selector: 'app-cpt-task-list',
  templateUrl: './cpt-task-list.component.html',
  styleUrls: ['./cpt-task-list.component.css']
})
export class CptTaskListComponent {
    // liste des tâches à accomplir
    todo: ITodo[] = TODO;

}
