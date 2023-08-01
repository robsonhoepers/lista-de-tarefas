import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../tarefa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarefa } from '../tarefa';

@Component({
  selector: 'app-excluir-tarefas',
  templateUrl: './excluir-tarefas.component.html',
  styleUrls: ['./excluir-tarefas.component.css']
})
export class ExcluirTarefasComponent implements OnInit {

  tarefa: Tarefa = {
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

  constructor(private service: TarefaService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((tarefa) => {
      this.tarefa = tarefa
  })
  }

  excluirTarefa() {
    if(this.tarefa.id) {
        this.service.excluir(this.tarefa.id).subscribe(() => {
            this.router.navigate(['/listarTarefa'])
        })
    }
  }

  cancelar() {
    this.router.navigate(['/listarTarefa'])
  }

}
