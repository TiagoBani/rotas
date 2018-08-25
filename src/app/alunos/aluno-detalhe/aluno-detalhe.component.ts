import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AlunosService } from './../alunos.service';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

  private inscricao: Subscription;
  private aluno: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunosService: AlunosService
  ) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      params => {
        const id = Number(params['id']);
        this.aluno = this.alunosService.getAluno(id);
      }
    );
  }
  editarContato() {
    this.router.navigate(['alunos', this.aluno === null ? 'novo' : this.aluno.id, 'editar']);
  }
  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }
}
