import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { PersonagemService } from '../personagem.service';

import { ActivatedRoute, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { Location } from '@angular/common';



@Component({

  selector: 'app-edit-personagem',

  templateUrl: './edit-personagem.component.html',

  styleUrls: ['./edit-personagem.component.css']

})

export class EditPersonagemComponent implements OnInit{

  personagemForm: FormGroup;



  constructor(

    private personagemService: PersonagemService,

    private fb: FormBuilder,

    private location: Location,

    private activeRoute: ActivatedRoute,

    private router: Router,

    private toastr: ToastrService

  ){

    this.personagemForm = this.createForm();

  }



  createForm(){

    return this.fb.group({

      nome: new FormControl('', Validators.required),

      raca: new FormControl('', Validators.required),

      serieDeOrigem: new FormControl('', Validators.required)

    });

  }



  ngOnInit(){

    const id = this.activeRoute.snapshot.paramMap.get('id');

    if (id != null) {

      this.personagemService.getPersonagemById(id).valueChanges().subscribe(data => {

        this.personagemForm.setValue(data as any);

      });

    }

  }



  submitForm(){

    this.personagemService.updatePersonagem(this.personagemForm.value);

    this.toastr.success(

      this.personagemForm.controls['nome'].value + " atualizado."

    );

    this.router.navigate(['list-personagem']);

  }

  goBack(){

    this.location.back();

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
