import { Component } from '@angular/core';
import { TodoListService } from 'src/app/services/todo-list.service';
// import { ITodo} from 'src/app/mocks/todo.mock';

@Component({
  selector: 'app-cpt-task-list',
  templateUrl: './cpt-task-list.component.html',
  styleUrls: ['./cpt-task-list.component.css']
})
export class CptTaskListComponent {
    constructor(public taskService: TodoListService){}
    
    // todoObj = {
    //   id: number,
    //   content: any,
    //   category: any,
    //   isUrgent: boolean
    // }
    
}
