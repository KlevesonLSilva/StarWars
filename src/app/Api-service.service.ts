import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { PersonagensPaginado, Planetas, PlanetasPaginado, Personagens } from './interface-servico'


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private readonly API = 'https://swapi.dev/api/'

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<PlanetasPaginado>(this.API +'planets/');
  }

  list2() {
    return this.http.get<PersonagensPaginado>(this.API +'people/');
  }

  buscaPersonagens(personagens){
    return this.http.get<PersonagensPaginado>(this.API +'people/?search=' + personagens);
  }

  buscaPlaneta(planetas){
    return this.http.get<PlanetasPaginado>(this.API +'planets/?search='+ planetas);
  }
  

}
