import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarTarefasComponent } from './componentes/tarefas/criar-tarefas/criar-tarefas.component';
import { ListarTarefasComponent } from './componentes/tarefas/listar-tarefas/listar-tarefas.component';
import { ExcluirTarefasComponent } from './componentes/tarefas/excluir-tarefas/excluir-tarefas.component';
import { EditarTarefasComponent } from './componentes/tarefas/editar-tarefas/editar-tarefas.component';

const routes: Routes = [
  {
      path: '',
      redirectTo: 'listarTarefa',
      pathMatch: 'full'
  },
  {
      path: 'criarTarefas',
      component: CriarTarefasComponent
  },
  {
      path: 'listarTarefa',
      component: ListarTarefasComponent
  },
  {
      path: 'tarefas/excluirTarefa/:id',
      component: ExcluirTarefasComponent
  },
  {
    path: 'tarefas/editarTarefa/:id',
    component: EditarTarefasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
