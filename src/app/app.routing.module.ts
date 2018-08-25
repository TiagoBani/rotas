import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
// import { CursosComponent } from './cursos/cursos.component';
import { LoginComponent } from './login/login.component';
// import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';
// import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';

const appRoutes: Routes = [
    {path: 'cursos', loadChildren: './cursos/cursos.module#CursosModule'},
    {path: 'alunos', loadChildren: './alunos/alunos.module#AlunosModule'},
    { path: '', component: HomeComponent},
    { path: 'login', component: LoginComponent},
    // { path: 'cursos', component: CursosComponent},
    // { path: 'naoEncontrado', component: CursoNaoEncontradoComponent},
    // { path: 'curso/:id', component: CursoDetalheComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot( appRoutes )
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
