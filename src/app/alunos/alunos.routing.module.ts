import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AlunosGuard } from '../guards/alunos.guard';
import { AlunosComponent } from './alunos.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunosDeactivedGuard } from '../guards/alunos-deactived.guard';
/**
 * Rotas filhas
 */
const alunosRoutes = [
    {path: '', component: AlunosComponent,
    canActivateChild: [AlunosGuard],
    children: [
        {   path: 'novo', component: AlunoFormComponent },
        {   path: ':id', component: AlunoDetalheComponent },
        {   path: ':id/editar', component: AlunoFormComponent,
            canDeactivate: [AlunosDeactivedGuard],
        },
    ]},
];
/**
 * Rotas had-coded
 */
/*
const alunosRoutes = [
    {path: 'alunos', component: AlunosComponent },
    {path: 'alunos/novo', component: AlunoFormComponent },
    {path: 'alunos/:id', component: AlunoDetalheComponent },
    {path: 'alunos/:id/editar', component: AlunoFormComponent },
];
*/
@NgModule({
    imports: [RouterModule.forChild(alunosRoutes)],
    exports: [RouterModule]
})
export class AlunosRoutingModule { }
