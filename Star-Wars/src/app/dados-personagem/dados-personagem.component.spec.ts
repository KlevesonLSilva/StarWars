import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosPersonagemComponent } from './dados-personagem.component';

describe('DadosPersonagemComponent', () => {
  let component: DadosPersonagemComponent;
  let fixture: ComponentFixture<DadosPersonagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadosPersonagemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosPersonagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
