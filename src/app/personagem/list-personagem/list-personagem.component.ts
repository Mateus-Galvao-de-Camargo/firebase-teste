import { Component, OnInit } from '@angular/core';

import { PersonagemService } from '../personagem.service';

import { ToastrService } from 'ngx-toastr';

import { Personagem } from '../personagem';



@Component({

  selector: 'app-list-personagem',

  templateUrl: './list-personagem.component.html',

  styleUrls: ['./list-personagem.component.css'],

})

export class ListPersonagemComponent implements OnInit {

  page = 1;

  listaPersonagems: Personagem[] = [];

  listaVazia: Boolean = true;

  mostrarLoader: Boolean = true;



  constructor(

    private personagemService: PersonagemService,

    private toastr: ToastrService

  ) {}



  ngOnInit() {

    let fetchData = this.personagemService.getPersonagemList();

    fetchData.snapshotChanges().subscribe((data) => {

      this.listaPersonagems = [];

      if (data.length <= 0) {

        this.listaVazia = true;

      } else {

        this.listaVazia = false;

        data.forEach((item: any) => {

          let personagem = item.payload.toJSON();

          personagem['$key'] = item.key;

          this.listaPersonagems.push(personagem as Personagem);

        });

      }

      this.mostrarLoader = false;

    });

  }



  deletePersonagem(personagem: Personagem) {

    if (window.confirm('Tem certeza que deseja remover o personagem?')) {

      if (personagem.$key != null) {

        this.personagemService.deletePersonagem(personagem.$key);

        this.toastr.success(personagem.nome + ' removido com sucesso.');

      }

    }

  }

}
