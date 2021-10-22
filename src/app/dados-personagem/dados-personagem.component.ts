import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../Api-service.service';
import { Personagens } from '../interface-servico';

@Component({
  selector: 'app-dados-personagem',
  templateUrl: './dados-personagem.component.html',
  styleUrls: ['./dados-personagem.component.css']
})
export class DadosPersonagemComponent implements OnInit {

  personagens: Personagens[] = []
  nome:string;

  constructor(private service: ApiServiceService) { }

  ngOnInit(): void {
    this.service.list2().subscribe(retornoDaAPI => {
      this.personagens = retornoDaAPI.results;
    })
  }
  buscaPersonagens() {
    debugger
    this.service.buscaPersonagens(this.nome).subscribe(retornoAPI => {
      this.personagens = retornoAPI.results;
    })
  }
}