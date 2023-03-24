import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  constructor() { }
  //TABLEAU VIDE POUR ACCUEILLIR LES OBJETS DE LA TODO
  todoListLS:any[]=[]


  // CREATION et ENREGISTREMENT DS LE LS
  createTaskList() {
    // Je crée un tableau vide
    // const newTask: any[] = [];
    const newTask = JSON.stringify([]);
    
    // J'enregistre la liste dans le local storage avec le nom de clé todoList.
    // localStorage.setItem('todoList', JSON.stringify(newTask))
    localStorage.setItem('todoList', newTask);
  }

  // // RENVOIE DE LA LISTE CASTEE
  // getTask():[]{
  // // Je  récupère la todoList du LS et affecte sa valeur à une variable todoList
  // const todoList = JSON.parse(localStorage.getItem('todoList') || '[]');
  // console.log(this.getTask())
  // return this.getTask()
  
  // }

  // CREATION DE LA LISTE DANS LE LS
  addTaskToTodoList(newTask: { id: any; content: any; category: string; isUrgent: boolean /*boolean*/;}) {

    // Les newTask sont ajoutées au tableau vide
    this.todoListLS.push(newTask)
    
    // Je récupère la liste
    // const task = this.getTask();
    // je l'ajoute au LS
    localStorage.setItem('todoList', JSON.stringify(this.todoListLS));
  }

  // // AFFICHAGE DES TACHES par PRIORITE
  // getTaskByPriority(priority: ['isUrgent']): any [] {
  //   return this.todoListLS.filter(task => task.priority === this.todoListLS );
  // }
}



