import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TodoListService } from 'src/app/services/todo-list.service';
// import { ITodo} from 'src/app/mocks/todo.mock';

@Component({
  selector: 'app-cpt-task-list',
  templateUrl: './cpt-task-list.component.html',
  styleUrls: ['./cpt-task-list.component.css']
})
export class CptTaskListComponent {
    constructor(public taskService: TodoListService, 
                public route: Router
                ){}
    
  ///////////////////////////////////////////////////////////////////////
    todoList:any [] = []

    // // PERSISTANCE DES DATA AU REFRESH
    ngOnInit(){
    //   // this.taskService.todoListLS
    //   this.todoList=this.getLS()

    //   // console.log pour vérification
    //   console.log("Todo de vérif", this.todoList);
    // }

    // // RAPPEL DU LS POUR LE REFRESH DE LA PAGE
    // getLS():any[] {
    //   return this.taskService.getTask()
    

    this.todoList = this.taskService.getTask()
  console.log("Todo de vérif", this.todoList);
}

    // REDIRECTION PAR CLIC SUR:
    
    // BOUTON RADIO
    saveOnHistory(){
      this.route.navigate(['/history'])
    }
    // LA TASK
    editMyTask(){
      this.route.navigate(['/new'])
    }

    
}
