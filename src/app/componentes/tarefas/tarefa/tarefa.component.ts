import { Component, Input, OnInit } from '@angular/core';
import { Tarefa } from '../tarefa';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent implements OnInit {

  @Input()tarefa: Tarefa = {
    id: 0,
    conteudo: '',
    descricao: '',
    setor: '',
    equipamento: '',
    solicitante: '',
    data: '',
    horaInicio: '',
    horaFim: '',
    modelo: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  larguraTarefas(): string{
    if(this.tarefa.conteudo.length >= 256) {
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

}
