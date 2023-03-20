import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { TodoListService } from 'src/app/services/todo-list.service';

@Component({
  selector: 'app-cpt-new-task',
  templateUrl: './cpt-new-task.component.html',
  styleUrls: ['./cpt-new-task.component.css']
})
export class CptNewTaskComponent {


  // VALEURS DU GROUPE DE BOUTONS CATEGORIES
  selectedCategory!: string;
  
  // BOUTON ISURGENT
  isUrgent(){
    return true
  }

  // FORMULAIRE 

  // déclaration la propriété de type FormGroup
  taskForm!: FormGroup

  // injection de formBuilder pour permettre de construire un formulaire.
  constructor(private formBuilder: FormBuilder, public taskService: TodoListService) { }

  ngOnInit() {
    // on assigne à 'taskForm' le formulaire qu'on va créer
    // .group({})-> prend un objet (avec la liste clé/valeur) en argument
    this.taskForm = this.formBuilder.group({
      // clé avec la valeur null par défaut
      task_todo: [null]
    })
  }

  // LISTE DES TASK
  // créer une liste vide pour les tâches à accomplir
  newTaskList:any [] = [];

  // SAISIE USER
  //récupèrer la saisie utilisateur.rice
  onSubmit(): any {
    return this.taskForm.value;
  }

  // CREATION DES ID
  //créer un indice par rapport à l'index 
  idNumber(){
    let idNbr = 1
    const newTaskListLength = this.newTaskList.length
      if(newTaskListLength!==0){
        idNbr+=newTaskListLength
    }
    return idNbr
}

  // RECUPERER SAISIE, TRANSFORMER EN OBJET ET L'ENVOYER AU LS
  addTask() {
    // assigne la saisie utilisateur.rice à une variable
    let newTask = this.onSubmit();
    // a retirer
    console.log(newTask)

    // construction de l'objet de la todo "todoObj"
    let todoObj = {
      id: this.idNumber(),
      content: newTask,
      category: this.selectedCategory,
      isUrgent: this.isUrgent() /*a faire !*/
    }

    // ajoute l'objet à la liste newTaskList
    this.newTaskList.push(todoObj)

    // a retirer
    console.log(this.newTaskList)
    console.log(this.selectedCategory)

    // envoie la tâche au LocalStorage
    this.taskService.addTaskToTodoList(todoObj);

    // effacer la saisie ???? -> RESETTTT !!!
    // newTask = '';
  };


}


