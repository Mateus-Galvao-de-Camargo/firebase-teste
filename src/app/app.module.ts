import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";

import { environment }  from '../environment';

import { AppRoutingModule } from './app-routing.module';

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxPaginationModule } from 'ngx-pagination';

import { ListPersonagemComponent } from './personagem/list-personagem/list-personagem.component';
import { EditPersonagemComponent } from './personagem/edit-personagem/edit-personagem.component';
import { AddPersonagemComponent } from './personagem/add-personagem/add-personagem.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPersonagemComponent,
    EditPersonagemComponent,
    AddPersonagemComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
