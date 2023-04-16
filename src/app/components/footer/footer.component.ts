import { Component } from '@angular/core';
/*classes "NavigationEnd" et "Router" du module "@angular/router" 
qui sont nécessaires pour gérer la navigation et les 
événements de routage dans Angular.*/
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  /*injecter le service "Router" dans "router" 
  pour pouvoir l'utiliser dans la classe.*/
  constructor(private router: Router) { }

  /*stocker les états des boutons.initialisées à "false" par défaut.*/
  home: boolean = false;
  new: boolean = false;
  history: boolean = false;


  /* appeller la méthode à l'ouverture des pages*/
  ngOnInit() {
    this.coloredBtn();
  }

  /*attribuer les états des boutons en fonction de l'URL de la page courante.*/
  coloredBtn() {
    /*assigner l'url à une constante avec le service "Router" pour obtenir l'URL courante*/
    const currentUrl = this.router.url;
    /*comparer url pour assigner true ou laisser à false aux variables précédemment initialisées à false*/
    this.home = currentUrl === "/";
    this.new = currentUrl === "/new";
    this.history = currentUrl === "/history";
    /*souscrite à l'événement "NavigationEnd" émis par le service "Router" pour mettre à jour les états 
    des boutons à chaque changement de page.*/
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.coloredBtn();
      }
    })

  }
}

/* Méthode "subscribe" de l'objet "router.events" pour écouter 
les événements de navigation émis par le service "Router" dans Angular.
La fonction de rappel (callback) passée à "subscribe" prend un argument 
"event" qui représente l'événement de navigation émis. En utilisant 
"event instanceof NavigationEnd", on vérifie si l'événement est une 
instance de la classe "NavigationEnd", qui est un type d'événement 
de navigation spécifique qui est émis lorsque la navigation d'une page 
à une autre est terminée avec succès.

Si l'événement détecté est effectivement une instance de "NavigationEnd", 
alors la méthode "coloredBtn()" est appelée pour mettre à jour les styles 
des boutons du pied de page en fonction de la nouvelle URL de la page 
courante, assurant ainsi que les boutons sont synchronisés avec l'URL 
actuelle de l'application. Cela permet de maintenir les boutons du footer 
dans un état visuel cohérent avec la page active dans l'application.*/