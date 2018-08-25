import { AlunosComponent } from './alunos.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
/**
 * Rotas filhas
 */
const alunosRoutes = [
    {path: '', component: AlunosComponent, children: [
        {path: 'novo', component: AlunoFormComponent },
        {path: ':id', component: AlunoDetalheComponent },
        {path: ':id/editar', component: AlunoFormComponent },
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
