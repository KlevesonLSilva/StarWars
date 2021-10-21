import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarPersonagemComponent } from './buscar-personagem.component';

describe('BuscarPersonagemComponent', () => {
  let component: BuscarPersonagemComponent;
  let fixture: ComponentFixture<BuscarPersonagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarPersonagemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarPersonagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
