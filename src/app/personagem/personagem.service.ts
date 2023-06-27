import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';

import { Personagem } from './personagem';

@Injectable({

  providedIn: 'root'

})

export class PersonagemService {

  listaPersonagemsRef: AngularFireList<Personagem>;

  personagemRef: AngularFireObject<Personagem>;

  constructor(private db: AngularFireDatabase) {

    //inicialização dos caminhos ao firebase
    this.listaPersonagemsRef = this.db.list('list-personagems');

    this.personagemRef = this.db.object('list-personagems/' + 0);

  }

  // Inserir Personagem
  insertPersonagem(personagem: Personagem) {

    this.listaPersonagemsRef.push({

      nome: personagem.nome,
      raca: personagem.raca,
      serieDeOrigem: personagem.serieDeOrigem,

    });

  }

  // Buscar um único Objeto Personagem pelo seu ID
  getPersonagemById(id: string): AngularFireObject<Personagem> {

    this.personagemRef = this.db.object('list-personagems/' + id);

    return this.personagemRef;

  }

  // Fetch Students List
  getPersonagemList(): AngularFireList<Personagem> {

    return this.listaPersonagemsRef;

  }

  // Update Object
  updatePersonagem(personagem: Personagem) {

    this.personagemRef.update({

      nome: personagem.nome,
      raca: personagem.raca,
      serieDeOrigem: personagem.serieDeOrigem,

    });

  }

  // Delete Object
  deletePersonagem(id: String) {

    this.personagemRef = this.db.object('list-personagems/' + id);

    this.personagemRef.remove();

  }

}
