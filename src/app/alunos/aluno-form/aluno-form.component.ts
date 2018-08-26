import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit, OnDestroy {

  private aluno: any;
  private inscricao: Subscription;
  private formMudou: Boolean = false;

  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService
  ) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      params => {
        const id = Number(params['id']);
        this.aluno = this.alunosService.getAluno(id) === null ? {} : this.alunosService.getAluno(id) ;
      }
    );
  }
  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }
  onInput() {
    this.formMudou = true;
    console.log('mudou');
  }
  podeMudarRota() {
    if ( this.formMudou ) {
      return confirm('Tem certesa que deseja sair da pagina?');
    }
    return true;
  }
}
