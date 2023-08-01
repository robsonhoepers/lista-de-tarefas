import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { CriarTarefasComponent } from './componentes/tarefas/criar-tarefas/criar-tarefas.component';
import { EditarTarefasComponent } from './componentes/tarefas/editar-tarefas/editar-tarefas.component';
import { ExcluirTarefasComponent } from './componentes/tarefas/excluir-tarefas/excluir-tarefas.component';
import { ListarTarefasComponent } from './componentes/tarefas/listar-tarefas/listar-tarefas.component';
import { TarefaComponent } from './componentes/tarefas/tarefa/tarefa.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    CriarTarefasComponent,
    EditarTarefasComponent,
    ExcluirTarefasComponent,
    ListarTarefasComponent,
    TarefaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
