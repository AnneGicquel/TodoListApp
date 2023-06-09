import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TodoListService } from 'src/app/services/todo-list.service';


@Component({
  selector: 'app-cpt-task-list',
  templateUrl: './cpt-task-list.component.html',
  styleUrls: ['./cpt-task-list.component.css']
})
export class CptTaskListComponent {


  constructor(public taskService: TodoListService,
    public route: Router
  ) { }


  todoList: any[] = []

  // déclaration d'une méthode pour le ngOnInit
  getTaskList() {
    this.todoList = this.taskService.getTask()
  }

  // // PERSISTANCE DES DATA AU REFRESH
  ngOnInit() {
    this.getTaskList()
    // vérification
    console.log("Todo de vérif", this.todoList);
  }


  // REDIRECTION PAR CLIC SUR:

  // -> BOUTON RADIO
  saveOnHistory() {
    // Naviguer vers la page d'historique
    this.route.navigate(['/history']);
  }

  // -> LA TASK
  
  //-> lien vers la modification de tache sur page new

  /* méthode navigate accepte plusieurs arguments,
  la route de destination et un objet d'état 
  ({ state: {...} }) pour envoyer des data 
  à la page new.*/
   
  editMyTask(item: any) {
    this.route.navigate(['/new'], { state: { category: item.category, content: item.content, isUrgent: item.isUrgent } });
  }



  // AFFICHAGE DES P:

  /* .some() vérifie si une tâche urgente ou non existe 
  dans la todoList obtenue à partir de taskService.getTask()
  Renvoie booléen qui permet la gestion de l'afficher selon*/

  // -> ISURGENT
  displayUrgentTask(): boolean {
    // Utilisation de la méthode some() pour vérifier si au moins une tâche urgente existe dans le tableau de tâches
    return this.taskService.getTask().some((item: { isUrgent: any; }) => item.isUrgent);
  }

  // -> OTHERTASK
  // Méthode pour vérifier si des tâches non urgentes existent
  displayOtherTask(): boolean {
    // Utilisation de la méthode some() pour vérifier si au moins une tâche non urgente existe dans le tableau de tâches
    return this.taskService.getTask().some((item: { isUrgent: any; }) => !item.isUrgent);
  }
}

