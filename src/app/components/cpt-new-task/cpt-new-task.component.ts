import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TodoListService } from 'src/app/services/todo-list.service';

@Component({
  selector: 'app-cpt-new-task',
  templateUrl: './cpt-new-task.component.html',
  styleUrls: ['./cpt-new-task.component.css']
})
export class CptNewTaskComponent {


  // VALEURS DU GROUPE DE BOUTONS CATEGORIES
  selectedCategory!: string;
  


  // FORMULAIRE 

  // déclaration la propriété de type FormGroup
  taskForm!: FormGroup

  // injection de formBuilder pour permettre de construire un formulaire.
  constructor(private formBuilder: FormBuilder, public taskService: TodoListService, public route: Router) { }

  ngOnInit() {

    // PARTIE FORMULAIRE

    // assigner à 'taskForm' le formulaire qu'on va créer
    // .group({})-> prend un objet (avec la liste clé/valeur) en argument
    this.taskForm = this.formBuilder.group({
      // clé avec la valeur null par défaut
      task_todo: [null],/*initialisation à null*/
      urgent: [false] /*initialisation à false*/
      // changera de valeur au checked
    })

    // PARTIE MODIFICATION

      // accéder à "category", etc en utilisant la propriété "state" de l'objet "history
      this.editSelectedCategory = history.state.category;
      this.editContent = history.state.content;
      this.editIsUrgent = history.state.isUrgent;
      console.log(this.editSelectedCategory)
      console.log(this.editContent)
      console.log(this.editIsUrgent)
    }
  
    
  

  // LISTE DES TASKS

  // créer une liste vide pour récupérer les tâches à accomplir
  newTaskList: any[] = [];


  // RECUPERER SAISIE, TRANSFORMER EN OBJET ET L'ENVOYER AU LS

  addTask() {
    // assigner la saisie utilisateur.rice à une variable
    let newTask = this.taskForm.value;
    // a retirer
    console.log(newTask)
    console.log('longueur' + this.newTaskList.length)

    // construction de l'objet de la todo "todoObj"
    let todoObj = {
      id: this.newTaskList.length + 1,
      content: newTask.task_todo,
      category: this.selectedCategory,
      isUrgent: newTask.urgent /*valeur checked or not*/
    }

    // ajouter l'objet à la liste newTaskList
    this.newTaskList.push(todoObj)

    // a retirer
    console.log(this.newTaskList)
    console.log(this.selectedCategory)

    // envoyer la tâche au LocalStorage
    this.taskService.addTaskToTodoList(todoObj);

    // rediriger vers la page no-task qui répond maintenant 
    // à la condition: LS non vide
    this.route.navigate(['/'])

  };


  // MODIFICATION DE TACHE
   editSelectedCategory!: string;
   editContent!: string;
   editIsUrgent!: boolean;

}



