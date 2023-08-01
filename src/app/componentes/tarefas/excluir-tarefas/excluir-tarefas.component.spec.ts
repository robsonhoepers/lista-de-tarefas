import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirTarefasComponent } from './excluir-tarefas.component';

describe('ExcluirTarefasComponent', () => {
  let component: ExcluirTarefasComponent;
  let fixture: ComponentFixture<ExcluirTarefasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcluirTarefasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcluirTarefasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
