import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaPlanetasComponent } from './lista-planetas/lista-planetas.component';
import { BuscarPersonagemComponent } from './buscar-personagem/buscar-personagem.component';
import { DadosPersonagemComponent } from './dados-personagem/dados-personagem.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [	
    AppComponent,
    ListaPlanetasComponent,
    BuscarPersonagemComponent,
    DadosPersonagemComponent,
    
      
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
