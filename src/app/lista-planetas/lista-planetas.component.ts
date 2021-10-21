import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../Api-service.service';
import { Planetas } from '../interface-servico';


@Component({
  selector: 'app-lista-planetas',
  templateUrl: './lista-planetas.component.html',
  styleUrls: ['./lista-planetas.component.css'],
})
export class ListaPlanetasComponent implements OnInit {

  planetas: Planetas[] = []

  constructor(private service: ApiServiceService) { }

  ngOnInit(): void {
    this.service.list().subscribe(retornoDaAPI => {
      this.planetas = retornoDaAPI.results;
    })
  }

}
