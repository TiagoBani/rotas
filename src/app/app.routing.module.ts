import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
// import { CursosComponent } from './cursos/cursos.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
// import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';
// import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';

const appRoutes: Routes = [
    { path: 'cursos', canActivate: [AuthGuard],
        loadChildren: './cursos/cursos.module#CursosModule'},
    { path: 'alunos', canActivate: [AuthGuard],
        loadChildren: './alunos/alunos.module#AlunosModule'},
    { path: 'login', component: LoginComponent},
    { path: '', canActivate: [AuthGuard],
        component: HomeComponent},
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
