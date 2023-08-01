import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../tarefa';
import { TarefaService } from '../tarefa.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-tarefas',
  templateUrl: './editar-tarefas.component.html',
  styleUrls: ['./editar-tarefas.component.css']
})
export class EditarTarefasComponent implements OnInit {

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

  editarTarefa(){
    this.service.editar(this.tarefa).subscribe(() => {
      this.router.navigate(['/listarTarefa'])
})
  }

  cancelar(){
    this.router.navigate(['/listarTarefa'])
  }
}
