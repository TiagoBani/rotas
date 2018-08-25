import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CursosComponent } from './cursos.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

const cursosRoutes: Routes = [
    { path: '', component: CursosComponent},
    { path: 'naoEncontrado', component: CursoNaoEncontradoComponent},
    { path: ':id', component: CursoDetalheComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild( cursosRoutes )
  ],
  declarations: [],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
