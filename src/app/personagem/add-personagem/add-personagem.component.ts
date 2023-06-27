import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'

import { PersonagemService } from '../personagem.service';

import { ToastrService } from 'ngx-toastr';

@Component({

  selector: 'app-add-personagem',

  templateUrl: './add-personagem.component.html',

  styleUrls: ['./add-personagem.component.css']

})

export class AddPersonagemComponent implements OnInit{

  personagemForm: FormGroup;

  constructor(

    private personagemService: PersonagemService,

    private fb: FormBuilder,

    private toastr: ToastrService){

      this.personagemForm = this.createForm();

    }

    ngOnInit(){

      this.personagemService.getPersonagemList();

    }

    createForm(){

      return this.fb.group({

        nome: new FormControl('', Validators.required),
        raca: new FormControl('', Validators.required),
        serieDeOrigem: new FormControl('', Validators.required)

      });

    }

    resetForm(){

      this.personagemForm.reset();

    }

    submitForm(){

      this.personagemService.insertPersonagem(this.personagemForm.value);

      this.toastr.success(

        this.personagemForm.controls['nome'].value + " adicionado"

      );

    }

    get nome(){

      return this.personagemForm.get('nome');

    }

    get raca(){

      return this.personagemForm.get('raca');

    }

    get serieDeOrigem(){

      return this.personagemForm.get('serieDeOrigem');

    }

}
