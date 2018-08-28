import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
// import { CursosComponent } from './cursos/cursos.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { CursosGuard } from './guards/cursos.guard';
// import { AlunosGuard } from './guards/alunos.guard';
// import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';
// import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';

const appRoutes: Routes = [
    { path: 'cursos', loadChildren: './cursos/cursos.module#CursosModule',
      canActivate: [AuthGuard], canActivateChild: [CursosGuard], canLoad: [AuthGuard]
    },
    { path: 'alunos', loadChildren: './alunos/alunos.module#AlunosModule',
      canActivate: [AuthGuard], canLoad: [AuthGuard], // canActivateChild: [AlunosGuard]
    },
    { path: 'login', component: LoginComponent},
    { path: '', component: HomeComponent,
      canActivate: [AuthGuard]
    },
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
