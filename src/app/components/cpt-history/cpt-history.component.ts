import { Component } from '@angular/core';
import { TodoListService } from 'src/app/services/todo-list.service';

@Component({
  selector: 'app-cpt-history',
  templateUrl: './cpt-history.component.html',
  styleUrls: ['./cpt-history.component.css']
})
export class CptHistoryComponent {

  constructor(public taskService: TodoListService){}

}
