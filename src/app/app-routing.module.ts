import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { AddPersonagemComponent } from './personagem/add-personagem/add-personagem.component';
import { ListPersonagemComponent } from './personagem/list-personagem/list-personagem.component';
import { EditPersonagemComponent } from './personagem/edit-personagem/edit-personagem.component';

const routes: Routes = [
  { path: '', redirectTo: '/list-personagem', pathMatch: 'full' },
  { path: 'add-personagem', component: AddPersonagemComponent },
  { path: 'list-personagem', component: ListPersonagemComponent },
  { path: 'edit-personagem/:id', component: EditPersonagemComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModule { }
