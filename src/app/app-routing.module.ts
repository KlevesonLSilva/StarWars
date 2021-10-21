import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarPersonagemComponent } from './buscar-personagem/buscar-personagem.component';
import { ListaPlanetasComponent } from './lista-planetas/lista-planetas.component';

const routes: Routes = [
  { path: 'planetas', component: ListaPlanetasComponent },
  { path: 'personagens', component: BuscarPersonagemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }