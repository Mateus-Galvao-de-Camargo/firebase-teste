import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud-angular-firebase';

  //DI - Dependecy Injection
  constructor(private db: AngularFireDatabase){}

  test() {
    const objeto = {
      nome: "Denji",
      raca: "Humano",
      serieDeOrigem: "Chainsaw-man"
    }
     this.db.object("teste")
     .set(objeto)
     .then( () =>
        console.log("dados salvos")
      );

    this.db.list("listaTeste")
      .push(objeto)
      .then( () =>
      console.log("dados salvos")
    );
  }
}
