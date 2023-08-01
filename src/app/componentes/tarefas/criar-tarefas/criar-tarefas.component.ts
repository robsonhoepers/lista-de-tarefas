import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../tarefa';
import { TarefaService } from '../tarefa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-tarefas',
  templateUrl: './criar-tarefas.component.html',
  styleUrls: ['./criar-tarefas.component.css']
})
export class CriarTarefasComponent implements OnInit {

  tarefa: Tarefa = {
    conteudo: '',
    descricao: '',
    setor: '',
    equipamento: '',
    solicitante: '',
    data: '',
    horaInicio: '',
    horaFim: '',
    modelo: 'modelo2'
  }

  constructor(private service:TarefaService,
              private router: Router) { }

  ngOnInit(): void {
  }

  criarTarefa(){
    this.service.criar(this.tarefa).subscribe(() => {
      this.router.navigate(['/listarTarefa'])
    })
  }

  cancelar(){
    this.router.navigate(['/listarTarefa'])
  }
}
